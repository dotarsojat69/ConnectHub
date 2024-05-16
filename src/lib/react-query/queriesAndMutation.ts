import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query"
import { createUserAccount, loginAccount, logoutAccount } from "../appwrite/api"
import { INewUser } from "@/types"

export const useCreateAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    });
};

export const useLoginAccount = () => {
    return useMutation({
        mutationFn: (user: {email: string; password: string }) => loginAccount(user),
    });
};

export const useLogoutAccount = () => {
    return useMutation({
        mutationFn: logoutAccount
    });
};