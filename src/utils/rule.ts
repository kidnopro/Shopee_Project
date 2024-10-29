import type { RegisterOptions, UseFormGetValues } from "react-hook-form";


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
            value === getValues("password") || "Mật khẩu không khớp nhau!"
        : undefined,
  },
});

