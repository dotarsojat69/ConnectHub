import * as z from "zod"
import { Models } from "appwrite"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { PostsSchema } from "@/lib/validation"
import { toast } from "sonner"
import { useUserContext } from "@/context/AuthContext"
import FileUploader from "../custom/FileUploader"
import Loader from "../custom/Loader"
import { useCreatePost, useUpdatePost } from "@/lib/react-query/queriesAndMutation"

type PostFormProps  ={
    post?: Models.Document;
    action: "Create" | "Update";
};

const PostForm = ({ post, action }: PostFormProps) => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const form = useForm<z.infer<typeof PostsSchema>>({
    resolver: zodResolver(PostsSchema),
    defaultValues: {
      caption: post ? post?.caption : "",
      file: [],
      location: post ?  post?.location : "",
      tags: post ? post.tags.join(',') : "",
    },
  });
  
  const { mutateAsync: createPost, isPending: isLoadingCreate } = useCreatePost();
  const { mutateAsync: updatePost, isPending: isLoadingUpdate } = useUpdatePost();
  
  const onSubmit = async (value: z.infer<typeof PostsSchema>) => {
    if (post && action === "Update") {
      const updatedPost = await updatePost({
        ...value,
        postId: post.$id,
        imageId: post.imageId,
        imageUrl: post.imageUrl,
      });

      if (!updatedPost) {
        toast(`${action} post failed. Please try again.`);
      }
      return navigate(`/post/${post.$id}`);
    }

    const newPost = await createPost({
        ...value,
        userId: user.id,
    });
    
    if(!newPost) {
        toast("Please try again");
    };
    
    navigate("/");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className="flex flex-col gap-9 w-full max-w-5xl">
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Caption</FormLabel>
              <FormControl>
                <Textarea className="shad-textarea custom-scrollbar" {...field} />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add Photos</FormLabel>
              <FormControl>
                <FileUploader 
                fieldChange={field.onChange}
                mediaUrl={post?.mediaUrl}

                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add Location</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add Tags
              (separated by comma " , ")</FormLabel>
              <FormControl>
                <Input 
                type="text"
                placeholder="JS, React, NextJs"
                className="shad-input" {...field}/>
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <div className="flex gap-4 items-center justify-end">
        <Button 
          type="button" 
          className="shad-button_dark_4"
          onClick={() => navigate(-1)}>
          Cancel
        </Button>
        <Button
          type="submit"
          className="shad-button_primary whitespace-nowrap"
          disabled={isLoadingCreate || isLoadingUpdate}>
          {(isLoadingCreate || isLoadingUpdate) && <Loader />}
          {action} Post
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default PostForm
