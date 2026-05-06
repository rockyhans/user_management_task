import { Users } from "lucide-react";

export default function EmptyState({
  title = "No users found",
  description = "",
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-14 h-14 bg-surface-100 rounded-2xl flex items-center justify-center mb-4">
        <Users size={24} className="text-surface-400" />
      </div>
      <p className="font-display font-600 text-surface-700 text-base">
        {title}
      </p>
      {description && (
        <p className="text-sm text-surface-400 mt-1 max-w-xs">{description}</p>
      )}
    </div>
  );
}
