"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaReact, FaSwift } from "react-icons/fa";
import { SiTypescript, SiCplusplus, SiJavascript } from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { config } from "@/data/config";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen max-w-7xl mx-auto grid-flow-row">
      <Link href={"#about"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          ABOUT ME
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 z-[9999] mt-10 md:mt-20">
        {/* Personal Details Card */}
        <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-2xl">
          <CardHeader className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-2">
              <CardTitle className="text-4xl">Who Am I?</CardTitle>
              <CardDescription className="mt-5">
                A little introduction about myself and my journey as a developer.
              </CardDescription>
            </div>
            <Image
                src="/assets/nav-link-previews/avatar.png"
                alt="Author"
                width={200}
                height={200}
                style={{
                    filter: "drop-shadow(0 0 6px gray)",
                    borderRadius: "50%",
                }}
                />
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Hi, I&apos;m Nguyen Anh Tu - &quot;Andree&quot;, an indie developer with a passion for creating
              beautiful and functional applications. I specialize in Swift, React,
              React Native, TypeScript, and C++, with a focus on delivering clean and
              intuitive user experiences and high-performance.
            </p>
            <p className="text-lg mt-4">
              Outside of coding, I enjoy playing games, playing sports, and discovering our world.
            </p>
            <p className="text-lg mt-4">
                Feel free to reach out to me at{" "}
                <a
                    target="_blank"
                    href={`mailto:${config.email}`}
                    className="text-gray-600 cursor-can-hover rounded-s"
                >
                    {config.email}
                </a>{" "}
                if you have any questions or just want to chat.
            </p>
          </CardContent>
        </Card>

        {/* Tools and Technologies Card */}
        <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-2xl">
          <CardHeader>
            <CardTitle className="text-4xl">My Toolbox</CardTitle>
            <CardDescription>
              Tools and technologies I use to bring ideas to life.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Splide
              options={{
                type: "loop",
                perPage: 1,
                autoplay: true,
                interval: 8000,
                pauseOnHover: true,
              }}
              
            >
              {[
                { name: "Swift", description: "For building iOS apps.", icon: FaSwift },
                { name: "React", description: "My go-to library for UIs.", icon: FaReact },
                { name: "React Native", description: "Building mobile apps.", icon: FaReact },
                { name: "TypeScript", description: "For safer and scalable code.", icon: SiTypescript },
                { name: "C++", description: "For high-performance applications.", icon: SiCplusplus },
                { name: "JavaScript", description: "For web development.", icon: SiJavascript },
              ].map((tool, index) => (
                <SplideSlide key={index} >
                  <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-semibold">{tool.name}</h3>
                    <p className="text-center mt-2">{tool.description}</p>
                    <div className="mt-6 ">
                      {tool.icon ? <tool.icon size={150} /> : <FaSwift size={150} />}
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
