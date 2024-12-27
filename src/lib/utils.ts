import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type Severity = 'info' | 'warning' | 'danger' | 'success';

export const getWarningIcon = (severity: Severity) => {
	switch (severity) {
		case 'info':
			return 'info-circle';
		case 'warning':
			return 'exclamation-triangle';
		case 'danger':
			return 'exclamation-circle';
		case 'success':
			return 'check-circle';
	}
};

export const getWarningBgColor = (severity: Severity) => {
	switch (severity) {
		case 'info':
			return 'bg-blue-100';
		case 'warning':
			return 'bg-yellow-100';
		case 'danger':
			return 'bg-red-100';
		case 'success':
			return 'bg-green-100';
	}
};

export const getWarningTextColor = (severity: Severity) => {
	switch (severity) {
		case 'info':
			return 'text-blue-800';
		case 'warning':
			return 'text-yellow-800';
		case 'danger':
			return 'text-red-800';
		case 'success':
			return 'text-green-800';
	}
};