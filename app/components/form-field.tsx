interface FormFieldProps {
  htmlFor: string;
  label: string;
  type?: string;
  value: string;
  onChange?: (...args: any) => any;
}

export function FormField({
  htmlFor,
  label,
  type = "text",
  value,
  onChange = () => {},
}: FormFieldProps) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="font-semibold text-violet-900 dark:text-violet-400"
      >
        {label}
      </label>

      <input
        className="w-full p-2 my-2 rounded-xl"
        onChange={onChange}
        id={htmlFor}
        name={htmlFor}
        value={value}
        type={type}
      />
    </>
  );
}
