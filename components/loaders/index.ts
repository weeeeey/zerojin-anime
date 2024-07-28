export { default as Circle } from '@/components/loaders/01_circle';
export { default as Circle02 } from '@/components/loaders/02_circle';

export interface AnimationFCProps {
    handleClick: (html: string, css: string, tailwind?: string) => void;
}
