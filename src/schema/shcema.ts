import { NavigateFunction } from "react-router-dom";
import z from "zod";
export const shcema = z.object({
  search: z.string(),
});

export const registerSchema = z
  .object({
    userName: z.string().min(1, "User is requied"),
    email: z.string().email("Invalid Email"),
    password: z.string().min(6, "Password must be at least  six charector "),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least six charector"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"], // path of error
  });

export const loginSchema = z.object({
  email: z.string().email("Invalid Email"),
  password: z.string().min(6, "Password must be at least  six charector "),
});


export interface CustomError extends Error {
  code?: string;
}


export interface AppState {
  loading: boolean;
  error: string | null;
  user: unknown | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setUser: (user: any | null) => void;
  login : (email:string , password:string,navigate :NavigateFunction ) =>void,
  fetchUserInfo: (uid:string) =>void
}