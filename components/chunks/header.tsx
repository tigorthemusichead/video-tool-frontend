import {UserButton} from "@clerk/nextjs";
import Link from "next/link";
import LinkText from "@/components/elements/link-text";

export default function Header () {
  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-lg backdrop-brightness-50 drop-shadow-xl">
      <div className="w-full h-[60px] flex justify-between items-center p-10">
        <Link href={"/"}>
          <div className="text-2xl">
            Video tool
          </div>
        </Link>
        <div className="flex gap-10 items-center">
          <LinkText href={"/app"} label={"App"}/>
          <UserButton/>
        </div>
      </div>
    </header>
  )
}
