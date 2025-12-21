export default function AnnouncementBar() {
    return (
        <div className="w-full bg-black text-white">
            <div className="relative mx-auto flex h-9 max-w-7xl items-center justify-center px-4 sm:px-6">
                <p className="truncate text-center text-[11px] leading-none text-neutral-300 sm:text-xs">
                    Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%
                    <a
                        href="#shop-now"
                        className="ml-1 font-semibold text-white underline underline-offset-2 hover:no-underline"
                    >
                        ShopNow
                    </a>
                </p>

                <div className="absolute right-4 flex items-center">
                   <select className="text-neutral-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:text-xs">
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                   </select>
                </div>
            </div>
        </div>
    );
}

