import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export { cn };
