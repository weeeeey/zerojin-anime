'use client';

import { useModalStore } from '@/lib/modal-store';

const MainPage = () => {
    const { onOpen, isOpen } = useModalStore();
    return (
        <button
            onClick={() => {
                onOpen();
                console.log(isOpen);
            }}
        >
            open
        </button>
    );
};

export default MainPage;
