'use client'
import Task from "@/components/task";
import { Suspense, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [tasks, setTasks]= useState(["Hello gaergaethae ethaebaeth haehaehqae ethethqeb eheheth", "Bye", "Lolololol",])
  return (
    <main className="flex min-h-screen items-baseline justify-center bg-[#0D0714] pt-14 p-5">
      <Toaster position="top-right"/>
      <div className="flex flex-col items-start max-w-[400px] lg:w-[400px]">
        <div className="flex w-full space-x-3 h-8 pb-20 items-center justify-center">
          <input className="bg-transparent w-full h-max outline-none border-[0.5px] border-[#3E1671] focus:border-[#834ace] rounded-lg p-2 font-thin text-sm" type="text" title="Add a new task" placeholder="Add a new task"/>
          <button className="h-8 aspect-square bg-[#9E78CF] rounded-lg font-thin align-middle hover:bg-[#834ace]">+</button>
        </div>
        <h4>Tasks to do - {tasks.length}</h4>
        <Suspense>
          {
            tasks.map(e =>{
              return <Task isCompleted={false}>{e}</Task>
            })
          }
        </Suspense>
      </div>
    </main>
  );
}
