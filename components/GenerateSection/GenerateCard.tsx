import { type GenerateCardProps } from "@/types"

export function GenerateCard({ icon, title, description, isNew, colorScheme, onOpen }: GenerateCardProps) {
  const getIconBg = () => {
    switch (colorScheme) {
      case 'blue':
        return 'bg-gradient-to-br from-blue-400 to-blue-600';
      case 'yellow':
        return 'bg-yellow-500';
      case 'cyan':
        return 'bg-gradient-to-br from-cyan-400 to-blue-500';
      case 'gray':
        return 'bg-gray-800';
      case 'purple':
        return 'bg-gradient-to-br from-indigo-500 to-purple-600';
      case 'green':
        return 'bg-gradient-to-br from-green-400 to-teal-600';
      default:
        return 'bg-gray-800';
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-3 flex justify-between items-center transition-all duration-150 hover:shadow-md hover:-translate-y-0.5 min-h-[88px]">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl ${getIconBg()}`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
            {isNew && (
              <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                New
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 leading-5">{description}</p>
        </div>
      </div>
      <button 
        onClick={onOpen}
        className="px-6 py-2 bg-gray-100 text-gray-900 border-0 rounded-full font-semibold text-sm cursor-pointer transition-all duration-150 hover:bg-gray-300"
      >
        Open
      </button>
    </div>
  );
}