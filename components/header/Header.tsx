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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CartIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M3 3h1.8l1.94 10.34A2 2 0 0 0 8.71 15h7.84a2 2 0 0 0 1.97-1.64L20.4 7H6.12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="9" cy="20" r="1.5" fill="currentColor" />
            <circle cx="17" cy="20" r="1.5" fill="currentColor" />
        </svg>
    );
}


