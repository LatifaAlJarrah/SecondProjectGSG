"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../header/Logo";
import Image from "next/image";

export default function Footer() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 300);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="relative mt-16 bg-black text-white">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-8 lg:gap-10">
                    <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-2">
                        <Logo className="text-xl sm:text-2xl font-bold text-white" />
                        <div className="space-y-2 my-2">
                            <p className="text-lg sm:text-xl font-medium">Subscribe</p>
                            <p className="text-xs sm:text-sm font-normal text-neutral-300">Get 10% off your first order</p>
                        </div>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex items-center overflow-hidden rounded-sm border border-white mt-2"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-transparent px-3 py-2.5 text-xs sm:text-sm outline-none placeholder:text-neutral-500"
                            />
                            <button
                                type="submit"
                                className="grid h-full min-w-9 place-items-center px-2 hover:bg-neutral-900 transition-colors"
                                aria-label="Subscribe"
                            >
                                <Image src="/assets/Icons/send.svg" alt="Send" width={20} height={20} unoptimized />
                            </button>
                        </form>
                    </div>

                    {/* Support Section */}
                    <div className="space-y-3 text-sm col-span-2">
                        <h5 className="mb-2 text-base sm:text-lg font-medium">Support</h5>
                        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed my-2">
                            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                        </p>
                        <Link
                            href="mailto:exclusive@gmail.com"
                            className="block text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors"
                        >
                            exclusive@gmail.com
                        </Link>
                        <Link
                            href="tel:+8801588888999"
                            className="block text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors"
                        >
                            +88015-88888-9999
                        </Link>
                    </div>

                    {/* Account Section */}
                    <div className="space-y-3 text-sm">
                        <h5 className="mb-2 text-base sm:text-lg font-medium">Account</h5>
                        <FooterLink href="#">My Account</FooterLink>
                        <FooterLink href="#">Login / Register</FooterLink>
                        <FooterLink href="#">Cart</FooterLink>
                        <FooterLink href="#">Wishlist</FooterLink>
                        <FooterLink href="#">Shop</FooterLink>
                    </div>

                    {/* Quick Link Section */}
                    <div className="space-y-3 text-sm">
                        <h5 className="mb-2 text-base sm:text-lg font-medium">Quick Link</h5>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Terms Of Use</FooterLink>
                        <FooterLink href="#">FAQ</FooterLink>
                        <FooterLink href="#">Contact</FooterLink>
                    </div>

                    {/* Download App Section */}
                    <div className="space-y-3 text-sm sm:col-span-2 lg:col-span-2">
                        <h5 className="mb-2 text-base sm:text-lg font-medium">Download App</h5>
                        <p className="text-xs text-neutral-400">Save $3 with App New User Only</p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:h-20">
                            <div className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-sm bg-white p-1 shrink-0">
                                <Image
                                    src="/assets/images/Qrcode.jpg"
                                    alt="QR Code"
                                    width={64}
                                    height={64}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 pt-2">
                            <SocialIcon>
                                <FacebookIcon />
                            </SocialIcon>
                            <SocialIcon>
                                <TwitterIcon />
                            </SocialIcon>
                            <SocialIcon>
                                <InstagramIcon />
                            </SocialIcon>
                            <SocialIcon>
                                <LinkedInIcon />
                            </SocialIcon>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-neutral-800 py-4 px-4 text-center text-xs text-neutral-500">
                © Copyright Rimel 2022. All rights reserved
            </div>

            <button
                onClick={scrollTop}
                aria-label="Back to top"
                className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-neutral-800 text-white shadow-lg transition-all z-50 hover:bg-neutral-700 ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
            >
                <ArrowUpIcon />
            </button>
        </footer>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="block text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors"
        >
            {children}
        </Link>
    );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
    return <div className="grid h-8 w-8 place-items-center rounded-full">{children}</div>;
}

function ArrowUpIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 5l7 7M12 5 5 12M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function FacebookIcon() {
    return <Image src="/assets/Icons/FacebookIcon.svg" alt="Facebook" width={24} height={24} unoptimized />
}
function TwitterIcon() {
    return <Image src="/assets/Icons/TwitterIcon.svg" alt="Twitter" width={24} height={24} unoptimized />
}
function InstagramIcon() {
    return <Image src="/assets/Icons/InstagramIcon.svg" alt="Instagram" width={24} height={24} unoptimized />
}
function LinkedInIcon() {
    return <Image src="/assets/Icons/LinkedInIcon.svg" alt="LinkedIn" width={24} height={24} unoptimized />
}


