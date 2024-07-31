import { AnimationFCProps } from '..';

const css = `
.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
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
const html = `
  <span class="loader"></span>
`;

const Circle08 = ({ handleClick }: AnimationFCProps) => {
    return (
        <div
            className="cursor-pointer  h-[50vh] flex justify-center items-center"
            onClick={() => handleClick(html, css)}
        >
            <div className="loader-02" />
        </div>
    );
};
export default Circle08;
