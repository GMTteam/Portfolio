"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

// Import các thư viện 3D
import { Canvas, useLoader } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";

// Component load model và áp texture vào mesh "Screen"
const ModelView = ({
  modelPath,
  textureImage,
}: {
  modelPath: string;
  textureImage: string;
}) => {
  // Load model từ file GLB
  const { scene } = useGLTF(modelPath);
  // Load texture từ ảnh dựa trên giá trị src của project
  const texture = useLoader(TextureLoader, textureImage);

  React.useEffect(() => {
    // Duyệt qua các đối tượng trong scene và tìm mesh có tên "Screen"
    scene.traverse((child: any) => {
      if (child.name === "Screen" && child.isMesh) {
        child.material.map = texture;
        child.material.needsUpdate = true;
        
      } else {
        if (child.material) {
          child.material.color.set("gray");
      }
      }
    });
  }, [scene, texture]);

  return <primitive object={scene} scale={1.4} />;
};

// Component preview cho từng project: nếu có model thì render Canvas với model có texture, còn không thì render Image như cũ.
const ProjectPreview = ({ project }: { project: Project }) => {
  if (project.model) {
    return (
      <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [2, 0, 5] }}>
        
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} />
        {/* Sử dụng project.src để làm texture cho Screen */}
        <ModelView modelPath={project.model} textureImage={project.src} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    );
  } else {
    return (
      <Image
        className="absolute w-full h-full top-0 left-0 hover:scale-[1.05] transition-all"
        src={project.src}
        alt={project.title}
        width={300}
        height={300}
      />
    );
  }
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <Link href={"#projects"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32"
          )}
        >
          Projects
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {projects.map((project) => (
          <Modall key={project.src} project={project} />
        ))}
      </div>
    </section>
  );
};

const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn">
          <div
            className="relative w-[400px] h-auto rounded-lg overflow-hidden"
            style={{ aspectRatio: "3/2" }}
          >
            <ProjectPreview project={project} />
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6">
                <div className="text-lg text-left">{project.title}</div>
                <div className="text-xs bg-white text-black rounded-lg w-fit px-2">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <Link href={project.live} target="_blank">
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Visit
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Frontend
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      {project.content}
    </>
  );
};
