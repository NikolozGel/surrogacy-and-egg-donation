"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Loading from "@/components/loading";
import { useTranslations } from "next-intl";
const schema = yup.object({
  fullName: yup.string().required("name is required"),
  phone: yup.string().required("phone is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "invalid email format",
    ),
  message: yup.string().required("text is required"),
});

interface FormData {
  id?: number;
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

export default function Register() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const t = useTranslations("registerPage");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/saveData", data);
      if (response.status === 201) {
        setLoading(false);
        setSuccessMessage("we received your message, we will contact you soon");
        reset();
      } else {
        throw new Error("Failed to save data");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="px-3 relative">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        <h4 className="text-3xl font-semibold text-gray-600 ">
          {t("register-title")}
        </h4>
        <p className="text-[1.2rem] text-gray-600 mt-3">
          {t("register-paragraph")}
        </p>
        <p className="text-lg font-bold text-black mt-2">
          {t("register-secParagraph")}
        </p>

        {loading && <Loading />}
        {successMessage && (
          <p className="mt-5 text-lg font-semibold text-green-600">
            {successMessage}
          </p>
        )}

        {!loading && !successMessage && (
          <div className="w-full flex flex-col gap-5 mt-5">
            <div>
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName.message}</p>
              )}
              <input
                type="text"
                {...register("fullName")}
                placeholder="Full Name *"
                className="border p-2 w-full border-gray-300 rounded-md"
              />
            </div>
            <div>
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
              <input
                type="tel"
                {...register("phone")}
                placeholder="Phone *"
                className="border p-2 w-full border-gray-300 rounded-md"
              />
            </div>
            <div>
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
              <input
                type="email"
                {...register("email")}
                placeholder="Email *"
                className="border p-2 w-full border-gray-300 rounded-md"
              />
            </div>
            <div>
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Message *"
                className="border p-2 w-full border-gray-300 rounded-md resize-none"
              />
            </div>
          </div>
        )}

        {!loading && !successMessage && (
          <button
            type="submit"
            className="mt-4 bg-teal-700 text-white py-2 px-4 rounded-md hover:opacity-85 cursor-pointer"
          >
            {t("register-button")}
          </button>
        )}
      </form>
    </div>
  );
}
