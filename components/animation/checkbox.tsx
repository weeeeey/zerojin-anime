import { AnimationProps } from ".";

const html = `<input data-id={animationId} type="checkbox" id="check" />
<label htmlFor="check"></label>
`;

const CheckBoxAnimation = ({
  handleClick,
  animationId,
  animationCss,
}: AnimationProps) => {
  return (
    <div
      className="flex h-[50vh] cursor-pointer items-center justify-center"
      onClick={() => handleClick(html, animationCss)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex w-fit items-center justify-center p-2"
      >
        <input
          data-id={animationId}
          type="checkbox"
          id={`${animationId}-checkbox`}
        />
        <label htmlFor={`${animationId}-checkbox`}></label>
      </div>
    </div>
  );
};

export default CheckBoxAnimation;
