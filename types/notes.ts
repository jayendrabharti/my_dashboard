export type StickyNoteColors =
  | "yellow"
  | "blue"
  | "green"
  | "pink"
  | "purple"
  | "orange"
  | null;

export const colors = ["yellow", "blue", "green", "pink", "purple", "orange"];

export const COLOR_MAP: Record<
  string,
  { bg: string; shadow: string; hover: string }
> = {
  yellow: {
    bg: "bg-amber-100",
    shadow: "shadow-amber-200/70",
    hover: "hover:bg-amber-50",
  },
  blue: {
    bg: "bg-sky-100",
    shadow: "shadow-sky-200/70",
    hover: "hover:bg-sky-50",
  },
  green: {
    bg: "bg-emerald-100",
    shadow: "shadow-emerald-200/70",
    hover: "hover:bg-emerald-50",
  },
  pink: {
    bg: "bg-pink-100",
    shadow: "shadow-pink-200/70",
    hover: "hover:bg-pink-50",
  },
  purple: {
    bg: "bg-violet-100",
    shadow: "shadow-violet-200/70",
    hover: "hover:bg-violet-50",
  },
  orange: {
    bg: "bg-orange-100",
    shadow: "shadow-orange-200/70",
    hover: "hover:bg-orange-50",
  },
  null: {
    bg: "bg-neutral-100",
    shadow: "shadow-neutral-200/70",
    hover: "hover:bg-neutral-50",
  },
};
