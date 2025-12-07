"use client";

import { useState, useEffect } from "react";
import FilterButton from "../menu/FilterButton";
import SectionHeader from "../menu/SectionHeader";
import MenuCard from "../menu/MenuCard";
import { menuItems, categories } from "../../data/menuData";
import MenuSkeleton from "../menu/MenuSkeleton";

// ✅ Tipe kategori berdasarkan data
type CategoryValue = typeof categories[number]["value"];

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState<CategoryValue>("all");
    const [visibleCount, setVisibleCount] = useState(8);
    const [initialLoading, setInitialLoading] = useState(true);
    const [loadingFilter, setLoadingFilter] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loadMoreSkeletonCount, setLoadMoreSkeletonCount] = useState(0);

    // ---- Loading awal halaman ----
    useEffect(() => {
        const timer = setTimeout(() => setInitialLoading(false), 150);
        return () => clearTimeout(timer);
    }, []);

    // ---- Ketika kategori dipilih ----
    const handleFilterChange = (categoryValue: CategoryValue) => {
        setActiveCategory(categoryValue);
        setVisibleCount(8);
        setLoadingFilter(true);

        setTimeout(() => {
            setLoadingFilter(false);
        }, 150);
    };

    // ---- Filter menu berdasarkan kategori ----
    const filteredMenuItems = menuItems.filter((item) =>
        activeCategory === "all" ? true : item.category === activeCategory
    );

    const visibleItems = filteredMenuItems.slice(0, visibleCount);

    // ---- Load more ----
    const handleLoadMore = () => {
        const newCount = 4;
        setLoadMoreSkeletonCount(newCount);
        setLoadingMore(true);

        setTimeout(() => {
            setVisibleCount((prev) => prev + newCount);
            setLoadingMore(false);
            setLoadMoreSkeletonCount(0);
        }, 150);
    };

    return (
        <section id="menu" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Menu Andalan Kami"
                    subtitle="Temukan berbagai varian kopi dan minuman spesial yang siap memanjakan lidah Anda."
                />

                {/* Filter kategori */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((category) => (
                        <FilterButton
                            key={category.value}
                            label={category.label}
                            value={category.value}
                            active={category.value === activeCategory}
                            onClick={handleFilterChange}
                        />
                    ))}
                </div>

                {/* Grid menu */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Skeleton awal */}
                    {(initialLoading || loadingFilter) &&
                        [...Array(visibleItems.length || 8)].map((_, i) => (
                            <MenuSkeleton key={`skeleton-init-${i}`} />
                        ))}

                    {/* Item menu */}
                    {!initialLoading &&
                        !loadingFilter &&
                        visibleItems.map((item, index) => (
                            <MenuCard
                                key={index}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                popular={item.popular}
                            />
                        ))}

                    {/* Skeleton ketika load more */}
                    {loadingMore &&
                        [...Array(loadMoreSkeletonCount)].map((_, i) => (
                            <MenuSkeleton key={`skeleton-loadmore-${i}`} />
                        ))}
                </div>

                {/* Tombol Muat Lebih Banyak */}
                {!initialLoading &&
                    !loadingFilter &&
                    !loadingMore &&
                    visibleCount < filteredMenuItems.length && (
                        <div className="text-center mt-12">
                            <button
                                onClick={handleLoadMore}
                                className="px-6 py-2 border-2 border-amber-700 text-amber-700 rounded-2xl hover:bg-amber-700 hover:text-white font-medium cursor-pointer"
                            >
                                Muat Lebih Banyak
                            </button>
                        </div>
                    )}

                {/* Tombol loading */}
                {loadingMore && (
                    <div className="text-center mt-12 flex justify-center">
                        <button
                            disabled
                            className="px-6 py-2 border-2 border-gray-400 text-gray-400 rounded-2xl font-medium cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            <span className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
                            Memuat...
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
