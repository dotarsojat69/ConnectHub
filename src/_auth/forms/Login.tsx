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
import { LoginSchema } from "@/lib/validation"
import Loader from "@/components/custom/Loader"
import { Link, useNavigate } from "react-router-dom"
import { useLoginAccount } from "@/lib/react-query/queriesAndMutation"
import { useUserContext } from "@/context/AuthContext"

const Login = () => {
  
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

const { mutateAsync: loginAccount, isPending } = useLoginAccount();

const form = useForm<z.infer<typeof LoginSchema>>({
  resolver: zodResolver(LoginSchema),
  defaultValues: {
    email: "",
    password: "",
  },
});

 
const handleLogin = async (user: z.infer<typeof LoginSchema>) => {

  const session = await loginAccount(user);

  if (!session) {
    return toast("Login failed. Please try again.");
  
  }

  const isLoggedIn = await checkAuthUser();

  if (isLoggedIn) {
    form.reset();

    navigate("/");
  } else {
    return toast("Login failed. Please try again.");
  
  }
};

  return (
      <Form {...form}>
           <div className="sm:w-420 flex-center flex-col">
            <img src="/assets/icons/logo-new.svg" alt="logo" />

            <h2 className="h3-bold md:h2-bold pt-5 sm:pt-8">
                Login to your account
            </h2>
            <p className="text-slate-500 small-medium md:base-regular mt-2">
                Welcome back! Please login to your account
            </p>        


      <form onSubmit={form.handleSubmit(handleLogin)} className="flex flex-col gap-5 w-full mt-4">
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
        {isPending || isUserLoading ? (
            <div className="flex-center gap-2">
                <Loader /> Loading...
            </div>
        ) : (
         "Login"
        )}
        </Button>

        <p className="text-small-regular text-black text-center mt-2">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-slate-600 text-small-semibold ml-1 underline">
                Register
            </Link>
        </p>
      </form>
      </div>
    </Form>
  );
};

export default Login
