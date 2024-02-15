import Header from "@/components/chunks/header";
import Footer from "@/components/chunks/footer";
import AppForm from "@/components/chunks/app-form";
import VideoPlayer from "@/components/chunks/video-player";

export default function AppPage () {
  return (
    <>
      <Header/>
      <main className="min-h-screen flex flex-col justify-center items-center p-10 pt-[80px] gap-10">
        <div className="w-full lg:w-fit lg:min-w-[600px] border border-white rounded-xl">
          <AppForm/>
        </div>
        <VideoPlayer/>
      </main>
      <Footer/>
    </>
  )
}
