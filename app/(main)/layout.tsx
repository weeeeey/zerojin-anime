import Navbar from '@/components/navbar';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full ">
            <Navbar />
            <main className="mt-[100vh]">{children}</main>
        </div>
    );
};

export default MainLayout;
