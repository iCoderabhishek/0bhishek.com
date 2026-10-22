import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { Stack } from "@/components/home/Stack";
import { Numbers } from "@/components/home/Numbers";
import { Work } from "@/components/home/Work";
import { Experience } from "@/components/home/Experience";
import { Process } from "@/components/home/Process";
import { Writing } from "@/components/home/Writing";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="order-first">
        <Hero />
      </div>
      <Manifesto />
      <Stack />
      <Numbers />
      <Work />
      <div className="-order-1 lg:order-none">
        <Experience />
      </div>
      <Process />
      <Writing />
    </div>
  );
}
