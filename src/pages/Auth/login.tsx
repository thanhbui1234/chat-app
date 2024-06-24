import { useForm } from "react-hook-form";
import { loginSchema } from "../../schema/shcema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth } from "../../libs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
type FormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit(async (data: FormValues) => {
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="flex flex-col justify-center m-auto items-center">
      <form
        className="mx-auto flex justify-center  flex-col gap-10 "
        onSubmit={onSubmit}
      >
        <h2 className="text-2xl text-center">Login your form nigga</h2>
        <div className="relative w-[500px]">
          <input
            className="text-white p-2 outline-none rounded-sm bg-[#182e43] w-[100%]"
            {...register("email")}
            placeholder="Email"
          />
          {errors.email && (
            <p className="absolute animate-fadeIn top-12 text-red-500 duration-100 ">
              {errors.email.message}
            </p>
          )}
        </div>
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
        </div>
        <button type="submit" className="bg-blue-500 p-2 rounded-sm w-[100%]">
          SignUp
        </button>
        <h2 className="items-start">
        Not account signup
        <Link className="m-2 text-blue-500" to="/register">
          here
        </Link>
      </h2>
      </form>
    </div>
  );
}
