import { useState } from "react";
import AddUserForm from "./components/form/AddUser";
import CandidateList from "./components/form/CandidateList";
import PerDayReacord from "./components/form/PerDayRecord";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { AppContext } from "./hooks/useActiveContext";
import { IActiveTabs } from "./interface/contextProps";

function App() {
  const [activeTab, setActiveTab] = useState<IActiveTabs>("list");

  return (
    <AppContext.Provider value={{ activeTab, setActiveTab }}>
      <main className="  flex-center w-screen h-screen overflow-x-hidden bg-[#05081a]   px-4">
        <Tabs
          defaultValue={activeTab}
          value={activeTab}
          className="  py-4 flex-col h-full md:w-[20rem] w-full    "
        >
          <TabsList className="grid w-full grid-cols-3   border  border-slate-800 ">
            <TabsTrigger
              value="add"
             
            >
              Add
            </TabsTrigger>
            <TabsTrigger
              value="list"
             
            >
              Candidate list
            </TabsTrigger>
            <TabsTrigger
              value="update"
             
            >
              Update
            </TabsTrigger>
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
            <PerDayReacord />
          </TabsContent>
        </Tabs>
      </main>
    </AppContext.Provider>
  );
}

export default App;
