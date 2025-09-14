"use client"
import { GenerateCard } from "./GenerateCard"
import { ChevronDown, Image, Video, Zap, Maximize2, Wand2, Mic, User } from 'lucide-react';

export function GenerateSection() {

  const handleOpen = (toolName:string) => {
    alert(`Open ${toolName} tool`);
  };

  const cards = [
    {
      icon: <Image />,
      title: "Image",
      description: "Generate images with custom styles.",
      isNew: true,
      colorScheme: "blue"
    },
    {
      icon: <Video />,
      title: "Video",
      description: "Generate videos with Hailuo, Pika...",
      isNew: false,
      colorScheme: "yellow"
    },
    {
      icon: <Zap />,
      title: "Realtime",
      description: "Realtime AI rendering on a canvas.",
      isNew: false,
      colorScheme: "cyan"
    },
    {
      icon: <Maximize2 />,
      title: "Enhancer",
      description: "Upscale and enhance images.",
      isNew: true,
      colorScheme: "gray"
    },
    {
      icon: <Wand2 />,
      title: "Edit",
      description: "Add objects, change style.",
      isNew: true,
      colorScheme: "purple"
    },
    {
      icon: <Mic />,
      title: "Video Lipsync",
      description: "Lip sync any video to any audio.",
      isNew: true,
      colorScheme: "green"
    },
    {
      icon: <User />,
      title: "Motion Transfer",
      description: "Transfer motion to images.",
      isNew: true,
      colorScheme: "gray"
    },
    {
      icon: <div className="w-6 h-6 bg-gray-100 rounded" />,
      title: "Train",
      description: "Teach Krea to replicate your style.",
      isNew: false,
      colorScheme: "gray"
    }
  ];

  return (
    <div className="max-w-[1570px] mx-auto">
      <section className="mb-8 px-6 md:px-8" aria-labelledby="generate-title">
        <div className="flex justify-between items-center mb-4">
          <h2 id="generate-title" className="text-2xl font-semibold text-gray-900">
            Generate
          </h2>
          <a 
            href="#" 
            className="flex items-center gap-1 text-blue-600 no-underline font-medium text-sm transition-all duration-150 hover:underline"
          >
            <ChevronDown size={16} />
            <span>Show all</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <GenerateCard
              key={index}
              {...card}
              onOpen={() => handleOpen(card.title)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}