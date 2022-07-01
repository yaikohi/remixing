import { useState } from "react";
import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import {
  validateEmail,
  validateName,
  validatePassword,
} from "~/utils/validators.server";
import { FormField } from "~/components/form-field";
import { Layout } from "~/components/layout";
import { login, register } from "~/utils/auth.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const action = form.get("_action");
  const email = form.get("email");
  const password = form.get("password");
  let firstName = form.get("firstName");
  let lastName = form.get("lastName");

  if (
    typeof action !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 });
  }

  if (
    action === "register" &&
    (typeof firstName !== "string" || typeof lastName !== "string")
  ) {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 });
  }

  const errors = {
    email: validateEmail(email),
    password: validatePassword(password),
    ...(action === "register"
      ? {
          firstName: validateName((firstName as string) || ""),
          lastName: validateName((lastName as string) || ""),
        }
      : {}),
  };

  if (Object.values(errors).some(Boolean))
    return json(
      {
        errors,
        fields: { email, password, firstName, lastName },
        form: action,
      },
      { status: 400 }
    );

  switch (action) {
    case "login": {
      return await login({ email, password });
    }
    case "register": {
      firstName = firstName as string;
      lastName = lastName as string;
      return await register({ email, password, firstName, lastName });
    }
    default:
      return json({ error: `Invalid Form Data` }, { status: 400 });
  }
};

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [action, setAction] = useState("login");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full gap-y-4">
        <button
          onClick={() => setAction(action == "login" ? "register" : "login")}
          className="absolute px-3 py-2 font-semibold transition duration-300 ease-in-out bg-blue-200 text-violet-800 hover:border hover:text-violet-900 top-8 right-8 rounded-xl hover:border-blue-300 hover:-translate-y-1"
        >
          {action === "login" ? "Sign Up" : "Sign In"}
        </button>

        <h2 className="text-2xl font-extrabold text-violet-800 dark:text-violet-300">
          Remixing login
        </h2>
        <p className="text-violet-400">
          {action === "login"
            ? "Log In To Give Some Praise!"
            : "Sign Up To Get Started!"}
        </p>

        <form
          method="POST"
          className="p-6 bg-blue-100 dark:bg-slate-900 rounded-2xl w-96"
        >
          <FormField
            htmlFor="email"
            label="Email"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
          <FormField
            htmlFor="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
          />

          {action === "register" && (
            <>
              <FormField
                htmlFor="firstName"
                label="First name"
                onChange={(e) => handleInputChange(e, "firstName")}
                value={formData.firstName}
              />
              <FormField
                htmlFor="lastName"
                label="Last name"
                onChange={(e) => handleInputChange(e, "lastName")}
                value={formData.lastName}
              />
            </>
          )}

          <div className="w-full text-center">
            <button
              type="submit"
              name="_action"
              value={action}
              className="px-3 py-2 mt-2 font-semibold transition duration-300 ease-in-out bg-blue-200 hover:border-blue-300 hover:border text-violet-800 hover:text-violet-900 dark:text-violet-300 dark:bg-slate-900 rounded-xl dark:hover:bg-violet-900 hover:-translate-y-1"
            >
              {action === "login" ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
