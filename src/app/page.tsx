"use client";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import EngagementTable from "./components/EngagementTable";
import Pagination from "./components/Pagination";
import { useAppSelector } from "@/lib/hooks/redux";

const Home = () => {
  const theme = useAppSelector((state) => {
    return state.themeSlice.theme;
  });
  return (
    <div id="page-root" className={`${theme} flex min-h-screen flex-row`}>
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">
          <main className="p-4">
            <h1 className="text-xl font-semibold">Post Engagements</h1>
            <EngagementTable />
            <Pagination />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
