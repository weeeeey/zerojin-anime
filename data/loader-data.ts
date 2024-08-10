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
    css: `.loader {
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
  {
    dataId: "89435A44",
    css: `.loader{
  width: 48px;
  height: 48px;
  border-radius: 50%;

  position: relative;
  border: 5px solid #fff;
  animation: rotation 1s linear infinite;
  &::before {
    content: "";
    position: absolute;
    box-sizing: border-box;
    inset: 4px;
    border-radius: 50%;
    border: 2px solid red;
    border-bottom: transparent;
    border-top: transparent;
  }
}`,
  },
  {
    dataId: "66D60CF2",
    css: `.loader[data-id="66D60CF2"] {
  width: 48px;
  height: 48px;
  border-radius: 50%;

  position: relative;
  border: 5px solid #fff;
  animation: rotation 1s linear infinite;
  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: red;
    width: 4px;
    height: 4px;
    top: 4px;
    left: calc(50% - 2px);
  }
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: red;
    width: 4px;
    height: 4px;
    bottom: 4px;
    left: calc(50% - 2px);
  }
}`,
  },
  {
    dataId: "C1985B39",
    css: `.loader{
  width: 48px;
  height: 48px;
  border-radius: 50%;

  position: relative;
  border: 5px #fff;
  border-style: solid solid dotted dotted;
  animation: rotation 2s linear infinite;
  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 4px;
    border: #ff3d00 3px;
    border-style: solid solid dotted;
    animation: rotation 1s reverse linear infinite;
  }
}`,
  },
  {
    dataId: "5622703E",
    css: `.loader{
  width: 48px;
  height: 48px;
  border-radius: 50%;

  position: relative;
  border: 5px #fff solid;
  animation: outCircle 1s linear infinite;

  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 0;
    transform: scale(0);
    border: 2px #fff solid;
    animation: inCircle 1s linear infinite;
  }
}
@keyframes inCircle {
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.1);
  }
}
@keyframes outCircle {
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}`,
  },
];
export default loaderData;
