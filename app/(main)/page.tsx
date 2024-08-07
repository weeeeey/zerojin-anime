"use client";

import { useCodeStore } from "@/lib/code-store";
import { useModalStore } from "@/lib/modal-store";
import { useBrowser } from "@/hooks/useBrowser";

import { loaderData, checkboxData } from "@/data";

import { LoaderAnimation, CheckBoxAnimation } from "@/components/animation";

const MainPage = () => {
  const { onOpen } = useModalStore();
  const { setCode } = useCodeStore();
  const handleClick = (html: string, css: string, tailwind?: string) => {
    setCode(html, css, tailwind);
    onOpen();
  };
  const isAvaliable = useBrowser();

  if (!isAvaliable)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
        Chrome,Opera,Edge에서 지원되는 페이지입니다
      </div>
    );

  return (
    <div className="grid-container mt-[100vh] grid h-full w-full grid-cols-2 *:duration-500 md:grid-cols-3">
      {loaderData.map(({ dataId, css }) => (
        <LoaderAnimation
          key={dataId}
          animationId={dataId}
          animationCss={css}
          handleClick={handleClick}
        />
      ))}
      {checkboxData.map(({ dataId, css }) => (
        <CheckBoxAnimation
          key={dataId}
          animationId={dataId}
          animationCss={css}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default MainPage;
