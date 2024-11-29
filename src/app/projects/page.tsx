"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Shopizilla",
    description: `Shopizilla is a one-stop solution for all your shopping needs. With
      a sleek, user-friendly interface, it offers a seamless shopping
      experience that is both efficient and enjoyable. Whether you are
      looking for the latest fashion trends, tech gadgets, or home
      essentials, Shopizilla has you covered.`,
    link: "https://www.youtube.com/watch?v=ao2ymOi3nvQ&ab_channel=T%C3%BANguy%E1%BB%85nAnh",
    images: [
      "/assets/projects-screenshots/shopizilla/shopizilla-home.png",
      "/assets/projects-screenshots/shopizilla/shopizilla-filter.png",
    ],
  },
  {
    id: 2,
    name: "Taskor",
    description: `Taskor is a task manager app that helps you stay organized and
      productive. With a sleek, modern design and intuitive user
      interface, Taskor makes it easy to create, manage, and track your
      tasks, so you can focus on what matters most.`,
    link: "https://github.com/GMTteam/taskor",
    images: [
      "/assets/projects-screenshots/taskor/landing.png",
      "/assets/projects-screenshots/taskor/Screenshot-taskScreen.png",
      "/assets/projects-screenshots/taskor/Screenshot-timelineScreen.png",
      "/assets/projects-screenshots/taskor/Screenshot-cateScreen.png",
      "/assets/projects-screenshots/taskor/Screenshot-calenderScreen.png"
    ],
  },
  {
    id: 3,
    name: "Viland Travel",
    description: `Viland Travel is a booking tour website that offers a wide range of
      travel packages to destinations around the world. With a clean,
      modern design and user-friendly interface, Viland Travel makes it`,
    link: "https://vilandtravel.com/",
    images: [
      "/assets/projects-screenshots/vilandtravel/vilandtravel-home.png",
      "/assets/projects-screenshots/vilandtravel/vilandtravel-tour.png",
    ],
  },
  {
    id: 4,
    name: "Portfolio",
    description: `Welcome to my digital playground, where creativity meets code in the
      most amazing way possible.`,
    link: "https://andree-portfolio.vercel.app/",
    images: ["/assets/projects-screenshots/portfolio/landing.png"],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
