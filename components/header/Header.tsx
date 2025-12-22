"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
    { label: "Sign Up", href: "/signup" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
                {/* Logo */}
                <Logo className="text-xl font-semibold sm:text-2xl" />

                {/* Desktop navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Search + icons (desktop) */}
                <div className="hidden items-center gap-4 md:flex">
                    <label className="relative">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="h-9 w-64 rounded-md border border-neutral-200 bg-neutral-50 pl-3 pr-8 text-xs text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black/5 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:ring-white/10"
                        />
                        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500">
                            <SearchIcon />
                        </span>
                    </label>
                    <button
                        aria-label="Wishlist"
                        className="rounded p-2 text-neutral-600 hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white"
                    >
                        <HeartIcon />
                    </button>
                    <button
                        aria-label="Cart"
                        className="rounded p-2 text-neutral-600 hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white"
                    >
                        <CartIcon />
                    </button>
                </div>

                {/* Mobile actions */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        aria-label="Cart"
                        className="rounded p-2 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                        <CartIcon />
                    </button>
                    <button
                        aria-label="Open menu"
                        className="rounded p-2 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
                        onClick={() => setIsOpen((v) => !v)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className={`md:hidden ${isOpen ? "block" : "hidden"} border-t border-neutral-200 dark:border-neutral-800`}
            >
                <div className="space-y-4 px-4 py-4">
                    <label className="relative block">
                        <input
                            type="text"
                            placeholder="Search products…"
                            className="h-10 w-full rounded-md border border-neutral-200 bg-neutral-50 pl-3 pr-9 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black/5 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:ring-white/10"
                        />
                        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500">
                            <SearchIcon />
                        </span>
                    </label>
                    <nav className="flex flex-col gap-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="rounded px-1 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}

function SearchIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M21 21l-3.5-3.5M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function HeartIcon() {
    return (
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 0.75C2.989 0.75 0.75 2.966 0.75 5.7C0.75 7.907 1.625 13.145 10.238 18.44C10.3923 18.5339 10.5694 18.5835 10.75 18.5835C10.9306 18.5835 11.1077 18.5339 11.262 18.44C19.875 13.145 20.75 7.907 20.75 5.7C20.75 2.966 18.511 0.75 15.75 0.75C12.989 0.75 10.75 3.75 10.75 3.75C10.75 3.75 8.511 0.75 5.75 0.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function CartIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 5H7L10 22H26" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}


