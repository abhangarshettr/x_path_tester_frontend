import React from "react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

function HomeCard({ title, text, onClick }) {
  return (
    <div
      className="bg-white shadow-lg max-w-[350px] min-h-[100px] p-5 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex gap-2">
        <h3 className="text-xl">{title}</h3>
        <HiOutlineArrowNarrowRight size={24} className="mt-1" />
      </div>
      <h3 className="mt-5">{text}</h3>
    </div>
  )
}

export default HomeCard
