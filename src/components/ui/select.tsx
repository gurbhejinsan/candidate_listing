/* eslint-disable linebreak-style */

import React, { forwardRef } from "react";
import { Controller, ControllerProps, useFormContext } from "react-hook-form";
import {
  default as ReactSelect,
  Props as ReactSelectProps,
} from "react-select";
import SelectProps, { IOption } from "../../interface/SelectProps";

type CommonProps = Pick<ControllerProps, "name" | "control"> &
  Pick<
    SelectProps,
    | "value"
    | "label"
    | "options"
    | "allowCreate"
    | "placeholder"
    | "className"
    | "onInputChange"
    | "onChange"
  > & { className?: string };

// Correcting the Select component and forwardRef usage
const Select = forwardRef<ReactSelectProps<IOption, false>, CommonProps>(
  ({ name, className, ...props }) => {
    const {
      control,
    } = useFormContext();

    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { name, onChange, value } }) => {
          return (
            <ReactSelect
              unstyled
              classNames={{
                container: () =>
                  "placeholder:text-white-dark mb-1 w-full   rounded-md  px-2 py-0 border border-slate-200  ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
                menu: () => "form-input left-0 bg-[#020617]  rounded-md  border border-slate-800 ",
                menuList: () => "flex-col gap-1 w-full max-h-64 overflow-y-auto  divide-y divide-slate-800 p",
                input: () =>
                  "flex justify-between relative  h-10  selection:bg-gray-300    px-3 py-2 text-sm ",
                option: () =>
                  "px-3 py-2 dark:hover:bg-gray-700 hover:bg-gray-300 rounded-sm",
              }}
              className={`font-bold capitalize form-select ${className}`}
              value={value}
              {...{ onChange, name }}
              {...props}
            />
          );
        }}
      />
    );
  }
);

export default Select;
