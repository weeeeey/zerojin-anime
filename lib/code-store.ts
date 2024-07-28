import { create } from 'zustand';

interface OpenProps {
    html: string;
    css: string;
    tailwind?: string;
    setCode: (html: string, css: string, tailwind?: string) => void;
}

export const useCodeStore = create<OpenProps>((set) => ({
    html: '',
    css: '',
    tailwindCss: '',
    setCode: (html, css, tailwind) =>
        set({
            html,
            css,
            tailwind,
        }),
}));
