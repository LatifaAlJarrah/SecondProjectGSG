"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { defaultCategories, type CategoryItem } from "@/data/categories";

export type { CategoryItem };

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
                                            <Image src="/assets/Icons/ChevronRightIcon.svg" alt="Chevron Right" width={7} height={12} unoptimized />
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
