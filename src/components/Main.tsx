import img from "../assets/banner.png";

export default function Main() {
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
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center order-2">
            <h1 className="title-font lg:text-4xl mt-3 text-3xl mb-3 font-medium text-gray-900 md:order">
              Simplify Your Health Journey
            </h1>
            <p className="mb-7 leading-relaxed">
              Effortlessly book doctor appointments and manage hospital operations with CuraNet. Streamline your healthcare experience today!</p>
            <div className="flex items-center gap-x-3 sm:text-sm relative">
              <a
                href="/"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-blue-600 duration-150 hover:bg-blue-700 active:bg-gray-900 rounded-full md:inline-flex"
              >
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="/"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-900 font-medium bg-blue-100 duration-150 hover:bg-blue-200 rounded-full md:inline-flex"
              >
                Join Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[90%] md:order-3 h-full md:h-full md:overflow-visible overflow-hidden">
            <img alt="hero" src={img} className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
