import { useEffect, useState } from "react"

interface FormFieldProps {
  htmlFor: string
  label: string
  type?: string
  value: string
  onChange?: (...args: any) => any
  error?: string
}

export function FormField({
  htmlFor,
  label,
  type = "text",
  value,
  onChange = () => {},
  error = "",
}: FormFieldProps) {
  const [errorText, setErrorText] = useState("")

  useEffect(() => {
    setErrorText(error)
  }, [error])

  return (
    <>
      <label htmlFor={htmlFor} className='font-semibold text-violet-900 dark:text-violet-400'>
        {label}
      </label>

      <input
        className='w-full p-2 my-2 rounded-xl'
        onChange={(e) => {
          onChange(e)
          setErrorText("")
        }}
        id={htmlFor}
        name={htmlFor}
        value={value}
        type={type}
      />
      <div className='w-full text-xs font-semibold tracking-wide text-center text-red-500'>
        {errorText || ""}
      </div>
    </>
  )
}
