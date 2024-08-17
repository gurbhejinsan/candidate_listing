import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateToDDMMYYYY(date: Date | undefined) {
  if (!date) return;
  const newDate = new Date(date);
  const day = String(newDate.getDate()).padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based in JavaScript
  const year = newDate.getFullYear();
  if (typeof date == "string") {
    console.log('condition 1....');
    
    return { formatted: date };
  }
  return { formatted: `${day}/${month}/${year}`, date };
}
