import { type GenerateCardProps } from "@/types"

export function GenerateCard({ image, title, description, isNew, onOpen }: GenerateCardProps) {

  return (
    <div className="bg-transparent dark:bg-card rounded-xl flex justify-between sm:items-center gap-3 sm:gap-3 transition-all duration-150 hover:shadow-md hover:-translate-y-0.5 min-h-[88px]">
      <div className="flex items-center gap-2 sm:gap-2">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl`}
          style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center' }}>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm sm:text-base font-semibold text-primary">{title}</h3>
            {isNew && (
              <span className="bg-blue-500 text-white px-1.5 sm:px-2 py-0.5 rounded-full text-xs font-bold">
                New
              </span>
            )}
          </div>
          <p className="text-sm sm:text-sm text-gray-500 leading-4 sm:leading-5">{description}</p>
        </div>
      </div>
      <button
        onClick={onOpen}
        className="px-4 sm:px-6 py-2 bg-muted text-muted-foreground border-0 rounded-full font-semibold text-sm cursor-pointer transition-all duration-150 hover:bg-gray-300 self-center"
      >
        Open
      </button>
    </div>
  );
}