import { useState } from 'react'
import { FormField } from '~/components/form-field'
import { Layout } from '~/components/layout'

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [action, setAction] = useState('login')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData(form => ({ ...form, [field]: event.target.value }))
    }


    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-full gap-y-4">

                <h2 className="text-2xl font-extrabold dark:text-violet-300">Remixing login</h2>


                <form method="post" className="p-6 bg-gray-200 rounded-2xl w-96">
                    <FormField
                        htmlFor="email"
                        label="Email"
                        value={formData.email}
                        onChange={e => handleInputChange(e, 'email')}
                    />
                    <FormField
                        htmlFor="password"
                        type="password"
                        label="Password"
                        value={formData.password}
                        onChange={e => handleInputChange(e, 'password')}
                    />
                    <div className="w-full text-center">
                        <input
                            type="submit"
                            className="px-3 py-2 mt-2 font-semibold text-blue-600 transition duration-300 ease-in-out bg-yellow-300 rounded-xl hover:bg-yellow-400 hover:-translate-y-1"
                            value="Sign In"
                        />
                    </div>
                </form>
            </div>
        </Layout>
    )
}
