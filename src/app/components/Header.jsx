import React from 'react';
import Link from 'next/link';
import ThemeController from './ThemeController';

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="flex-1">
                <Link
                    className="btn btn-ghost normal-case text-xl"
                    href="#home"
                >
                    Mitchell Sam
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="#skills">Skills</Link>
                    </li>
                    <li>
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
                <ThemeController />
            </div>
        </div>
    );
};

export default Header;
