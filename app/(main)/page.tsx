'use client';

import { Circles } from '@/components/loaders';
import { useBrowser } from '@/hooks/useBrowser';
import { useCodeStore } from '@/lib/code-store';
import { useModalStore } from '@/lib/modal-store';

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
            <div className="fixed inset-0 flex justify-center items-center z-50 bg-black text-white ">
                Chrome,Opera,Edge에서 지원되는 페이지입니다
            </div>
        );

    return (
        <div className="grid-container h-full w-full grid grid-cols-2 md:grid-cols-3 *:duration-500 mt-[100vh] ">
            {Object.values(Circles).map((Circle, idx) => (
                <Circle handleClick={handleClick} key={idx} />
            ))}
        </div>
    );
};

export default MainPage;
