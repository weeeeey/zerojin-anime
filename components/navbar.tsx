import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="flex justify-between items-center mx-auto h-full text-white">
                <h1 className="navbar-title">Zerojin Anime</h1>
                <div className="space-x-4">
                    <span>Blog</span>
                    <span>Github </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
