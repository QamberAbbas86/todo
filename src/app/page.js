"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [completed, setcompleted] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    console.log(mainTask);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };
  const edit = (i) => {
console.log('Edit');

  };
  const complete = (i) => {
    let copytask = [...mainTask];
    copytask[i].completed = true; // Assuming you have a 'completed' property in your task object
    setMainTask(copytask);
    console.log('complete');
  };

  const deleted = (i) => {
    console.log('deleted');
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };
  
  let renderTask = <h2 className="text-white ">Task Not There</h2>;

  renderTask = mainTask.map((t, i) => {
    return (
      <div data-key={i} className="flex px-2 justify-between w-full">
        <p className="text-white p-4">{i}</p>
        <h5 className="text-white p-4">{t.title}</h5>
        <h6 className="text-white p-4">{t.desc}</h6>
        <button onClick={edit} className="inline-flex items-center justify-center px-1 py-1 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
        <i class="fa-solid text-white fa-pen-to-square"></i>
        </button>
        <button onClick={complete} className="inline-flex items-center justify-center px-1 py-1 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
        <i class="fa-solid text-white fa-check"></i>
        </button>
        <button onClick={deleted} className="inline-flex items-center justify-center px-1 py-1 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
        <i class="fa-solid text-white fa-trash"></i>
        </button>

      </div>
    );
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="bg-black text-4xl text-white px-8 py-2 rounded-md">
        {" "}
        Todo
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className="px-4 py-1 m-4  text-sm border-2 border-zinc-800 rounded-md"
          placeholder="Enter your Task"
          value={title}
          onChange={(e) => {
            // console.log("event :", e.target.value);
            settitle(e.target.value);
          }}
        />
        <input
          className="px-4 py-1 m-5 ml-0	 text-sm border-2 border-zinc-800 rounded-md"
          placeholder="Enter your Task Discipration"
          value={desc}
          onChange={(e) => {
            // console.log("event :", e.target.value);
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-sm text-white px-4 py-2 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>

      <hr></hr>
      <div className="py-6 bg-black w-full">
      <div className="flex px-2 justify-between w-full">
        <p className="text-white p-4">No.</p>
        <h5 className="text-white p-4">Task Name</h5>
        <h6 className="text-white p-4">Task Disc</h6>
        <i class="fa-solid text-white fa-pen-to-square"></i>
        <i class="fa-solid text-white fa-check"></i>
        <i class="fa-solid text-white fa-trash"></i>
      </div>
        <ul className="">
          
          {renderTask}
          
          </ul>
      </div>
    </main>
  );
}
