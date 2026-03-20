export function PageIntro({ eyebrow, title, description, actions }) {
  return (
    <section className="rounded-[32px] border border-sand-200/85 bg-white/68 p-6 shadow-soft backdrop-blur-sm sm:p-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clove-700">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-clove-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-clove-700 sm:text-base">
            {description}
          </p>
        </div>

        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
