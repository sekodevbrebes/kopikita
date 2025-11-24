import SectionHeader from "../menu/SectionHeader";
import { testimonials } from '../../data/testimonialData';
import TestimonialCard from "../ui/TestimonialCard";


export default function Testimonial() {
    return (
        <section id="testimoni" className="py-16 bg-amber-50">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Apa Kata Pelanggan Kami?"
                    subtitle="Dengarkan pengalaman langsung dari para pecinta kopi yang telah mencicipi racikan kami."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            imageUrl={testimonial.imageUrl}
                            name={testimonial.name}
                            rating={testimonial.rating}
                            text={testimonial.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
