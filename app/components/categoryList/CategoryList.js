import React from "react"
import Link from "next/link"
import Image from "next/image"


export default function CategoryList() {
  const category = "bg-[#7fb88133] flex items-center gap-2.5 capitalize w-[15%] h-20 justify-center rounded-[10px]"
  const image = "rounded-[50%]"
  return (
    <div>
      <h1 className="mx-0 my-[50px]">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        <Link href = "/blog?cat=style"
        className={`${category} ${"bg-[#57c4ff31]"}`}>

          <Image src = "/style.png" alt="" width={32} height={32}
          className={image}
          />
          style
        </Link>
        <Link href = "/blog?cat=style"
        className={`${category} ${"bg-[#da85c731]"}`}>

          <Image src = "/fashion.png" alt="" width={32} height={32}
          className={image}
          />
          fashion
        </Link>
        <Link href = "/blog?cat=fashion"
        className={`${category} ${"bg-[#7fb88133]"}`}>

          <Image src = "/food.png" alt="" width={32} height={32}
          className={image}
          />
          food
        </Link>
        <Link href = "/blog?cat=food"
        className={`${category} ${"bg-[#ff795736]"}`}>

          <Image src = "/travel.png" alt="" width={32} height={32}
          className={image}
          />
          Travel
        </Link>
        <Link href = "/blog?cat=culture"
        className={`${category} ${"bg-[#ffb04f45]"}`}>

          <Image src = "/culture.png" alt="" width={32} height={32}
          className={image}
          />
          Travel
        </Link>
        <Link href = "/blog?cat=coding"
        className={`${category} ${"bg-[#57c4ff31]"}`}>

          <Image src = "/coding.png" alt="" width={32} height={32}
          className={image}
          />
          Travel
        </Link>
      </div>

    </div>
  )
}

