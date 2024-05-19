import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { RegisterSchema } from "@/lib/validation"
import Loader from "@/components/custom/Loader"
import { Link, useNavigate } from "react-router-dom"
import { useCreateAccount, useLoginAccount } from "@/lib/react-query/queriesAndMutation"
import { useUserContext } from "@/context/AuthContext"

const Register = () => {
  
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });
  
  const { mutateAsync: createUserAccount, isPending: isCreatingAccount } = useCreateAccount();
  const { mutateAsync: loginAccount, isPending: isLogin } = useLoginAccount();

const handleRegister = async (values: z.infer<typeof RegisterSchema>) => {
    const newUser = await createUserAccount(values);

    if (!newUser) {
      return toast("Registration failed. Please try again.");
    }

    const session = await loginAccount({
        email: values.email,
        password: values.password,
    });

    if(!session) {
        return toast("Something went wrong. Please try again.");

        navigate("/login")
    }

    const isLoggedIn = await checkAuthUser();

    if(isLoggedIn) {
      form.reset();

      navigate("/")
    } else {
      return toast("Something went wrong while logging in.");
    }
  };

  return (
      <Form {...form}>
           <div className="sm:w-420 flex-center flex-col">
            <img src="/assets/images/logo.svg" alt="logo" />

            <h2 className="h3-bold md:h2-bold pt-5 sm:pt-8">
                Create a new account
            </h2>
            <p className="text-slate-500 small-medium md:base-regular mt-2">
                To use ConnectHub enter your details
            </p>        


      <form onSubmit={form.handleSubmit(handleRegister)} className="flex flex-col gap-5 w-full mt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="shad-button_primary">
        {isCreatingAccount || isLogin || isUserLoading ? (
            <div className="flex-center gap-2">
                <Loader /> Loading...
            </div>
        ): "Register"}
        </Button>

        <p className="text-small-regular text-black text-center mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-slate-600 text-small-semibold ml-1 underline">
                Login
            </Link>
        </p>
      </form>
      </div>
    </Form>
  )
}

export default Register
