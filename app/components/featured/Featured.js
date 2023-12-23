import React from "react";
import Image from "next/image"

export default function Featured(){
  return (
    <div className="mt-[30px]">
    <h1 className="text-8xl font-light">
      <b>Hey, there!</b> Discover my stories and creative ideas.
    </h1>
    <div className="flex items-center gap-[50px] mt-[60px]">
      <div className="flex-1 h-[500px] relative">
        <Image src="/p1.jpeg" alt="" fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="text-[40px]">Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
        <p className="text-xl font-light text-[color:var(--softTextColor)]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Cupiditate, quam nisi magni ea laborum inventore voluptatum
          laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
          quisquam! Harum unde sit culpa debitis.
        </p>
        <button className="w-max px-5 py-4 rounded-[5px] border-[none]">Read More</button>
      </div>
    </div>
  </div>
  )
}

