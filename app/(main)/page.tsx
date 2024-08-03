'use client';

import { Circles } from '@/components/loaders';
import ExCircle from '@/components/loaders/circle/circle';
import { useBrowser } from '@/hooks/useBrowser';
import { useCodeStore } from '@/lib/code-store';
import { useModalStore } from '@/lib/modal-store';
import { animationData } from '@/animation-data';
import { useEffect, useState } from 'react';

const MainPage = () => {
    const { onOpen } = useModalStore();
    const { setCode } = useCodeStore();
    const handleClick = (html: string, css: string, tailwind?: string) => {
        setCode(html, css, tailwind);
        onOpen();
    };

    return (
        <div className="grid-container h-full w-full grid grid-cols-2 md:grid-cols-3 *:duration-500 mt-[100vh] ">
            {Object.values(Circles).map((C, idx) => (
                <C handleClick={handleClick} key={idx} />
            ))}
            <ExCircle
                animationCss={animationData['254C3ED5'].css}
                handleClick={handleClick}
                animationId="254C3ED5"
            />
        </div>
    );
};

export default MainPage;
