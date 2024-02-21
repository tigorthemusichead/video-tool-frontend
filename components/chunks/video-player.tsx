"use client"
import {useAppStore} from "@/store/zustand";
import Timer from "@/components/elements/timer";

export default function VideoPlayer () {
  const { videoSrc, videoCreatedAt } = useAppStore()
  return (
    videoSrc != null && videoCreatedAt != null && new Date().getTime() - new Date(videoCreatedAt).getTime() < 5 * 60 * 1000
      ? <>
        <div>
          Video link will expire in <Timer countTo={new Date(new Date(videoCreatedAt).getTime() + 5 * 60 * 1000)}/>
        </div>
        <div className="w-full lg:w-[600px] border border-white rounded-xl overflow-hidden">
          <video src={videoSrc} controls />
        </div>
      </>
      : <></>
  )
}
