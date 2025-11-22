export default function ChatHeader({ title, subText, rightContent }) {
  return (
    <div className="w-full px-4 py-3 border-b border-gray-800 bg-gradient-to-r from-[#021126] to-[#051428]">

      {/* Top row (Title + Subtext) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3">
        <div className="flex items-center gap-2">
          <div className="text-lg font-semibold truncate">{title}</div>
          {subText && (
            <div className="text-xs text-gray-400 truncate">{subText}</div>
          )}
        </div>
      </div>

      {/* Optional right side (search bar, filters, etc.) */}
      {rightContent && (
        <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row sm:items-center gap-2">
          {rightContent}
        </div>
      )}

    </div>
  );
}
