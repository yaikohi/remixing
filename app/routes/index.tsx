// app/routes/index.tsx
import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};

export default function Index() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-100 dark:bg-slate-900">
      <h2 className="text-2xl font-extrabold text-violet-800 dark:text-violet-300">
        {" "}
        TailwindCSS is working!{" "}
      </h2>
    </div>
  );
}
