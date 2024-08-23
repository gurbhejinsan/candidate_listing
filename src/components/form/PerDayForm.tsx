import { useMutation } from "@tanstack/react-query";
import { Send } from "lucide-react";
import React from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
import { IUserDetailsPerDay, IUserList } from "../../interface";
import { useStorageManges } from "../../lib/utils";
import { PerDayRecord } from "../../services";
import { Button } from "../ui/button";
import { InputGroup, InputProps } from "../ui/input";

interface IPerDayForm {
  isOneByOne?: boolean;
}

const PerDayForm = ({ isOneByOne = false }: IPerDayForm) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <SingleInput
          name="bmi"
          isOneByOne={isOneByOne}
          placeholder="Enter BMI (optional)"
          label="BMI"
        />
        <SingleInput
          name="pft"
          isOneByOne={isOneByOne}
          placeholder="Enter PFT (optional)"
          label="PFT"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <SingleInput
          isOneByOne={isOneByOne}
          name="height"
          type="number8"
          label="Height"
          placeholder="Enter Height (optional)"
        />
        <SingleInput
          name="weight"
          type="number"
          isOneByOne={isOneByOne}
          label="Weight"
          placeholder="Enter Weight"
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <SingleInput
          isOneByOne={isOneByOne}
          name="rest_puls"
          type="number"
          label="Rest Puls"
          placeholder="Puls After Rest"
        />
        <SingleInput
          isOneByOne={isOneByOne}
          name="work_puls"
          type="number"
          label="Middle Puls"
          placeholder="Puls in middle of work"
        />
        <SingleInput
          isOneByOne={isOneByOne}
          name="end_puls"
          type="number"
          label="End Puls"
          placeholder="Enter Weight"
        />
      </div>
      <SingleInput
        isOneByOne={isOneByOne}
        name="remark"
        label="Remark"
        placeholder="Enter Remark"
      />
    </>
  );
};

export default PerDayForm;

interface CombinedInputProps extends InputProps, IPerDayForm {}

const SingleInput = React.forwardRef<HTMLInputElement, CombinedInputProps>(
  ({ name = "", label, placeholder, isOneByOne, type, ...props }, ref) => {
    const { SelectedUser } = useStorageManges();
    const {
      mutate,
      data: res,
      error,
      isPending,
    } = useMutation({
      mutationKey: [name],
      mutationFn: PerDayRecord,
    });
    const { getValues, resetField } = useFormContext();
    const onSubmit = () => {
      const data = getValues();
      const completeData: IUserDetailsPerDay & Pick<IUserList, "id"> = {
        height: data.height || "", // or some default value
        weight: data.weight || "",
        remark: data.remark || "",
        bmi: data.bmi || "",
        pft: data.pft || "",
        rest_puls: data.rest_puls || 0,
        work_puls: data.work_puls || 0,
        end_puls: data.end_puls || 0,
        type: name,
        id: SelectedUser?.id || 0,
      };
      mutate(completeData, {
        onSuccess: () => {
          toast.success(res?.data.message);
          resetField(name);
        },
        onError: () => {
          toast.error(error?.message);
        },
      });
    };
    return (
      <div className="flex w-full  items-end  relative">
        <InputGroup
          {...{ name, label, type, placeholder, ref }}
          className=""
          parentsClass="w-full"
          {...props}
        />
        {isOneByOne && (
          <Button
            variant={"outline"}
            onClick={onSubmit}
            type="button"
            isLoading={isPending}
            className="group h-10 rounded-s-none absolute right-0"
          >
            <Send
              className="group-hover:rotate-45 duration-200 p-0  "
              size={15}
            />
          </Button>
        )}
      </div>
    );
  }
);
