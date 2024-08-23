import { type ClassValue, clsx } from "clsx";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IUserList } from "../interface";

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
    console.log("condition 1....");

    return { formatted: date };
  }
  return { formatted: `${day}/${month}/${year}`, date };
}

export function AgeCal(dateOfBirth: Date | undefined) {
  if (dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      calculatedAge--;
    }
    return calculatedAge;
  } else {
    return "NA";
  }
}

export const useStorageManges = () => {
  const [users, setUsers] = useState<IUserList[] | null>(null);
  const [SelectedUser, setSelectedUser] = useState<IUserList | null>(null);

  const list = localStorage.getItem("list");
  const selectedUserID = localStorage.getItem("selectedUser");

  useEffect(() => {
    if (list) {
      const parsedUsers = JSON.parse(list) as IUserList[];
      setUsers(parsedUsers);

      if (selectedUserID) {
        const user = parsedUsers[Number(selectedUserID)];
        setSelectedUser(user || null);
      }
    }
  }, [list, selectedUserID]);

  return {
    users,
    SelectedUser,
  };
};
