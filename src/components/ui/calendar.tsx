import * as React from "react";

import { DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();
  return (
    <DayPicker
      captionLayout="dropdown"
      showOutsideDays={false}
      className={className}
      classNames={{
        month: "relative   ",
        nav: " flex items-center   w-fit absolute right-2 z-50",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 text-end font-normal aria-selected:opacity-100"
        ),
        dropdown_root:'dark:bg-black p-1',
        dropdown:" bg-transparent ", 
        // today: `bg-gray-200  p-1 rounded px-2`, // Add a border to today's date
        selected: `bg-gray-200 dark:bg-slate-800  p-1 rounded px-2`, // Highlight the selected day
        root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
        chevron: `${defaultClassNames.chevron}  fill-gray-600  z-50`, // Change the color of the chevron
        disabled: "text-slate-500 opacity-50 dark:text-slate-400",
        weekdays: "flex-center gap-2 justify-start px-2  font-light my-1",
        caption_label: "hidden",
        month_caption: "w-fit",
        outside:'opacity-0',
        ...classNames,
      }}
      startMonth={new Date(1950, 6)}
      endMonth={new Date(2025, 9)}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
