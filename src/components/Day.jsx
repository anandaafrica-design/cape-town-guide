import { MapPin, Clock } from "lucide-react";

export default function Day({ day, index }) {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Sticky Image Side */}
      <div className="lg:sticky lg:top-24 space-y-8">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-stone-200 group">
          <img 
            src={day.images[0]} 
            alt={day.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
          
          <div className="absolute bottom-10 left-10 right-10">
            <span className="text-amber-400 font-bold text-sm tracking-[0.4em] uppercase mb-3 block">
              Day {index + 1}
            </span>
            <h2 className="text-5xl font-black tracking-tighter leading-none text-white">
              {day.title}
            </h2>
            <p className="text-stone-200 mt-3 font-medium tracking-wide italic text-lg">
              {day.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="space-y-20 pt-8">
        {day.places.map((place, i) => (
          <div key={i} className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 text-amber-500">
                  <Clock size={16} />
                  <span className="text-sm font-bold tracking-[0.2em] uppercase">{place.time}</span>
                </div>
                
                <h3 className="text-3xl font-black tracking-tight text-stone-900 group-hover:text-amber-500 transition-colors duration-300">
                  {place.name}
                </h3>
                
                <p className="text-stone-600 leading-relaxed font-medium text-xl">
                  {place.description}
                </p>

                {/* Place Specific Image */}
                {place.image && (
                  <div className="mt-8 overflow-hidden rounded-3xl aspect-video shadow-xl shadow-stone-100">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                )}

                <div className="flex items-center gap-3 text-stone-400 pt-4">
                  <MapPin size={16} />
                  <span className="text-sm font-medium tracking-wide">Cape Town, South Africa</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
