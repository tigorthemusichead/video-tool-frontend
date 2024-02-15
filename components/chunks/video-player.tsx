"use client"
import {useAppStore} from "@/store/zustand";

export default function VideoPlayer () {
  const { videoSrc } = useAppStore()
  return (
    videoSrc != null
      ? <div className="w-full lg:w-[600px] border border-white rounded-xl overflow-hidden">
        <video src={videoSrc} controls />
      </div>
      : <></>
  )
}
