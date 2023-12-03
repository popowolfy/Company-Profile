import Image from "next/legacy/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const router = useRouter();
  React.useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>Technology Innovation Texar</title>
      </Head>
      <div className="overflow-hidden container mx-auto relative">
        <div
          className="fixed top-0 left-0 right-0 w-screen flex justify-between items-center p-4 z-10 bg-white shadow-md"
          id="home"
        >
          <div>
            <p className="text-stone-800 font-black text-lg font-['Poppins'] cursor-pointer">
              Technology Innovation Texar
            </p>
          </div>
          <ul className="hidden lg:flex">
            <li>
              <a
                className="px-4 text-stone-700 font-bold text-lg cursor-pointer font-['Inter'] hover:text-emerald-500 transition-colors"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="px-4 text-stone-700 font-bold text-lg cursor-pointer font-['Inter'] hover:text-emerald-500 transition-colors"
                onClick={() => {
                  const project = document.getElementById("project");
                  project.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Our Project&apos;s
              </a>
            </li>
            <li>
              <a
                className="px-4 text-stone-700 font-bold text-lg cursor-pointer font-['Inter'] hover:text-emerald-500 transition-colors"
                onClick={() => {
                  const join = document.getElementById("join");
                  join.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Join Us!
              </a>
            </li>
          </ul>
        </div>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
          className="mt-[60px] w-full rounded-xl"
          style={{ height: "calc(100vh - 88px)" }}
        >
          <SwiperSlide className="h-full w-full border-2 rounded-xl">
            <Image
              src={"/tixar.png"}
              alt="Your Image"
              quality={100}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              priority={true}
            />
          </SwiperSlide>
          <SwiperSlide className="h-full w-full border-2 rounded-xl">
            <Image
              src={"/slider1.jpg"}
              alt="Your Image"
              quality={100}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full w-full border-2 rounded-xl">
            <Image
              src={"/texaselearning.png"}
              alt="Your Image"
              quality={100}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full w-full border-2 rounded-xl">
            <Image
              src={"/texality.png"}
              alt="Your Image"
              quality={100}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </SwiperSlide>
        </Swiper>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="my-4 flex w-full justify-center items-center border-2 rounded-xl relative overflow-hidden shadow-inner"
        >
          <svg
            className="absolute max-w-xs -bottom-36 -right-36"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#10B981"
              d="M46.1,-78.2C60.3,-71.7,72.8,-60.5,80.9,-46.6C89,-32.8,92.8,-16.4,91.9,-0.5C90.9,15.4,85.4,30.7,77.2,44.4C69,58.1,58.2,70.1,44.9,77.8C31.6,85.5,15.8,88.9,0.1,88.6C-15.5,88.4,-31,84.5,-44,76.6C-56.9,68.7,-67.3,56.8,-74.3,43.4C-81.2,29.9,-84.7,15,-86,-0.8C-87.3,-16.5,-86.4,-32.9,-79.1,-45.7C-71.8,-58.5,-58.1,-67.7,-43.8,-74.2C-29.6,-80.7,-14.8,-84.6,0.6,-85.6C16,-86.6,31.9,-84.8,46.1,-78.2Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="absolute max-w-xs -top-36 -left-36"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#10B981"
              d="M46.1,-78.2C60.3,-71.7,72.8,-60.5,80.9,-46.6C89,-32.8,92.8,-16.4,91.9,-0.5C90.9,15.4,85.4,30.7,77.2,44.4C69,58.1,58.2,70.1,44.9,77.8C31.6,85.5,15.8,88.9,0.1,88.6C-15.5,88.4,-31,84.5,-44,76.6C-56.9,68.7,-67.3,56.8,-74.3,43.4C-81.2,29.9,-84.7,15,-86,-0.8C-87.3,-16.5,-86.4,-32.9,-79.1,-45.7C-71.8,-58.5,-58.1,-67.7,-43.8,-74.2C-29.6,-80.7,-14.8,-84.6,0.6,-85.6C16,-86.6,31.9,-84.8,46.1,-78.2Z"
              transform="translate(100 100)"
            />
          </svg>
          <video
            autoPlay
            loop
            controls
            muted
            style={{
              height: "calc(100vh - 88px)",
              borderRadius: "12px",
              zIndex: "1",
            }}
          >
            <source src="/tixar.mp4" type="video/mp4" />
          </video>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className="my-4">
          <div
            className="w-full bg-slate-200 rounded-xl border-2 shadow-inner"
            id="project"
          >
            <p className="text-center mt-8 mb-4 font-['Inter'] font-bold text-stone-800 text-xl">
              Our Project&apos;s
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 mt-4 mb-8 overflow-hidden">
              <div className="flex justify-center items-center">
                <div
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="rounded-xl border-2 shadow-md bg-white p-4 overflow-hidden"
                >
                  <Image
                    src={"/slider1.jpg"}
                    alt="Your Image"
                    quality={100}
                    height={300}
                    width={600}
                    className="rounded-xl hover:scale-110 transition-all cursor-pointer"
                    onClick={() => {
                      router.push("https://gemar.texaslearning.org");
                    }}
                  />
                  <hr className="my-1" />
                  <p className="font-['Inter'] font-bold text-stone-800 text-center">
                    The Pandemic
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="rounded-xl border-2 shadow-md bg-white p-4 overflow-hidden"
                >
                  <Image
                    src={"/texaselearning.png"}
                    alt="Your Image"
                    quality={100}
                    height={300}
                    width={600}
                    className="rounded-xl hover:scale-110 transition-all cursor-pointer"
                    onClick={() => {
                      router.push("https://texaslearning.org");
                    }}
                  />
                  <hr className="my-1" />
                  <p className="font-['Inter'] font-bold text-stone-800 text-center">
                    Texar Learning
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div
                  data-aos="fade-up"
                  data-aos-delay="250"
                  className="rounded-xl border-2 shadow-md bg-white p-4 overflow-hidden"
                >
                  <Image
                    src={"/texality.png"}
                    alt="Your Image"
                    quality={100}
                    height={300}
                    width={600}
                    className="rounded-xl hover:scale-110 transition-all cursor-pointer"
                    onClick={() => {
                      router.push("https://texality.texaslearning.org");
                    }}
                  />
                  <hr className="my-1" />
                  <p className="font-['Inter'] font-bold text-stone-800 text-center">
                    Texality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 mb-9" id="join">
          <div className="group">
            <button
              className="py-2 px-8 bg-emerald-400 hover:bg-emerald-500 rounded-full border-2 font-['Inter'] text-lg text-stone-800 font-bold group-hover:-translate-y-1 transition-all"
              onClick={() => {
                router.push("https://bit.ly/DaftarTixar");
              }}
            >
              Join Us!
            </button>
          </div>
        </div>
        <p className="fixed bottom-0 left-0 right-0 z-10 p-1 w-screen font-['Inter'] font-bold text-stone-700 text-center bg-white">
          &copy; 2023 Tixar -{" "}
          <a
            className="text-stone-800 hover:underline cursor-pointer"
            href="https://instagram.com/rizkymaulana.__08"
            target="_blank"
          >
            Rizky Maulana
          </a>
          .
        </p>
      </div>
    </>
  );
}
