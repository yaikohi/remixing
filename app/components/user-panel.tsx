import type { User } from "@prisma/client"
import { UserCircle } from './user-circle';

export function UserPanel({ users }: { users: User[] }) {
  return (
    <>
      <div className='flex flex-col w-1/6 bg-slate-200 dark:bg-slate-700'>
        <div className='flex items-center justify-center h-20 text-center'>
          <h2 className='text-xl font-semibold'> My team!!</h2>
        </div>

        <div className='flex flex-col flex-1 py-4 overflow-y-scroll gap-y-10'>
          {users.map(user => (
            <>
              <UserCircle key={user.id} profile={user.profile} className="flex-shrink-0 w-24 h-24 mx-auto" />
            </>
          ))}
        </div>
        <div className='p-6 text-center bg-slate-800'>
          <button
            type='submit'
            className='px-3 py-2 font-semibold transition duration-300 ease-in-out rounded-xl bg-violet-700 text-violet-200 hover:bg-violet-500 hover:-translate-y-1'
          >
            Sign out
          </button>
        </div>
      </div>
    </>
  )
}
