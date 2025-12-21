"use client";

import Link from "next/link";
import { useState } from "react";

export type CategoryItem = {
    label: string;
    href?: string;
    hasChildren?: boolean;
    children?: Array<{ label: string; href?: string }>;
};

const defaultCategories: CategoryItem[] = [
    {
        label: "Woman's Fashion",
        href: "/c/women",
        hasChildren: true,
        children: [
            { label: "Dresses", href: "/c/women/dresses" },
            { label: "Tops", href: "/c/women/tops" },
            { label: "Shoes", href: "/c/women/shoes" },
        ],
    },
    {
        label: "Men's Fashion",
        href: "/c/men",
        hasChildren: true,
        children: [
            { label: "T-Shirts", href: "/c/men/t-shirts" },
            { label: "Pants", href: "/c/men/pants" },
            { label: "Shoes", href: "/c/men/shoes" },
        ],
    },
    { label: "Electronics", href: "/c/electronics" },
    { label: "Home & Lifestyle", href: "/c/home" },
    { label: "Medicine", href: "/c/medicine" },
    { label: "Sports & Outdoor", href: "/c/sports" },
    { label: "Baby & Toys", href: "/c/baby" },
    { label: "Groceries & Pets", href: "/c/groceries" },
    { label: "Health & Beauty", href: "/c/beauty" },
];

type SidebarProps = {
    categories?: CategoryItem[];
    className?: string;
};

export default function Sidebar({ categories = defaultCategories, className }: SidebarProps) {
    const [openSet, setOpenSet] = useState<Set<string>>(new Set());

    const toggle = (label: string) => {
        setOpenSet((prev) => {
            const next = new Set(prev);
            if (next.has(label)) next.delete(label);
            else next.add(label);
            return next;
        });
    };

    return (
        <aside className={className}>
            {/* Desktop / tablet: vertical nav - auto height (fits content) */}
            <div className="hidden md:block md:w-64 md:border-r md:border-neutral-200 dark:md:border-neutral-800">
                <ul className="py-2">
                    {categories.map((item) => (
                        <li key={item.label} className="select-none">
                            <div>
                                <button
                                    type="button"
                                    onClick={() => (item.children?.length ? toggle(item.label) : undefined)}
                                    aria-expanded={openSet.has(item.label)}
                                    className="flex w-full items-center justify-between py-2 pr-3 text-left text-sm text-neutral-700 hover:text-black focus:outline-none dark:text-neutral-300 dark:hover:text-white"
                                >
                                    <span className="truncate">{item.label}</span>
                                    {item.children?.length ? (
                                        <span className={`transition-transform ${openSet.has(item.label) ? "rotate-90" : ""}`}>
                                            <ChevronRightIcon />
                                        </span>
                                    ) : null}
                                </button>

                                {item.children?.length && openSet.has(item.label) ? (
                                    <ul className="ml-2 border-l border-neutral-200 pl-3 dark:border-neutral-800">
                                        {item.children.map((child) => (
                                            <li key={child.label}>
                                                <Link
                                                    href={child.href ?? "#"}
                                                    className="block py-1.5 text-sm text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                                                >
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile: horizontally scrollable chips */}
            <div className="md:hidden -mx-4 overflow-x-scroll">
                <div className="flex w-full snap-x gap-2 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scrollbar-hide">
                    {categories.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href ?? "#"}
                            className="snap-start whitespace-nowrap rounded-full border border-neutral-200 px-3 py-2 text-xs text-neutral-700 hover:border-neutral-300 hover:text-black dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
}

function ChevronRightIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}


