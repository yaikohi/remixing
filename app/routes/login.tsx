import { Layout } from '~/components/layout'

export default function Login() {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-full gap-y-4">

                <h2 className="text-2xl font-extrabold dark:text-violet-300">Remixing login</h2>


                <form method="post" className="p-6 bg-gray-200 rounded-2xl w-96">
                    <label htmlFor="email">Email</label>
                    <input className="w-full p-2 my-2 rounded-xl" type="text" id="email" name="email" />

                    <label htmlFor="password">Password</label>
                    <input className="w-full p-2 my-2 rounded-xl" type="text" id="password" name="password" />

                    <div className="w-full text-center">
                        <input
                            type="submit"
                            className="px-3 py-2 mt-2 font-semibold transition duration-300 ease-in-out bg-slate-300 text-violet-600 rounded-xl hover:bg-fuchsia-200 hover:-translate-y-1"
                            value="Sign In"
                        />
                    </div>
                </form>
            </div>
        </Layout>
    )
}
