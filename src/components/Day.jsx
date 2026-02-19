import { MapPin, Clock } from "lucide-react";

export default function Day({ day, index }) {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Sticky Image Side */}
      <div className="lg:sticky lg:top-24 space-y-6">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl group">
          <img 
            src={day.images[0]} 
            alt={day.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-cape-gold font-mono text-sm tracking-[0.3em] uppercase mb-2 block">
              Day {index + 1}
            </span>
            <h2 className="text-4xl font-black tracking-tight leading-none">
              {day.title}
            </h2>
            <p className="text-zinc-400 mt-2 font-light tracking-wide italic">
              {day.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="space-y-16 pt-4">
        {day.places.map((place, i) => (
          <div key={i} className="group relative">
            <div className="flex items-start gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 text-cape-gold/60">
                  <Clock size={14} />
                  <span className="text-xs font-mono tracking-widest uppercase">{place.time}</span>
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-cape-gold transition-colors">
                  {place.name}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed font-light text-lg">
                  {place.description}
                </p>

                {/* Place Specific Image */}
                {place.image && (
                  <div className="mt-6 overflow-hidden rounded-2xl aspect-video">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}

                <div className="flex items-center gap-2 text-zinc-500 pt-2">
                  <MapPin size={14} />
                  <span className="text-xs tracking-wide">Cape Town, South Africa</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
