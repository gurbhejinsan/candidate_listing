import { AxiosResponse } from "axios";

export type Response<O> = Promise<AxiosResponse<O, unknown>>;

// Request data Types
export type IUserList = {
  adhar_no: string;
  dob:  Date | undefined;
  id: number;
  name: string;
  remark: string;
  room_no: string;
  weight: string;
  mobile_no: string;
  height: string;
};

export type IAddUser = Pick<
  IUserList,
  | "adhar_no"
  | "dob"
  | "mobile_no"
  | "name"
  | "remark"
  | "room_no"
  | "height"
  | "weight"
>;


// respose data type

interface CommanRes {
    success: boolean;
    message: string;
  }
  

export interface IGetUsersRes extends CommanRes {
  data: IUserList[];
}
export interface IAddUsersRes extends CommanRes {
  data: IAddUser;
}
