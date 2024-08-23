import { TabsContent } from "@radix-ui/react-tabs";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IUserDetailsPerDay, IUserList } from "../../interface";
import { PerDayRecord } from "../../services";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Form } from "../ui/form";
import Select from "../ui/select";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import PerDayForm from "./PerDayForm";
const selectEle = document.querySelector("#inputId") as HTMLElement;
const PerDayReacord = () => {
  const form = useForm<IUserDetailsPerDay>({
    values: {
      end_puls: 0,
      height: "",
      remark: "",
      rest_puls: 0,
      weight: "",
      work_puls: 0,
    },
  });

  const {
    data: res,
    mutate,
    isPending,
    error,
  } = useMutation({
    mutationFn: PerDayRecord,
  });
  const values = localStorage.getItem("list");
  const data: IUserList[] = values ? JSON.parse(values) : [];
  const option = data.map((value, index) => ({
    label: value.name,
    value: index,
  }));

  const onSubmit = (data: IUserDetailsPerDay, id: number) => {
    const body = { ...data, id };
    mutate(body, {
      onSuccess: () => {
        toast.success(res?.data.message);
        form.reset();
        if (selectEle) {
          console.log("focuson");

          selectEle.focus();
        }
      },
      onError: () => {
        toast.error(error?.message);
      },
    });
  };

  return (
    <>
      <Tabs defaultValue={"one_by_one"}>
        <TabsList className="grid grid-cols-2 mb-2">
          <TabsTrigger value="one_by_one">One By One</TabsTrigger>
          <TabsTrigger value="by_name">By Name</TabsTrigger>
        </TabsList>
        <TabsContent value="one_by_one" className="">
          <Form {...form}>
            <form
              method="get"
              onSubmit={form.handleSubmit((newData) =>
                onSubmit(newData, data[newData?.select || 0].id)
              )}
              className="w-full "
            >
              <Card className="w-full ">
                <CardHeader>
                  <CardTitle>
                    {form.watch()?.select !== undefined &&
                    form.watch()?.select !== null
                      ? data[form.watch()?.select || 0]?.name
                      : "Name"}
                  </CardTitle>
                  <span className="text-slate-400">
                    {form.watch()?.select !== undefined &&
                    form.watch()?.select !== null
                      ? data[form.watch()?.select || 0]?.room_no
                      : "Room no"}
                  </span>
                </CardHeader>
                <CardContent>
                  <form>
                    <Form {...form}>
                      <div className="grid w-full items-center gap-5 py-1">
                        <Select
                          id="inputId"
                          label="Select"
                          name="select"
                          options={option}
                        />
                        <PerDayForm isOneByOne />
                      </div>
                    </Form>
                  </form>
                </CardContent>
                {/* <CardFooter className="flex-center w-full">
                  <Button className="w-full" isLoading={isPending}>
                    Submit
                  </Button>
                </CardFooter> */}
              </Card>
            </form>
          </Form>
        </TabsContent>
        <TabsContent value="by_name">
          <Card className="w-full  ">
            {/* {Array.from({ length:  }).map((_, index) => ( */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((newData) =>
                  onSubmit(newData, data[newData?.select || 0].id)
                )}
                className="w-full "
              >
                <Card className="w-full ">
                  <CardHeader>
                    <CardTitle>
                      {form.watch()?.select !== undefined &&
                      form.watch()?.select !== null
                        ? data[form.watch()?.select || 0]?.name
                        : "Name"}
                    </CardTitle>
                    <span className="text-slate-400">
                      {form.watch()?.select !== undefined &&
                      form.watch()?.select !== null
                        ? data[form.watch()?.select || 0]?.room_no
                        : "Room no"}
                    </span>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <Form {...form}>
                        <div className="grid w-full items-center gap-5 py-1">
                          <Select
                            id="inputId"
                            label="Select"
                            name="select"
                            options={option}
                          />
                          <PerDayForm />
                        </div>
                      </Form>
                    </form>
                  </CardContent>
                  <CardFooter className="flex-center w-full">
                    <Button className="w-full" isLoading={isPending}>
                      Submit
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            </Form>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default PerDayReacord;
