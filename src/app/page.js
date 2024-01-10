"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    console.log(mainTask);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  let renderTask = <h2 className="text-white ">Task Not There</h2>;

  renderTask = mainTask.map((t, i) => {
    return (
      <div key='task-i' className="flex justify-between">
        <p className="">{i}</p>
        <h5 className="text-white p-4">{t.title}</h5>
        <h6 className="text-white p-4">{t.desc}</h6>
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
      <div className="p-6 bg-black">
        <ul className="">{renderTask}</ul>
      </div>
    </main>
  );
}
