import Navbar from "./components/Navbar";
import Homepage from "./components/homepage";
import Info from "./components/Info";
import Hobbies from "./components/hobbies";
import Skills from "./components/skills";
import Experience from "./components/Experience";
import Projects from "./components/projects"
import EmailSection from "./components/emailSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-6 md:p-12 lg:p-24">
      <Navbar />
      <Homepage />
      <Info />
      <Hobbies />
      <Skills/ >
      <Experience/ >
      <Projects/ >
      <EmailSection/ >
    </main>
  );
}
