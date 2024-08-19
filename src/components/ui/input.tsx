import * as React from "react";

import { useFormContext } from "react-hook-form";
import { cn } from "../../lib/utils";
import { FormField, FormItem, FormLabel, FormMessage } from "./form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full selection:bg-gray-300 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950  dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const InputGroup = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name = "", placeholder, ...props }, ref) => {
    const { control } = useFormContext();
    return (
      <FormField
        name={name}
        control={control}
        // {...{ name, control }}
        render={({ field }) => (
          <FormItem className="flex flex-col">
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <div className="flex flex-col ">
              <Input
                {...field}
                {...{
                  id: name,
                  name,
                  ref,
                  placeholder,
                }}
                {...props}
              />
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
);

export { Input, InputGroup };
