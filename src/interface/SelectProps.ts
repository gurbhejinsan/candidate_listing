import { FieldError } from "react-hook-form";
import { Props } from "react-select";

export const defaultOption: IOption = { label: "", value: "" };

interface IOption {
  label: string;
  value: string | number;
}

interface InitSelectProps extends Props {
  options: IOption[] | undefined;
  optional?: boolean;
  label: string;
  placeholder?: string;
  name?: string;
  value?: IOption;
  error?: string | FieldError;
  allowCreate?: boolean;
  onCreateOption?: (input: string) => void;
}
interface CreatableProps extends InitSelectProps {
  allowCreate: true;
  onCreateOption: (input: string) => void;
}

interface NoCreatableProps extends InitSelectProps {
  allowCreate?: false;
}

type SelectProps = CreatableProps | NoCreatableProps;

export type { IOption };
export default SelectProps;
