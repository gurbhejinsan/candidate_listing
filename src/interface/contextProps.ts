import { SetStateAction } from "react";

export type IAppcontext = {
    activeTab: IActiveTabs;
    setActiveTab: React.Dispatch<SetStateAction<IActiveTabs>>;
  };
  export  type IActiveTabs = "list" | "add" | "update";