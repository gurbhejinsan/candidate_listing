import { Edit3, Trash, X } from "lucide-react";
import { IUserList } from "../../interface";
import { AgeCal } from "../../lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";

const CandidateList = () => {
  
  const list = localStorage.getItem("list");
  const data: IUserList[] = list ? JSON.parse(list) : [];

  return (
    <Card className="h-full ">
      <CardHeader className="h-1/6">
        <CardTitle>Canidates List</CardTitle>
      </CardHeader>
      <CardContent className="max-h-[75vh] h-fit overflow-y-auto">
        <table className="table-auto w-full  relative">
          <thead className="text-xs font-semibold uppercase ">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Sr.No.</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Name</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Room No.</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Mobile No.</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm ">
            {data?.map((user, key) => (
              <Popover key={key}>
                <PopoverTrigger asChild className="">
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{key + 1}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="font-medium ">{user.name}</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{user.room_no}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{user.mobile_no}</div>
                    </td>
                  </tr>
                </PopoverTrigger>
                <PopoverContent className="w-[21rem] " align="start">
                  <div className="border-b border-slate-800 pb-2">
                    <PopoverClose
                      className="PopoverClose float-end   mb-2 text-gray-500 "
                      aria-label="Close"
                    >
                      <Button variant={"outline"} className="h-fit w-fit p-2">
                        <X size={10} />
                      </Button>
                    </PopoverClose>
                    <div className="flex gap-1 text-xs">
                      <Button
                        variant={"destructive"}
                        className="h-fit w-fit p-2"
                      >
                        <Trash size={10} />
                      </Button>
                      <Button variant={"secondary"} className="h-fit w-fit p-2">
                        <Edit3 size={10} />
                      </Button>
                    </div>
                  </div>
                  <CandidateDeatils {...user} />
                </PopoverContent>
              </Popover>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};
const CandidateDeatils = ({
  adhar_no,
  dob,
  height,
  mobile_no,
  name,
  remark,
  weight,
}: IUserList) => {
  return (
    <div className="max-h-[21rem] h-fit w-full  gap-3 flex flex-col   mt-2">
      <div className="flex  justify-between ">
        <h3 className="text-md flex flex-col items-start ">
          {name || "NA"}
          <p className="text-xs">{mobile_no || "NA"}</p>
        </h3>
        <div className="flex flex-col text-xs items-end">
          <span className="">Adhar No.</span>
          <span className="">{adhar_no || "NA"}</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col text-xs items-end">
          <span className="text-xs">Height.</span>
          <span>{height || "NA"}</span>
        </div>
        <div className="flex flex-col text-xs items-end">
          <span className="text-xs">Weight.</span>
          <span>{weight || "NA"}</span>
        </div>
        <div className="flex flex-col text-xs items-end">
          <span className="text-xs">Age</span>
          <span>{(dob && AgeCal(dob)) || "NA"}</span>
        </div>
      </div>

      <div className="flex flex-col text-xs  w-full row-span-3  h-1/2">
        <h2 className="text-xs  ">Remark.</h2>
        <p className="overflow-y-auto h-full text-xs">{remark || "NA"}</p>
      </div>
    </div>
  );
};

export default CandidateList;
