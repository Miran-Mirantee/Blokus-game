"use client";

import RenderGrid from "./components/renderComponents/RenderGrid";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center gap-9">
      <div className="h-screen flex-1 bg-blue-200 border-solid border-blue-500 border flex flex-col ml-9"></div>
      <RenderGrid />
      <div className="h-screen flex-1 bg-blue-200 border-solid border-blue-500 border flex flex-col mr-9"></div>
    </div>
  );
}
