import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncate = (text: string, length: number) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};

export const formatNumber = (
  number: number,
  locale: string = "en-US"
): string => {
  return new Intl.NumberFormat(locale, {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);
};

export function getPage(pathName: string){
  const parsedPathName = pathName.split("/").slice(2);
  if (parsedPathName[0] === "works" && parsedPathName.length > 1) return 'work_details';

  return parsedPathName[0];
}

export function getPercentWidth(fixedWidth: number | undefined = 1, containerWidth: number | undefined = 1){

  return Math.round(fixedWidth / (containerWidth / 100));
}
