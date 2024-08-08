interface IAnimationDataProps {
  dataId: string;
  css: string;
  tailwind?: string;
}

const checkboxData: IAnimationDataProps[] = [
  {
    dataId: "39CD2F6F",
    css: `
input[type='checkbox'] {
  display: none;
  + label {
    width: 100px;
    height: 30px;
    background-color: #ff3d00;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
    transition: 0.5s;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 5px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: white;
      transition: 0.3s;
      transform: translateY(-50%);
    }
  }
  &:checked + label {
    background-color: blue;
    &::before {
      left: calc(100% - 25px);
      transition: 0.3s;
    }
  }
}`,
  },

  {
    dataId: "626F9181",
    css: `input[data-id="626F9181"] {
  display: none;
  + label {
    width: 100px;
    height: 30px;
    background-color: blue;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
    transition: 0.5s;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 5px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: white;
      transition: 0.3s;
      transform: translateY(-50%);
      clip-path: polygon(
        0 20%,
        15% 0,
        52% 37%,
        84% 0,
        100% 18%,
        65% 49%,
        100% 85%,
        85% 100%,
        52% 61%,
        15% 100%,
        0 83%,
        37% 50%
      );
      /* rotate: 0; */
      transform-origin: top;
    }
  }
  &:checked + label {
    background-color: red;
    &::before {
      left: calc(100% - 25px);
      transition: 1s;
      rotate: 360deg;
    }
  }
}
`,
  },
];
export default checkboxData;
