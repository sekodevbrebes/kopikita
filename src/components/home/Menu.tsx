"use client";

import { useState } from "react";
import FilterButton from "../menu/FilterButton";
import SectionHeader from "../menu/SectionHeader";
import MenuCard from "../menu/MenuCard";
import { menuItems, categories } from "../../data/menuData";
import MenuSkeleton from "../menu/MenuSkeleton";


export default function Menu() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [visibleCount, setVisibleCount] = useState(8);
    const [loading, setLoading] = useState(false);

    const handleFilterChange = (categoryValue) => {
        setActiveCategory(categoryValue);
        setVisibleCount(8);
    };

    const filteredMenuItems = menuItems.filter(item => {
        if (activeCategory === 'all') {
            return true;
        }
        return item.category === activeCategory;
    });

    const visibleItems = filteredMenuItems.slice(0, visibleCount);
    const handleLoadMore = () => {
        setLoading(true);

        setTimeout(() => {
            setVisibleCount((prev) => prev + 4);
            setLoading(false);
        }, 1200);
    };

    return (
        <section id="menu" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Menu Andalan Kami"
                    subtitle="Temukan berbagai varian kopi dan minuman spesial yang siap memanjakan lidah Anda."
                />

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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {visibleItems.map((item, index) => (
                        <MenuCard
                            key={index}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                            popular={item.popular}
                        />
                    ))}

                    {/*  Skeleton  */}
                    {loading &&
                        [...Array(4)].map((_, i) => <MenuSkeleton key={`skeleton-${i}`} />)}
                </div>
                {/* Tombol Load More hanya muncul jika masih ada item tersisa */}
                {!loading && visibleCount < filteredMenuItems.length && (
                    <div className="text-center mt-12">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-2 border-2 border-amber-700 text-amber-700 rounded-2xl hover:bg-amber-700 hover:text-white font-medium cursor-pointer"
                        >
                            Muat Lebih Banyak
                        </button>
                    </div>
                )}

                {loading && (
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
    )
}