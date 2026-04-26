
export const COLORS = [
  "doorzichtig",
  "zwart",
  "wit",
  "paars",
  "oranje",
  "beige",
  "blauw",
  "secundair paars",
  "secundair grijs",
  "secundair blauw",
  "secundair rood",
] as const;
export type Color = typeof COLORS[number];

export function isColor(value: string): value is Color {
  return (COLORS as readonly string[]).includes(value);
}

export function toColorClass(color: Color): string | undefined {
  if (color == "doorzichtig")
    return "";

  return "--color-" + {
    "zwart": "yiska-black",
    "wit": "yiska-white",

    "paars": "yiska-purple",
    "oranje": "yiska-orange",
    "beige": "yiska-beige",
    "blauw": "yiska-blue",

    "secundair paars": "yiska-sec-purple",
    "secundair grijs": "yiska-sec-grey",
    "secundair blauw": "yiska-sec-blue",
    "secundair rood": "yiska-sec-red",
  }[color];
}

export function toColorVariable(color: Color): string {
  if (color == "doorzichtig")
    return "";

  return `var(${toColorClass(color)})`;
}
