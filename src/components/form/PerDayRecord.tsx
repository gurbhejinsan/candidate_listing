import { TabsContent } from "@radix-ui/react-tabs";
import { useForm } from "react-hook-form";
import { IUserList } from "../../interface";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Form } from "../ui/form";
import { InputGroup } from "../ui/input";
import Select from "../ui/select";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
// const option: IOption[] = [
//   { label: "Gurbhej singh", value: 1 },
//   { label: "gurtej", value: 2 },
//   { label: "summit", value: 3 },
//   { label: "ramanand", value: 4 },
//   { label: "abhisek", value: 5 },
// ];
const PerDayReacord = () => {
  const form = useForm();
  const isPending = true;

  const values = localStorage.getItem("list");
  const data: IUserList[] = values ? JSON.parse(values) : [];

  const option = data.map((value) => ({
    label: value.name,
    value: value.name,
  }));

  const onSubmit = () => {};

  return (
    <>
      <Tabs defaultValue={"one_by_one"}>
        <TabsList className="grid grid-cols-2 mb-2">
          <TabsTrigger value="one_by_one">One By One</TabsTrigger>
          <TabsTrigger value="by_name">By Name</TabsTrigger>
        </TabsList>
        <TabsContent value="one_by_one" className="">
          <Carousel className="w-full  h- " orientation="vertical">
            <CarouselContent className="h-[30rem] ">
              {/* {Array.from({ length:  }).map((_, index) => ( */}
              {data.map((value, index) => (
                <CarouselItem key={index}>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="w-full "
                    >
                      <Card className="w-full ">
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
                                <div className="grid grid-cols-3 gap-2">
                                  <InputGroup
                                    name="rest_puls"
                                    type="number"
                                    label="Rest Puls"
                                    placeholder="Puls After Rest"
                                  />
                                  <InputGroup
                                    name="work_puls"
                                    type="number"
                                    label="Middle Puls"
                                    placeholder="Puls in middle of work"
                                  />
                                  <InputGroup
                                    name="end_puls"
                                    type="number"
                                    label="End Puls"
                                    placeholder="Enter Weight"
                                  />
                                </div>
                                <InputGroup
                                  name="remark"
                                  label="Remark"
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
          <Carousel className="w-full  ">
            <CarouselContent className="">
              {/* {Array.from({ length:  }).map((_, index) => ( */}
              {data.map((value, index) => (
                <CarouselItem key={index}>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="w-full "
                    >
                      <Card className="w-full ">
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
                                <Select
                                  label="Select"
                                  name="select"
                                  onChange={(newData) => {
                                    console.log(newData);
                                  }}
                                  options={option}
                                />
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
                                <div className="grid grid-cols-3 gap-2">
                                  <InputGroup
                                    name="rest_puls"
                                    type="number"
                                    label="Rest Puls"
                                    placeholder="Puls After Rest"
                                  />
                                  <InputGroup
                                    name="work_puls"
                                    type="number"
                                    label="Middle Puls"
                                    placeholder="Puls in middle of work"
                                  />
                                  <InputGroup
                                    name="end_puls"
                                    type="number"
                                    label="End Puls"
                                    placeholder="Enter Weight"
                                  />
                                </div>
                                <InputGroup
                                  name="remark"
                                  label="Remark"
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
                        </CardFooter>
                      </Card>
                    </form>
                  </Form>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default PerDayReacord;
