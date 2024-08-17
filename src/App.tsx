
import AddUserForm from "./components/form/AddUser";
import CandidateList from "./components/form/CandidateList";
import PerDayRecord from "./components/form/PerDayRecord";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
function App() {
  return (
    <main className="  flex-center w-screen h-screen overflow-x-hidden bg-[#05081a]   ">
      <Tabs
        defaultValue="list"
        className="  py-4 flex-col h-full w-[20rem]    "
      >
        <TabsList className="grid w-full grid-cols-3     border  border-slate-800 ">
          <TabsTrigger value="add">Add</TabsTrigger>
          <TabsTrigger value="list">Candidate list</TabsTrigger>
          <TabsTrigger value="update">Update</TabsTrigger>
        </TabsList>
        <TabsContent value="add">
          <AddUserForm />
        </TabsContent>
        <TabsContent
          value="list"
          className="flex flex-col justify-center w-full  "
        >
          <CandidateList />
          
        </TabsContent>
        <TabsContent value="update">
          <PerDayRecord />
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default App;
