import { useForm, Resolver } from "react-hook-form"

type FormValues = {
  firstName: string
  lastName: string
}

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
        firstName: {
          type: "required",
          message: "This is required.",
        },
      }
      : {},
  }
}

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver })
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form className="mx-auto flex justify-center items-center flex-col gap-10" onSubmit={onSubmit}>
      <h2 className="text-2xl">Register your form</h2>
      <div className="relative">
        <input className="text-white p-2 outline-none rounded-sm bg-[#182e43]" {...register("firstName")} placeholder="Email" />
        {errors?.firstName && <p className="absolute top-10">{errors.firstName.message}</p>}
      </div>

      <input className=" p-2  text-white rounded-sm outline-none bg-[#182e43]" {...register("lastName")} placeholder="Password" />

      <button className="bg-blue-500 w-48 p-2 rounded-sm">SignIn</button>
    </form>
  )
}