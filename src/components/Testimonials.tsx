import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { useGoogleReviews } from "../hooks/useGoogleReviews";
import { fallbackTestimonials } from "../data/fallbackTestimonials";

function shuffleArray<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

function truncateText(text: string, limit = 180) {
  if (text.length <= limit) return text;
  return text.slice(0, limit).trim() + "...";
}

export default function Testimonials() {
  const { reviews, loading } = useGoogleReviews(
    "ChIJ11NTrj-PpJIREvfNsYpaqkU",
    //"AIzaSyA6myHzS10YXdcazAFalmXvDkrYCp5cLc8",
  );

  const rawData = reviews.length ? reviews : fallbackTestimonials;

  const data = shuffleArray(
    rawData.filter((item) => (item.text ?? "").trim().length > 0),
  )
    .slice(0, 5)
    .map((item) => ({
      ...item,
      text: truncateText(item.text, 180),
    }));

  return (
    <section className="py-24 bg-[#512733] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Depoimentos</h2>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div
              role="status"
              className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"
            />
            <p className="mt-4 text-white">Carregando avaliações...</p>
          </div>
        ) : (
          <div className="w-full">
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={3}
                spaceBetween={24}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
                pagination={{ clickable: true, el: ".custom-pagination" }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="relative"
              >
                {data.map((item, i) => (
                  <SwiperSlide key={i} className="h-full flex">
                    <div className="bg-white text-gray-800 p-6 rounded-xl shadow flex flex-col justify-between w-full h-64">
                      <p className="italic mb-4">“{item.text}”</p>

                      <div className="flex items-center mt-2">
                        {item.profile_photo_url ? (
                          <img
                            src={item.profile_photo_url}
                            alt={`${item.author_name} photo`}
                            className="w-12 h-12 rounded-full object-cover mr-4 flex-shrink-0"
                            width={"100%"}
                            height={"100%"}
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gray-200 text-gray-700 font-semibold mr-4 flex items-center justify-center">
                            {item.author_name
                              ? item.author_name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .slice(0, 2)
                                  .join("")
                                  .toUpperCase()
                              : "?"}
                          </div>
                        )}

                        <div className="flex-1">
                          <p className="font-semibold">{item.author_name}</p>

                          <div className="text-yellow-500 mt-2">
                            {Array.from({
                              length: Math.round(item.rating || 0),
                            }).map((_, idx) => (
                              <span key={idx}>⭐</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

                {/* Custom arrows - large screens (hidden on mobile and tablet) */}
                <button
                aria-label="Anterior"
                className="hidden lg:flex custom-prev absolute -left-12 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                  />
                </svg>
                </button>

                <button
                aria-label="Próximo"
                className="hidden lg:flex custom-next absolute -right-12 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                  />
                </svg>
                </button>
            </div>

            {/* Pagination (bullets) positioned below cards */}
            <div className="custom-pagination mt-6 flex justify-center gap-2" />

            {/* Small scoped styles for bullets and buttons */}
            <style>{`
              .custom-pagination .swiper-pagination-bullet {
                width: 10px;
                height: 10px;
                background: rgba(255,255,255,0.35);
                opacity: 1;
                border-radius: 9999px;
                margin: 0 6px;
              }
              .custom-pagination .swiper-pagination-bullet-active {
                background: #FBBF24; /* amber-400 */
                transform: scale(1.15);
              }
              .custom-prev, .custom-next {
                backdrop-filter: blur(6px);
                border: 1px solid rgba(255,255,255,0.12);
              }
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
}
