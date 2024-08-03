interface IAnimationProps {
    [dataId: string]: {
        css: string;
        tailwind?: string;
    };
}

export const animationData: IAnimationProps = {
    '254C3ED5': {
        css: `
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
        `,
    },
};
