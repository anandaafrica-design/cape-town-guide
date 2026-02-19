import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { days } from "./data/itinerary.js";
import Day from "./components/Day.jsx";
import "./index.css";

export default function App() {
  return (
    <main className="w-full h-screen bg-zinc-950 overflow-hidden">
      <Swiper 
        modules={[Pagination, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        spaceBetween={0} 
        slidesPerView={1}
        className="h-full"
      >
        {days.map((day, i) => (
          <SwiperSlide key={i}>
            <Day day={day} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
