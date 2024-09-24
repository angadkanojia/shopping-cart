"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Banner1 from "/public/images/homebanner1.jpg";
import Banner2 from "/public/images/homebanner2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <section className="relative h-full w-full">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          <Image
            className="object-cover"
            width={1920}
            height={1080}
            src={Banner1}
            alt="banner"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-5xl font-bold">
              Welcome to Our Store
            </h2>

            <Link href="">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Shop now
              </button>
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <Image
            className="object-cover"
            width={1920}
            height={1080}
            src={Banner2}
            alt="banner"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-5xl font-bold">
              Best Deals of the Year
            </h2>
            <Link href="">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
