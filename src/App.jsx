import { days } from "./data/itinerary.js";
import Day from "./components/Day.jsx";
import "./index.css";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white selection:bg-cape-gold selection:text-zinc-900">
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1600" 
            alt="Cape Town"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 drop-shadow-2xl">
            CAPE TOWN <span className="text-cape-gold">GUIDE</span>
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-widest uppercase text-zinc-300 max-w-2xl mx-auto">
            A Curated Menu of Experiences
          </p>
          <div className="mt-12 animate-bounce">
            <div className="w-px h-16 bg-gradient-to-b from-cape-gold to-transparent mx-auto" />
          </div>
        </div>
      </header>

      {/* Itinerary Sections */}
      <div className="max-w-6xl mx-auto px-6 pb-32 space-y-40">
        {days.map((day, i) => (
          <Day key={i} day={day} index={i} />
        ))}
      </div>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center text-zinc-600 text-sm uppercase tracking-widest">
        <p>© 2026 Ananda Africa Design • Built for Beautiful Things</p>
      </footer>
    </div>
  );
}
