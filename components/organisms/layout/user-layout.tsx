import React from "react"
import ImageGroup from "../image/image-group"

interface Iprops {
  children: React.ReactNode
}

const UserLayout = (props:Iprops) => {
  return (
    <div className="h-screen w-full flex bg-tosca">
      <div className="w-5/12 flex flex-col p-32 space-y-4">
        <h2 className="text-2xl text-tosca-darker font-bold">Desa Digital </h2>
        <h1 className="text-5xl text-white font-bold">Manud Jaya</h1>
      </div>
      <div className="bg-white w-7/12 flex p-24 px-56 rounded-l-[3rem] text-slate-800">
        {props.children}
      </div>
      <div className="-bottom-2 fixed">
      <ImageGroup />
      </div>
    </div>
  )
}

export default UserLayout