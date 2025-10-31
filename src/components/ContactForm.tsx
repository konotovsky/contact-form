import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

export interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: boolean;
}

interface ContactFormProps {
  onSubmit: () => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<Inputs>();

  const onFormSubmit: SubmitHandler<Inputs> = (data) => {
    onSubmit();

    console.log(data);

    resetField("firstName");
    resetField("lastName");
    resetField("email");
    resetField("queryType");
    resetField("message");
    resetField("consent");
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="bg-white p-6 md:p-10 rounded-2xl"
    >
      <h1 className="font-karla font-bold text-[32px] leading-[100%] tracking-[-1px] text-grey-900">
        Contact Us
      </h1>
      <div className="mt-8 flex flex-col gap-5 items-stretch">
        <div className="flex flex-col gap-6 md:flex-row md:gap-4">
          <label className="font-karla text-base leading-[150%] text-grey-900 md:flex-1">
            First Name *
            <input
              className="mt-2 font-karla text-lg leading-[150%] py-3 px-6 block border border-grey-500 rounded-lg w-full focus:outline-none focus:border-green-600"
              id="firstName"
              {...register("firstName", { required: "This field is required" })}
            />
            {errors.firstName && (
              <p className="mt-2 font-karla text-red">
                {errors.firstName.message}
              </p>
            )}
          </label>

          <label className="font-karla text-base leading-[150%] text-grey-900 md:flex-1">
            Last Name *
            <input
              className="mt-2 font-karla text-lg leading-[150%] py-3 px-6 block border border-grey-500 rounded-lg w-full focus:outline-none focus:border-green-600"
              id="lastName"
              {...register("lastName", { required: "This field is required" })}
            />
            {errors.lastName && (
              <p className="mt-2 font-karla text-red">
                {errors.lastName.message}
              </p>
            )}
          </label>
        </div>
        <label className="font-karla text-base leading-[150%] text-grey-900">
          Email Address *
          <input
            className="mt-2 font-karla text-lg leading-[150%] py-3 px-6 block border border-grey-500 rounded-lg w-full focus:outline-none focus:border-green-600"
            id="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-2 font-karla text-red">{errors.email.message}</p>
          )}
        </label>

        <fieldset>
          <legend className="font-karla text-base leading-[150%] text-grey-900">
            Query Type *
          </legend>
          <div className="md:flex md:gap-4">
            <label className="has-[input:checked]:border-green-600 has-[input:checked]:bg-green-200 cursor-pointer flex items-center gap-3 mt-4 py-3 px-6 border border-grey-500 rounded-lg w-full font-karla text-lg leading-[150%] text-grey-900">
              <input
                className="appearance-none w-5 h-5 border-2 border-grey-500 rounded-full checked:border-green-600 relative checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:w-3 checked:after:h-3 checked:after:bg-green-600 checked:after:rounded-full"
                type="radio"
                value="General Enquiry"
                {...register("queryType", {
                  required: "Please select a query type",
                })}
              />
              General Enquiry
            </label>
            <label className="has-[input:checked]:border-green-600 cursor-pointer has-[input:checked]:bg-green-200 flex items-center gap-3 mt-4 py-3 px-6 border border-grey-500 rounded-lg w-full font-karla text-lg leading-[150%] text-grey-900">
              <input
                className="appearance-none w-5 h-5 border-2 border-grey-500 rounded-full checked:border-green-600 relative checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:w-3 checked:after:h-3 checked:after:bg-green-600 checked:after:rounded-full"
                type="radio"
                value="Support Request"
                {...register("queryType", {
                  required: "Please select a query type",
                })}
              />
              Support Request
            </label>
          </div>
          {errors.queryType && (
            <p className="mt-2 font-karla text-red">
              {errors.queryType.message}
            </p>
          )}
        </fieldset>

        <label className="font-karla text-base leading-[150%] text-grey-900">
          Message *
          <textarea
            className="min-h-60 md:min-h-[132px] xl:min-h-[105px] mt-2 font-karla text-lg leading-[150%] py-3 px-6 block border border-grey-500 rounded-lg w-full focus:outline-none focus:border-green-600"
            id="message"
            {...register("message", {
              required: "This field is required",
            })}
          />
          {errors.message && (
            <p className="mt-2 font-karla text-red">{errors.message.message}</p>
          )}
        </label>
      </div>

      <div className="my-10">
        <label className="flex items-center gap-2 cursor-pointer font-karla text-base leading-[150%] text-grey-900">
          <input
            type="checkbox"
            className="cursor-pointer appearance-none min-w-[18px] min-h-[18px] border-2 border-grey-500 rounded-sm checked:border-green-600 checked:bg-green-600 relative checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:text-xs checked:after:font-bold checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
            {...register("consent", {
              required:
                "To submit this form, please consent to being contacted",
            })}
          />
          I consent to being contacted by the team *
        </label>
        {errors.consent && (
          <p className="mt-2 font-karla text-red">{errors.consent.message}</p>
        )}
      </div>

      <button
        className="bg-green-600 hover:bg-[#063E34] w-full text-white p-4 rounded-lg font-karla font-bold text-lg leading-[150%] cursor-pointer"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
