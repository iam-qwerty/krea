"use client"
import { GenerateCard } from "./GenerateCard"
import { ChevronDown } from 'lucide-react';

export function GenerateSection() {

  const handleOpen = (toolName:string) => {
    alert(`Open ${toolName} tool`);
  };

  const cards = [
    {
      image: "/generate/asset-image.png",
      title: "Image",
      description: "Generate images with custom styles in Flux and Ideogram.",
      isNew: true,
    },
    {
      image: "/generate/asset-video.png",
      title: "Video",
      description: "Generate videos with Hailuo, Pika, Runway, Luma and more.",
      isNew: false,
    },
    {
      image: "/generate/asset-realtime.png",
      title: "Realtime",
      description: "Realtime AI rendering on a canvas. Instant feedback loops.",
      isNew: false,
    },
    {
      image: "/generate/asset-enhance.png",
      title: "Enhancer",
      description: "Upscale and enhance images and videos up to 22K.",
      isNew: true,
    },
    {
      image: "/generate/asset-edit.png",
      title: "Edit",
      description: "Add objects, change style, or expand photos and generations.",
      isNew: true,
    },
    {
      image: "/generate/asset-lipsync.png",
      title: "Video Lipsync",
      description: "Lip sync any video to any audio.",
      isNew: true,
    },
    {
      image: "/generate/asset-motion.png",
      title: "Motion Transfer",
      description: "Transfer motion to images and animate characters.",
      isNew: true,
    },
    {
      image: "/generate/asset-train.png",
      title: "Train",
      description: "Teach Krea to replicate your style, products or characters.",
      isNew: false,
    }
  ];

  return (
    <div className="max-w-full mx-auto">
      <section className="mb-8 px-4 sm:px-6 md:px-8" aria-labelledby="generate-title">
        <div className="flex justify-between items-center mb-4">
          <h2 id="generate-title" className="text-xl sm:text-2xl font-semibold text-primary">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-x-8">
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