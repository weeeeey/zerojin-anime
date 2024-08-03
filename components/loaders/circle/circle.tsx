interface CircleProps {
    animationId: string;
    animationCss: string;
    handleClick: (html: string, css: string, tailwind?: string) => void;
}

const ExCircle = ({ handleClick, animationId, animationCss }: CircleProps) => {
    return (
        <div
            className="cursor-pointer  h-[50vh] flex justify-center items-center "
            onClick={() => handleClick('', animationCss)}
        >
            <div data-id={animationId} className="loader" />
        </div>
    );
};

export default ExCircle;
