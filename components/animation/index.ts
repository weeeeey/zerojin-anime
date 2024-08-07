export interface AnimationProps {
  animationId: string;
  animationCss: string;
  handleClick: (html: string, css: string, tailwind?: string) => void;
}
export { default as LoaderAnimation } from "./loader";
export { default as CheckBoxAnimation } from "./checkbox";
