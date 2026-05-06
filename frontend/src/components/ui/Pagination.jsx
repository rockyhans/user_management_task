import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between border-t border-surface-100 pt-4 mt-2">
      <p className="text-sm text-surface-500">
        Page <span className="font-medium text-surface-700">{currentPage}</span>{" "}
        of <span className="font-medium text-surface-700">{totalPages}</span>
      </p>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1.5 rounded-lg text-surface-500 hover:text-surface-900 hover:bg-surface-100
                     disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors
              ${
                p === currentPage
                  ? "bg-brand-600 text-white"
                  : "text-surface-600 hover:bg-surface-100"
              }`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded-lg text-surface-500 hover:text-surface-900 hover:bg-surface-100
                     disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
