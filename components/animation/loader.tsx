import { AnimationProps } from ".";

const html = `<span className='loader' />`;

const LoaderAnimation = ({
  handleClick,
  animationId,
  animationCss,
}: AnimationProps) => {
  return (
    <div
      className="flex h-[50vh] cursor-pointer items-center justify-center"
      onClick={() => handleClick(html, animationCss)}
    >
      <div data-id={animationId} className="loader" />
    </div>
  );
};

export default LoaderAnimation;
