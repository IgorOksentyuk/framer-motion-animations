"use client"

import { Animations } from "./components/animations";
import Users from "./components/users";

export default function App() {

  return (
    <div className="flex flex-col gap-10 bg-black pt-20 pb-10">
      <Animations />
      <Users />
    </div >
  );
}
