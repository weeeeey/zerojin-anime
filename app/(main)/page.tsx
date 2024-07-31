'use client';

import * as Circles from '@/components/loaders';
import { useCodeStore } from '@/lib/code-store';
import { useModalStore } from '@/lib/modal-store';
import React from 'react';

const MainPage = () => {
    const { onOpen } = useModalStore();
    const { setCode } = useCodeStore();
    const handleClick = (html: string, css: string, tailwind?: string) => {
        setCode(html, css, tailwind);
        onOpen();
    };

    return (
        <div className="grid-container h-full w-full grid grid-cols-2 md:grid-cols-3 *:duration-500  ">
            {Object.values(Circles).map((Circle, idx) => (
                <Circle handleClick={handleClick} key={idx} />
            ))}
            {Object.values(Circles).map((Circle, idx) => (
                <Circle handleClick={handleClick} key={idx} />
            ))}
            {Object.values(Circles).map((Circle, idx) => (
                <Circle handleClick={handleClick} key={idx} />
            ))}
        </div>
    );
};

export default MainPage;
