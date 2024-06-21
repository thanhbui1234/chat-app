import { useForm } from "react-hook-form";
import { registerSchema } from "../../schema/shcema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth, db } from "../../libs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

type FormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = handleSubmit(async (data: FormValues) => {
    const { email, password } = data;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(db, "users"), {
        data,
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form
      className="mx-auto flex justify-center items-center flex-col gap-10 "
      onSubmit={onSubmit}
    >
      <h2 className="text-2xl">Register your form</h2>
      <div className="relative w-[500px]">
        <input
          className="text-white p-2 outline-none rounded-sm bg-[#182e43] w-[100%]"
          {...register("userName")}
          placeholder="Username"
        />
        {errors.userName && (
          <p className="absolute top-12 text-red-500 ">
            {errors.userName.message}
          </p>
        )}
      </div>
      <div className="relative w-[500px]">
        <input
          className="text-white p-2 outline-none rounded-sm bg-[#182e43] w-[100%]"
          {...register("email")}
          placeholder="Email"
        />
        {errors.email && (
          <p className="absolute top-12 text-red-500 ">
            {errors.email.message}
          </p>
        )}
      </div>{" "}
      <div className="relative w-[500px]">
        <input
        type="password"
          className="text-white p-2 outline-none rounded-sm bg-[#182e43] w-[100%]"
          {...register("password")}
          placeholder="Password"
        />
        {errors.password && (
          <p className="absolute top-12 text-red-500 ">
            {errors.password.message}
          </p>
        )}
      </div>{" "}
      <div className="relative w-[500px]">
        <input
        type="password"
          className="text-white p-2 outline-none rounded-sm bg-[#182e43] w-[100%]"
          {...register("confirmPassword")}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && (
          <p className="absolute top-12 text-red-500 w-[100%]">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <button type="submit" className="bg-blue-500 p-2 rounded-sm w-[100%]">
        SignUp
      </button>
    </form>
  );
}
