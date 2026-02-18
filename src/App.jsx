import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { days } from "./data/itinerary.js";
import Day from "./components/Day.jsx";
import "./index.css";

export default function App() {
  return (
    <main>
      <h1>Cape Town Guide</h1>

      <Swiper spaceBetween={40} slidesPerView={1}>
        {days.map((day,i)=>(
          <SwiperSlide key={i}>
            <Day day={day} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
