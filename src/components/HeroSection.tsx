import img from "@/assets/banner.png";
import { IoIosArrowForward } from "react-icons/io";

export default function HeroSection() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(102, 132, 252, 0) 20.79%, rgba(72, 121, 249, 0.26) 40.92%, rgba(102, 171, 238, 0) 70.35%)",
        }}
      ></div>

      <section className="text-gray-600 body-font w-full">
        <div className="container mx-auto flex px-5 md:py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col  mb-16 md:mb-0 items-center text-center order-2">
            <h1 className="title-font md:text-4xl xl:text-5xl mt-3 text-3xl mb-3 font-medium text-blue-600 md:order">
              Simplify Your Health Journey
            </h1>
            <p className="mb-7 leading-relaxed lg:mt-7">
              Effortlessly book doctor appointments and manage hospital operations with CuraNet. Streamline your healthcare experience today!</p>
            <div className="flex items-center gap-x-4 sm:text-sm relative">
              <a
                href="/"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-blue-600 duration-150 hover:bg-blue-700 active:bg-gray-900 rounded-full md:inline-flex"
              >
                Get started
                <IoIosArrowForward/>
              </a>
              <a
                href="/"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-900 font-medium bg-white duration-150 hover:bg-blue-200 rounded-full md:inline-flex"
              >
                Join Us               
                 <IoIosArrowForward/>

              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[90%] md:order-3 h-full md:h-full md:overflow-visible overflow-hidden">
            <img alt="hero" src={img.src} className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}