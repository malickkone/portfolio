import AboutMe from "./components/aboutMe";
import Experience from "./components/experience";
import GetInTouch from "./components/getInTouch";
import Header from "./components/header";
import Projects from "./components/projects";
import SMK from "./components/smk";
import Technologies from "./components/technologies";

export default function App() {
  return (
    <div className="absolute h-full w-full bg-slate-950 ">
      <div className="overflow-auto absolute py-12 px-20 bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
        <Header/>
        <SMK/>
        <AboutMe/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <GetInTouch/>
      </div>
    </div>
  )
}