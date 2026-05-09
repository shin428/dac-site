import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useState } from "react";
import DacSpring from "../../static/DacSpring.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dac Site" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [flag,setFlag] = useState(false);
  return(
    <>
      <div className="text-5xl">
       <p>Welcome to the DAC</p>
        <button onClick={() => setFlag(!flag)} className="bg-blue-500 text-white px-4 py-2 rounded">{flag ? "true":"false"}</button>
      </div>
      <div className="w-full h-auto">
        <img src={DacSpring} alt="Dac Spring" className="w-full h-auto" />
      </div>
      <Welcome />
    </>
  )
}
