import Image from "next/image";
import React from "react";
import Link from "next/link";

interface ProjectItemProps {
  title: string;
  backgroundImg: string;
  projectUrl: string;
  tech: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  backgroundImg,
  projectUrl,
  tech,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        alt="/"
        src={backgroundImg}
        width={600}
        height={600}
      />
      <div className="hidden group-hover:block absolute ">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 front-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
