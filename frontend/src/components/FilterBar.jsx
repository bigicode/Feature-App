import { Funnel, Search } from "lucide-react";

import { cn } from "../utils/cn";
import { AppSelect } from "./ui/AppSelect";

export function FilterBar({
  filters,
  activeFilter,
  deliveryFilter = "All",
  deliveryOptions = [],
  searchValue,
  onFilterChange,
  onDeliveryFilterChange,
  onSearchChange,
}) {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clove-700">
            Feature flow
          </p>
          <h2 className="mt-3 font-display text-3xl text-clove-900">
            Review board
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => onFilterChange(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                activeFilter === filter
                  ? "border-clove-900 bg-clove-900 font-semibold text-sand-50 shadow-soft"
                  : "border-sand-300 bg-white/70 font-medium text-clove-700 hover:border-clove-700",
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-3 xl:grid-cols-[minmax(0,1fr)_240px]">
        <label className="flex items-center gap-3 rounded-[22px] border border-sand-200 bg-sand-50/80 px-4 py-3">
          <Search className="h-4 w-4 text-copper-500" />
          <input
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by title, description, or submitter"
            className="w-full bg-transparent text-sm text-clove-800 outline-none placeholder:text-clove-700/70"
          />
        </label>

        {deliveryOptions.length > 0 ? (
          <label className="flex items-center gap-3 rounded-[22px] border border-sand-200 bg-sand-50/80 px-4 py-3 text-sm text-clove-700">
            <Funnel className="h-4 w-4 text-copper-500" />
            <AppSelect
              value={deliveryFilter}
              onValueChange={onDeliveryFilterChange}
              options={deliveryOptions.map((option) => ({
                value: option,
                label:
                  option === "All" ? "All delivery states" : option,
              }))}
              triggerClassName="min-h-0 border-0 bg-transparent px-0 py-0 shadow-none focus:border-transparent focus:ring-0"
              contentClassName="min-w-[240px]"
            />
          </label>
        ) : (
          <div className="flex items-center gap-3 rounded-[22px] border border-sand-200 bg-sand-50/80 px-4 py-3 text-sm text-clove-700">
            <Funnel className="h-4 w-4 text-copper-500" />
            Use review and delivery states to keep the queue controlled.
          </div>
        )}
      </div>
    </>
  );
}
