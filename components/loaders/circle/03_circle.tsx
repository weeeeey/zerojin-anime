import { AnimationFCProps } from '..';

const css = `
.loader-3 {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation-3 1s linear infinite;
    }

    @keyframes rotation-3 {
    
    100% {
        transform: rotate(360deg);
        border-bottom-color: #FFF;
    }
} 
`;
const html = `
  <span class="loader"></span>
`;

const Circle03 = ({ handleClick }: AnimationFCProps) => {
    return (
        <div
            className="cursor-pointer  h-[50vh] flex justify-center items-center"
            onClick={() => handleClick(html, css)}
        >
            <div className="loader-3" />
        </div>
    );
};

export default Circle03;
