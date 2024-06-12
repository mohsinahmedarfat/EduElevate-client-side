/* eslint-disable react/no-unescaped-entities */
import slider1 from "../../assets/images/slider-1.jpg";
import slider2 from "../../assets/images/slider-2.jpg";
import slider3 from "../../assets/images/slider-3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative bg-black rounded-2xl">
            <img
              className="w-full h-[500px] md:h-[400px] lg:h-[600px] rounded-2xl opacity-60"
              src={slider1}
              alt=""
            />
            <div className="text-center space-y-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Empower Your Learning Journey with Expert Tutors
              </h1>
              <p className="text-white">
                Unlock your potential with our comprehensive online courses.
                Connect with experienced tutors, engage in interactive lessons,
                and manage your classes effortlessly. Transform your skills and
                achieve your educational goals with ease. Join us today and
                start your path to success!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-black rounded-2xl">
            <img
              className="w-full h-[500px] md:h-[400px] lg:h-[600px] rounded-2xl opacity-60"
              src={slider2}
              alt=""
            />
            <div className="text-center space-y-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Revolutionize Your Education Experience
              </h1>
              <p className="text-white">
                Discover the future of learning with our state-of-the-art online
                platform. Whether you're a student seeking knowledge or a tutor
                sharing expertise, we provide the tools for a seamless and
                enriching educational journey. Enhance your skills, track your
                progress, and achieve your dreams with us!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-black rounded-2xl">
            <img
              className="w-full h-[500px] md:h-[400px] lg:h-[600px] rounded-2xl opacity-60"
              src={slider3}
              alt=""
            />
            <div className="text-center space-y-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Master New Skills Anytime, Anywhere
              </h1>
              <p className="text-white">
                Experience the convenience of online learning tailored to your
                schedule. Our diverse range of courses, led by industry experts,
                ensures you gain valuable knowledge and practical skills. Join
                our community of learners and take control of your education
                from the comfort of your home!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
