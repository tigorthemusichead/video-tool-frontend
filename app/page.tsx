import Header from "@/components/chunks/header";
import LinkButton from "@/components/elements/link-button";
import Footer from "@/components/chunks/footer";
import backgroundImage from "./background.webp"
export default function Home() {
  return (
    <>
      <Header/>
      <main className="h-screen flex flex-col justify-center items-center p-10 bg-cover bg-center " style={{
        backgroundImage: `url(${backgroundImage.src}`,
      }}>
        <div className="backdrop-blur-lg backdrop-brightness-50 p-10 rounded-xl drop-shadow-xl">
          <h1 className="text-4xl mb-4">Create a simple video clip</h1>
          <div className="flex gap-4 items-center">
            <h2 className="text-2xl underline underline-offset-4">in a few clicks</h2>
            <LinkButton href={"/app"} label={"Try now"}/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
