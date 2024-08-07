interface IAnimationDataProps {
  dataId: string;
  css: string;
  tailwind?: string;
}

const loaderData: IAnimationDataProps[] = [
  {
    dataId: "884BF2AC",
    css: `
        .loader {
            width: 48px;
            height: 48px;
            border: 5px solid #fff;
            border-bottom-color: #ff3d00;
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

        `,
  },
  {
    dataId: "6DDA7C00",
    css: `
        .loader{
            width: 48px;
            height: 48px;
            border: 5px solid #fff;
            border-bottom-color: black;
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
        `,
  },
  {
    dataId: "B948BDDD",
    css: `

        .loader {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            position: relative;
            background-color: blue;
            /* animation: rotation 1s linear infinite; */
            &::before {
                content: '';
                box-sizing: border-box;
                position: absolute;
                inset: 0px;
                border-radius: 50%;
                background-color: red;
                border: 5px solid #fff;
                animation: prixClipFix 2s linear both;
            }
        }

        @keyframes prixClipFix {
            0% {
                clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
            }
            25% {
                clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
            }
            50% {
                clip-path: polygon(
                    50% 50%,
                    0 0,
                    100% 0,
                    100% 100%,
                    100% 100%,
                    100% 100%
                );
            }
            75% {
                clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
            }
            100% {
                clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
            }
        }

        `,
  },
];
export default loaderData;
