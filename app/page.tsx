"use client"

import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <div className="text-center pt-32 px-5">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">My blog</h1>
      <p className="max-w-[500px] mx-auto leading-8 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex facilis soluta, totam, libero velit quae accusamus enim veritatis culpa tempore, asperiores repudiandae dignissimos unde inventore!</p>
    </div>
  );
}
