import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IAddUser } from "../../interface";
import { AddUsers } from "../../services";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { DatePickerForm } from "../ui/datepicker";
import { Form } from "../ui/form";
import { InputGroup } from "../ui/input";

const AddUserForm = () => {
  const form = useForm<IAddUser>();
  const {
    data: res,
    mutate,
    isPending,
    error,
    isError,
  } = useMutation({
    mutationFn: AddUsers,
  });

  const onSubmit = async () => {
    const data = form.getValues();
    mutate(data, {
      onSuccess: () => {
        form.resetField("name");
        toast.success(res?.data.message);
      },
    });
  };
  const clearForm = () => {
    form.resetField("name");
    form.reset();
  };
  if (isError) toast.error(error.message);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
        <Card className="w-full ">
          <CardHeader>
            <CardTitle>Add Candidate</CardTitle>
            {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
          </CardHeader>
          <CardContent>
            <form>
              <Form {...form}>
                <div className="grid w-full items-center gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <InputGroup
                      name="name"
                      label="Full Name"
                      placeholder="Enter  Name"
                    />
                    <InputGroup
                      name="room_no"
                      label="Room Number"
                      placeholder="Enter Room number"
                    />
                  </div>
                  <InputGroup
                    name="adhar_no"
                    label="Adhar Number"
                    type="number"
                    placeholder="Enter candidate Adhar number"
                  />
                  <InputGroup
                    name="mobile_no"
                    label="Phone Number"
                    type="number"
                    placeholder="Enter candidate Numer"
                  />
                  <DatePickerForm />
                  <div className="grid grid-cols-2 gap-4">
                    <InputGroup
                      name="height"
                      type="number"
                      label="Height"
                      placeholder="Enter Height"
                    />
                    <InputGroup
                      name="weight"
                      type="number"
                      label="Weight"
                      placeholder="Enter Weight"
                    />
                  </div>
                  <InputGroup
                    name="remark"
                    type="Remark"
                    label="Full Name"
                    placeholder="Enter Remark"
                  />
                </div>
              </Form>
            </form>
          </CardContent>
          <CardFooter className="flex-center w-full">
            <Button isLoading={isPending} className="w-full">
              Submit
            </Button>
            <Button
              type="button"
              onClick={clearForm}
              className="w-full"
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default AddUserForm;
