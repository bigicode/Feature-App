import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Select } from "radix-ui";

import { cn } from "../../utils/cn";

function normalizeOption(option) {
  if (typeof option === "string") {
    return {
      value: option,
      label: option,
    };
  }

  return option;
}

export function AppSelect({
  value,
  onValueChange,
  options,
  placeholder,
  disabled = false,
  triggerClassName,
  contentClassName,
}) {
  const normalizedOptions = options.map(normalizeOption);
  const selectedOption = normalizedOptions.find((option) => option.value === value);

  return (
    <Select.Root value={value} onValueChange={onValueChange} disabled={disabled}>
      <Select.Trigger
        className={cn(
          "group inline-flex w-full items-center justify-between gap-3 rounded-[20px] border border-sand-300 bg-white/88 px-4 py-3 text-left text-sm font-medium text-clove-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] outline-none transition focus:border-clove-700 focus:ring-2 focus:ring-clove-900/10 disabled:cursor-not-allowed disabled:border-sand-200 disabled:bg-sand-100/85 disabled:text-clove-500 disabled:opacity-60",
          triggerClassName,
        )}
      >
        <Select.Value placeholder={placeholder}>
          {selectedOption?.label}
        </Select.Value>
        <Select.Icon className="shrink-0 text-clove-700 transition duration-200 group-data-[state=open]:rotate-180">
          <ChevronDown className="h-4 w-4" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={8}
          collisionPadding={12}
          className={cn(
            "z-[80] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[24px] border border-sand-200/90 bg-[linear-gradient(180deg,rgba(255,250,244,0.98),rgba(248,242,233,0.98))] p-2 shadow-card backdrop-blur-xl",
            contentClassName,
          )}
        >
          <Select.ScrollUpButton className="flex h-8 items-center justify-center text-clove-700">
            <ChevronUp className="h-4 w-4" />
          </Select.ScrollUpButton>

          <Select.Viewport className="space-y-1">
            {normalizedOptions.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="relative flex cursor-default select-none items-center rounded-[18px] px-4 py-3 pr-10 text-sm font-medium text-clove-800 outline-none transition data-[highlighted]:bg-clove-900 data-[highlighted]:text-sand-50 data-[state=checked]:bg-sand-100 data-[state=checked]:text-clove-900 data-[highlighted][data-state=checked]:bg-clove-900 data-[highlighted][data-state=checked]:text-sand-50"
              >
                <Select.ItemText>{option.label}</Select.ItemText>
                <Select.ItemIndicator className="absolute right-4 inline-flex items-center">
                  <Check className="h-4 w-4" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>

          <Select.ScrollDownButton className="flex h-8 items-center justify-center text-clove-700">
            <ChevronDown className="h-4 w-4" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
