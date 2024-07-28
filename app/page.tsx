'use client';

import { Circle, Circle02 } from '@/components/loaders';
import { useCodeStore } from '@/lib/code-store';
import { useModalStore } from '@/lib/modal-store';

const MainPage = () => {
    const { onOpen } = useModalStore();
    const { setCode } = useCodeStore();
    const handleClick = (html: string, css: string, tailwind?: string) => {
        setCode(html, css);
        onOpen();
    };

    return (
        <div className="grid-container h-full w-full grid grid-cols-3 *:duration-500 ">
            <Circle handleClick={handleClick} />
            <Circle02 handleClick={handleClick} />
            <Circle handleClick={handleClick} />
            <Circle handleClick={handleClick} />
            <Circle handleClick={handleClick} />
            <Circle handleClick={handleClick} />
            <Circle handleClick={handleClick} />
            <Circle handleClick={handleClick} />
        </div>
    );
};

export default MainPage;
