// app/routes/index.tsx
import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";

/**
 *  Remix runs the loader function before serving your page.
 *  This means any redirects in a loader will trigger before your page can be served.
 *
 *  src: https://www.prisma.io/blog/fullstack-remix-prisma-mongodb-2-ZTmOy58p4re8
 */
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
