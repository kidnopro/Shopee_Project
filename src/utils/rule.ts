import type { RegisterOptions, UseFormGetValues } from "react-hook-form";
import * as yup from "yup";

type Rules = {
  [key in "email" | "password" | "confirm_password"]?: RegisterOptions;
};

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: "Vui lòng nhập Email",
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Email không đúng định dạng",
    },
    maxLength: {
      value: 160,
      message: "Không được vượt quá 160 kí tự",
    },
    minLength: {
      value: 5,
      message: "Không được nhỏ hơn 5 kí tự",
    },
  },
  password: {
    required: {
      value: true,
      message: "Vui lòng nhập mật khẩu",
    },
    maxLength: {
      value: 160,
      message: "Mật khẩu không được dài quá 160 kí tự",
    },
    minLength: {
      value: 6,
      message: "Mật khẩu ngắn nhất là 6 kí tự",
    },
  },
  confirm_password: {
    required: {
      value: true,
      message: "Vui lòng nhập lại mật khẩu",
    },
    maxLength: {
      value: 160,
      message: "Mật khẩu không được dài quá 160 kí tự",
    },
    minLength: {
      value: 6,
      message: "Mật khẩu ngắn nhất là 6 kí tự",
    },
    validate:
      typeof getValues === "function"
        ? (value) =>
            value === getValues("password") || "Mật khẩu không khớp nhau"
        : undefined,
  },
});

export const schema = yup.object({
  email: yup
    .string()
    .required("Vui lòng nhập Email")
    .email("Email không đúng định dạng")
    .min(5, "Độ dài từ 5 - 160 ký tự")
    .max(160, "Độ dài từ 5 - 160 ký tự"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(6, "Độ dài từ 6 - 160 ký tự")
    .max(160, "Độ dài từ 6 - 160 ký tự"),
  confirm_password: yup
    .string()
    .required("Vui lòng nhập lại mật khẩu")
    .min(6, "Độ dài từ 6 - 160 ký tự")
    .max(160, "Độ dài từ 6 - 160 ký tự")
    .oneOf([yup.ref("password")], "Mật khẩu không khớp"),
  });
 
// const loginSchema = schema.omit("confirm_password");

export type Schema = yup.InferType<typeof schema>;
