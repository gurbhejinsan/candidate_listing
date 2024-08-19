import axios from "axios";
import {
  IAddUser,
  IAddUsersRes,
  IGetUsersRes,
  IUserDetailsPerDay,
  IUserList,
  Response
} from "../interface";
const base_url = import.meta.env.VITE_BASE_URL;

export const GetUsers = async (): Response<IGetUsersRes> => {
  try {
    const response = await axios.get(`${base_url}?pageNo=1`);
    const data = JSON.stringify(response.data.data);
    localStorage.setItem("list", data);
    return response; // Return the data from the response
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ensure the error is thrown so useQuery can handle it
  }
};

export const AddUsers = async (data: IAddUser): Response<IAddUsersRes> => {
  const body = JSON.stringify(data);

  try {
    const res = await axios.post(`${base_url}`, body);
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ensure the error is thrown so useQuery can handle it
  }
};
export const PerDayRecord = async (
  data: IUserDetailsPerDay & IUserList
): Response<IAddUsersRes> => {
  const body = JSON.stringify(data);

  try {
    const res = await axios.post(`${base_url}?action=addPerDayRecord`, body);
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ensure the error is thrown so useQuery can handle it
  }
};
