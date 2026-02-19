import { MapPin, Clock, ExternalLink, Camera } from 'lucide-react';

export default function Day({ day }) {
  return (
    <section className="relative w-full h-full overflow-hidden bg-zinc-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={day.images[0]} 
          alt={day.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12 max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-cape-gold mb-2">
            <Camera size={20} />
            <span className="uppercase tracking-widest text-sm font-bold">Cape Town Experience</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-2 leading-tight">
            {day.title}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 font-light italic">
            {day.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar">
          {day.places.map((p, i) => (
            <div 
              key={i} 
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/20 transition-all group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cape-gold transition-colors">
                  {p.name}
                </h3>
                {p.time && (
                  <span className="flex items-center gap-1 text-xs font-medium bg-cape-blue/40 px-2 py-1 rounded-full text-blue-200">
                    <Clock size={12} />
                    {p.time}
                  </span>
                )}
              </div>
              
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                {p.description}
              </p>

              <a
                href={`https://www.google.com/maps?q=${p.lat},${p.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cape-gold hover:text-white transition-colors"
              >
                <MapPin size={14} />
                View on Map
                <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
        
        <footer className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-zinc-500 text-xs uppercase tracking-widest">
          <span>Swipe for next day</span>
          <div className="flex gap-1">
            {day.images.map((_, idx) => (
              <div key={idx} className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-cape-gold' : 'bg-zinc-700'}`} />
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}
