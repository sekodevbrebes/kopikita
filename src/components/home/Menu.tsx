"use client";

import { useState } from "react";
import FilterButton from "../menu/FilterButton";
import SectionHeader from "../menu/SectionHeader";
import MenuCard from "../menu/MenuCard";
import { menuItems, categories } from "../../data/menuData";


export default function Menu() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [visibleCount, setVisibleCount] = useState(8);

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
        setVisibleCount((prev) => prev + 4);
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
                </div>
                {/* Tombol Load More hanya muncul jika masih ada item tersisa */}
                {visibleCount < filteredMenuItems.length && (
                    <div className="text-center mt-12">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-2 border-2 border-amber-700 text-amber-700 rounded-2xl hover:bg-amber-700 hover:text-white font-medium cursor-pointer"
                        >
                            Muat Lebih Banyak
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}