export default function Avatar({ src, name = "", size = "md" }) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-16 h-16 text-xl",
    xl: "w-24 h-24 text-3xl",
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`${sizes[size]} rounded-full object-cover ring-2 ring-surface-200`}
      />
    );
  }

  return (
    <div
      className={`${sizes[size]} rounded-full bg-brand-100 text-brand-700
                  flex items-center justify-center font-display font-700`}
    >
      {initials || "?"}
    </div>
  );
}
