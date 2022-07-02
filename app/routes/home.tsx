import type { LoaderFunction } from "@remix-run/node"
import { json } from "@remix-run/node"
import { requireUserId } from "~/utils/auth.server"
import { getOtherUsers } from "~/utils/user.server"
import { Layout } from "~/components/layout"
import { UserPanel } from "~/components/user-panel"
import { useLoaderData } from "@remix-run/react"

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request)
  const userId = await requireUserId(request)
  const users = await getOtherUsers(userId)
  return json({ users })
}

export default function Home() {
  const { users } = useLoaderData()
  return (
    <>
      <Layout>
        <div className='flex h-full'>
          <UserPanel users={users} />
        </div>
      </Layout>
    </>
  )
}
