import { AnimationFCProps } from '.';

const html = `
  <span class="loader"></span>
`;

const css = `
  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Circle = ({ handleClick }: AnimationFCProps) => {
    return (
        <div
            className="cursor-pointer h-[50vh] flex justify-center items-center"
            onClick={() => handleClick(html, css)}
        >
            <div className="loader" />
        </div>
    );
};

export default Circle;