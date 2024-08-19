"use client";

import { CalendarIcon, X } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { AgeCal, cn, formatDateToDDMMYYYY } from "../../lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "./popover";
import { useState } from "react";

export function DatePickerForm() {
  const { control, setValue } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FormField
      control={control}
      name="dob"
      render={({ field }) => (
        <FormItem className="flex flex-col w-full">
          <FormLabel>Date of birth</FormLabel>
          <Popover open={isOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className={cn(
                    "w-full pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    // format(field.value, "PPP")
                    formatDateToDDMMYYYY(field.value)?.formatted
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0 flex flex-col  "
              align="start"
            >
              <PopoverClose
                className="float-start text-md p-2 "
                onClick={() => setIsOpen(false)}
              >
                <X />
              </PopoverClose>
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={(e) => {
                  field.onChange(formatDateToDDMMYYYY(e)?.formatted);
                  setValue("age", AgeCal(e));
                  setIsOpen(false);
                }}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                // initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
