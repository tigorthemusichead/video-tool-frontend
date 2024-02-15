import LinkText from "@/components/elements/link-text";

export default function Footer () {
  return (
    <footer>
      <div className={"w-full bg-gray-800 p-10"}>
        <h2 className="text-2xl mb-5">Video tool</h2>
        <div className={"flex flex-wrap gap-5"}>
          <LinkText label={"Home"} href={"/"}/>
          <LinkText label={"App"} href={"/app"}/>
          <LinkText label={"Github"} href={"https://github.com/tigorthemusichead"}/>
          <LinkText label={"Telegram"} href={"https://t.me/Tiigor"}/>
        </div>
      </div>
    </footer>
  )
}
