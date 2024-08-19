import { TabsContent } from "@radix-ui/react-tabs";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
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
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
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
  const [api, setApi] = useState<CarouselApi>();
  const values = localStorage.getItem("list");
  const data: IUserList[] = values ? JSON.parse(values) : [];
  const option = data.map((value, index) => ({
    label: value.name,
    value: index,
  }));

  const onSubmit = (data: IUserDetailsPerDay, values: IUserList) => {
    const body = { ...data, ...values };
    mutate(body, {
      onSuccess: () => {
        toast.success(res?.data.message);
        form.reset();
        api?.scrollNext();
        if (selectEle) {
          console.log('focuson');
          
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
          <Carousel
            className="w-full  h- "
            orientation="vertical"
            setApi={(a) => {
              setApi(a);
            }}
          >
            <CarouselContent className="h-[80vh] ">
              {/* {Array.from({ length:  }).map((_, index) => ( */}
              {data.map((value, index) => (
                <CarouselItem key={index}>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit((newData) =>
                        onSubmit(newData, data[index])
                      )}
                      className="w-full "
                    >
                      <Card className="w-full border-none ">
                        <CardHeader>
                          <CardTitle>{value.name}</CardTitle>
                          <span className="text-slate-400">
                            {value.room_no}
                          </span>
                        </CardHeader>
                        <CardContent>
                          <form>
                            <Form {...form}>
                              <div className="grid w-full items-center gap-5 py-2">
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
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </TabsContent>
        <TabsContent value="by_name">
          <Card className="w-full  ">
            {/* {Array.from({ length:  }).map((_, index) => ( */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((newData) =>
                  onSubmit(newData, data[newData?.select || 0])
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
