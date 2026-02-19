import { MapPin, Clock, ExternalLink, Camera } from 'lucide-react';

export default function Day({ day, index }) {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Sticky Image Section for Desktop */}
      <div className="lg:col-span-5 lg:sticky lg:top-12">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
          <img 
            src={day.images[0]} 
            alt={day.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-cape-gold font-black text-6xl opacity-20">0{index + 1}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:col-span-7 pt-4">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-cape-gold mb-4">
            <Camera size={20} />
            <span className="uppercase tracking-[0.3em] text-xs font-bold">Experience Day 0{index + 1}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight">
            {day.title}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 font-light italic border-l-2 border-cape-gold pl-6">
            {day.subtitle}
          </p>
        </header>

        <div className="space-y-8">
          {day.places.map((p, i) => (
            <div 
              key={i} 
              className="relative bg-white/5 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-white/10 transition-all group"
            >
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-cape-gold transition-colors">
                  {p.name}
                </h3>
                {p.time && (
                  <span className="flex items-center gap-2 text-xs font-bold bg-cape-blue/30 px-3 py-1.5 rounded-full text-blue-300 uppercase tracking-wider">
                    <Clock size={14} />
                    {p.time}
                  </span>
                )}
              </div>
              
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                {p.description}
              </p>

              <a
                href={`https://www.google.com/maps?q=${p.lat},${p.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-cape-gold hover:text-white transition-all group/link"
              >
                <MapPin size={18} className="group-hover/link:scale-110 transition-transform" />
                <span>View on Map</span>
                <ExternalLink size={14} className="opacity-50" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
