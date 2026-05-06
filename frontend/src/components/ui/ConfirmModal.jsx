import { AlertTriangle, X } from "lucide-react";

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  loading,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-surface-950/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-surface-400
                     hover:text-surface-600 hover:bg-surface-100 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <AlertTriangle size={20} className="text-brand-600" />
          </div>
          <div>
            <h3 className="font-display font-700 text-surface-900 text-base mb-1">
              {title}
            </h3>
            <p className="text-sm text-surface-500">{description}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-6 justify-end">
          <button
            onClick={onClose}
            className="btn-secondary"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="btn-primary bg-brand-600 hover:bg-brand-700"
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
