import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import AddUserForm from "./components/form/AddUser";
import CandidateList from "./components/form/CandidateList";
import PerDayReacord from "./components/form/PerDayRecord";
import { Card } from "./components/ui/card";
import Loader from "./components/ui/loader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { GetUsers } from "./services";

function App() {
  const { isLoading, error, isError } = useQuery({
    queryKey: [1],
    queryFn: GetUsers,
  });

  if (isError) {
    toast.error(error.message);
  }

  
  return (
    <main
      className="  flex-center w-screen h-screen overflow-x-hidden bg-[#05081a]   px-4"
    >
      <Tabs
        defaultValue="list"
        className="  py-4 flex-col h-full md:w-[20rem] w-full relative   "
      >
        <TabsList className="grid w-full grid-cols-3   border  border-slate-800 ">
          <TabsTrigger value="add">Add</TabsTrigger>
          <TabsTrigger value="list">Candidate list</TabsTrigger>
          <TabsTrigger value="update">Update</TabsTrigger>
        </TabsList>
        <TabsContent value="add" className="">
          <AddUserForm />
        </TabsContent>
        <TabsContent value="list">
          {isLoading ? (
            <Loader />
          ) : (
            <Card>
              <CandidateList />
            </Card>
          )}
        </TabsContent>
        <TabsContent value="update">
          {isLoading ? (
            <Loader />
          ) : (
            <Card className="">
              <PerDayReacord />
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default App;
