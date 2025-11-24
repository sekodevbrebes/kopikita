type TestimonialCardProps = {
  imageUrl: string;
  name: string;
  rating: number; 
  text: string;
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
};

export default function TestimonialCard({ imageUrl, name, rating, text }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-amber-200 rounded-full overflow-hidden mr-4">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-amber-800">{name}</h4>
          {/* Gunakan komponen StarRating di sini */}
          <StarRating rating={rating} />
        </div>
      </div>
      <p className="text-gray-600">"{text}"</p>
    </div>
  );
}