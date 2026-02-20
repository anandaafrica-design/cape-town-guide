import { MapPin, Clock, ExternalLink } from "lucide-react";

export default function Day({ day, index }) {
  const renderDescription = (text) => {
    if (!text) return null;
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        return (
          <a 
            key={i} 
            href={match[2]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 font-bold underline decoration-amber-200 underline-offset-4 transition-colors"
          >
            {match[1]}
            <ExternalLink size={14} />
          </a>
        );
      }
      return part;
    });
  };

  return (
    <section className="relative border-t border-stone-200 pt-12 first:border-t-0 first:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 items-center">
        <div className="lg:col-span-2">
          <span className="text-amber-500 font-bold text-xs tracking-[0.4em] uppercase mb-2 block">
            Section {index + 1}
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none text-stone-900 mb-2">
            {day.title}
          </h2>
          <p className="text-stone-500 font-medium tracking-wide italic text-lg">
            {day.subtitle}
          </p>
        </div>
        {day.images && day.images.length > 0 && (
          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-3xl shadow-xl shadow-stone-200">
            <img 
              src={day.images[0]} 
              alt={day.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
        {day.places.map((place, i) => (
          <div key={i} className="group relative flex flex-col h-full">
            <div className="flex items-center gap-3 text-amber-500 mb-3">
              <Clock size={14} />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{place.time}</span>
            </div>
            <h3 className="text-xl font-black tracking-tight text-stone-900 group-hover:text-amber-500 transition-colors duration-300 mb-3">
              {place.name}
            </h3>
            <p className="text-stone-600 leading-relaxed font-medium text-base flex-grow">
              {renderDescription(place.description)}
            </p>
            <div className="flex items-center gap-2 text-stone-300 mt-4 pt-4 border-t border-stone-100">
              <MapPin size={12} />
              <span className="text-[10px] font-medium tracking-wide uppercase">Cape Town</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
