import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Hero from "@/components/main/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-screen">
      <div className="flex flex-col gap-4">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
