import React from "react"

const SideBar = ({ children }) => {
  return (
    <div className="flex">
      <div className="min-h-screen w-[200px] bg-black">
        <h3 className="text-white text-xl text-center">X Path Tester</h3>
      </div>
      <div className="flex-1">
        <div className="p-10 w-full">{children}</div>
      </div>
    </div>
  )
}

export default SideBar
