"use client";
type Product = {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    oldPrice?: number;
    discountPercent?: number; // e.g. 40 means "-40%"
    rating?: number; // 0..5
    ratingCount?: number;
};

type ProductCardProps = {
    product: Product;
    onAddToCart?: (productId: string) => void;
    onToggleWishlist?: (productId: string) => void;
    onQuickView?: (productId: string) => void;
};

export default function ProductCard({
    product,
    onAddToCart,
    onQuickView,
    onToggleWishlist,
}: ProductCardProps) {
    const {
        id,
        name,
        imageUrl,
        price,
        oldPrice,
        discountPercent,
        rating = 0,
        ratingCount = 0,
    } = product;

    return (
        <article className="group overflow-hidden rounded-md border border-neutral-200 bg-white transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950">
            <div className="relative">
                {/* Image */}
                <img
                    src={imageUrl}
                    alt={name}
					className="aspect-4/3 w-full object-contain bg-neutral-50 p-4 dark:bg-neutral-900"
                    loading="lazy"
                />

                {/* Discount badge */}
                {typeof discountPercent === "number" ? (
                    <div className="absolute left-2 top-2 rounded-sm bg-[#DB4444] px-2 py-1 text-[11px] font-medium text-white">
                        -{discountPercent}%
                    </div>
                ) : null}

                {/* Action icons */}
                <div className="absolute right-2 top-2 flex flex-col gap-2">
                    <button
                        aria-label="Add to wishlist"
                        onClick={() => onToggleWishlist?.(id)}
                        className="rounded-full bg-white p-2 text-neutral-700 shadow-sm hover:bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
                    >
                        <HeartIcon />
                    </button>
                    <button
                        aria-label="Quick view"
                        onClick={() => onQuickView?.(id)}
                        className="rounded-full bg-white p-2 text-neutral-700 shadow-sm hover:bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
                    >
                        <EyeIcon />
                    </button>
                </div>

                {/* Add to cart on hover */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                    <button
                        aria-label="Add to cart"
                        onClick={() => onAddToCart?.(id)}
                        className="pointer-events-auto block w-full bg-black py-2 text-center text-xs font-medium text-white hover:opacity-90"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>

            <div className="space-y-1 p-3">
                <h4 className="line-clamp-1 text-sm font-medium">{name}</h4>

                {/* Price */}
                <div className="flex items-center gap-2">
                    <div className="text-sm font-semibold text-[#DB4444]">${price}</div>
                    {typeof oldPrice === "number" ? (
                        <div className="text-sm text-neutral-400 line-through">${oldPrice}</div>
                    ) : null}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    <StarRow value={rating} />
                    <span className="text-xs text-neutral-500">({ratingCount})</span>
                </div>
            </div>
        </article>
    );
}

function StarRow({ value }: { value: number }) {
    const full = Math.round(value);
    return (
        <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className={i < full ? "text-[#FFAD33]" : "text-neutral-300"} />
            ))}
        </div>
    );
}

function HeartIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function EyeIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

function StarIcon({ className }: { className?: string }) {
    return (
        <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
            <path d="M10 1.5l2.472 5.007 5.528.804-4 3.899.944 5.5L10 13.75l-4.944 2.96.944-5.5-4-3.899 5.528-.804L10 1.5z" />
        </svg>
    );
}


