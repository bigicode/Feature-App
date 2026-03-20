export function PageLoadingPanel({ rows = 3 }) {
  return (
    <div className="mt-6 grid gap-4">
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="h-44 animate-pulse rounded-[30px] border border-sand-200/80 bg-white/60 shadow-soft"
        />
      ))}
    </div>
  );
}

export function PageErrorPanel({ title = "Unable to load", message }) {
  return (
    <div className="mt-6 rounded-[30px] border border-[#dfbdae] bg-[#fbefe9] p-8 shadow-soft">
      <p className="font-display text-3xl text-clove-900">{title}</p>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-clove-700">
        {message}
      </p>
    </div>
  );
}
