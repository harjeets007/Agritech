import React from 'react'
import Header from '../../Components/Header'
import MainHeader from '../../Components/MainHeader'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Mail, MapPin, Star, Play, Leaf, Sprout, Zap } from "lucide-react";
import PreviewHeader from '../../Components/PreviewHeader';



const Home = () => {
    const slides = [
        {
            image:
                "https://7oroofthemes.com/agritec/wp-content/uploads/slider-1.webp",
            title: "Shaping A Future For Eco Farming & New Agriculture!",
            desc: "Our Agriculture businesses deliver agronomic advice, services, and inputs to livestock, fruit, and vegetables."
        },
        {
            image:
                "https://7oroofthemes.com/agritec/wp-content/uploads/banner-5-scaled.jpg",
            title: "Leading Provider Of Seeds & Plants For All Farmers.",
            desc: "Our Agriculture businesses deliver agronomic advice, services, and inputs to livestock, fruit, and vegetables."
        }
    ];
    return (
        <>
            {/* PreviewHeader  */}
            <PreviewHeader />

            {/* TopHeader  */}
            <Header />

            {/* MainHeader */}
            <MainHeader />

            <div className="relative w-full h-screen">

                {/* Swiper */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-screen w-full">

                                {/* Background Image */}
                                <img
                                    src={slide.image}
                                    alt="slide"
                                    className="absolute w-full h-full object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40"></div>

                                {/* Content */}
                                <div className="relative z-10 flex items-center h-full">
                                    <div className="max-w-6xl mx-auto px-6 text-white">

                                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                                            {slide.title}
                                        </h1>

                                        <p className="mt-6 max-w-xl text-lg">
                                            {slide.desc}
                                        </p>

                                        <div className="mt-8 flex gap-4">
                                            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg">
                                                Explore Our Services
                                            </button>

                                            <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200">
                                                About Us
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


                {/* FLOATING CARD */}
                <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:block z-20">
                    <div className="bg-green-700 text-white rounded-2xl p-10 w-[380px] relative shadow-xl">

                        <img
                            src="https://7oroofthemes.com/agritec/wp-content/uploads/elementor/thumbs/banner-fancy-1-rcg7wushhqrrmxkj4fsab0waayzuugzwcuymc3vvd0.png"
                            alt=""
                            className="absolute bottom-4 right-4 w-24"
                        />

                        <div className="absolute -top-16 left-10 bg-white p-2 rounded-full w-[140px] h-[140px] flex items-center justify-center shadow-md">
                            <img
                                src="https://7oroofthemes.com/agritec/wp-content/uploads/elementor/thumbs/Badge-rcg7wushhqrzeu5rdchf5bpoumt1xicjqs8zwmrk74.png"
                                alt="badge"
                                className="w-[120px] h-[120px] rounded-full"
                            />
                        </div>

                        <h3 className="text-xl font-semibold mt-16">
                            Delivering Sustainable Agriculture Solutions!
                        </h3>

                        <p className="text-sm text-green-100 mt-4">
                            Techniques that prioritize health of our land and customers within
                            the regional agricultural market.
                        </p>

                        <ul className="mt-6 space-y-3 text-sm">
                            <li className="flex items-center gap-2">✔ 100% Organic Products</li>
                            <li className="flex items-center gap-2">✔ The Best Ingredients</li>
                            <li className="flex items-center gap-2">✔ Cow Meat & Milk</li>
                        </ul>

                    </div>
                </div>

            </div>


            <div className="border-b border-gray-200 py-3">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Quick Contact */}
                    <div className="flex items-center gap-4">
                        <div className="w-11 h-11 flex items-center justify-center rounded-full bg-green-100">
                            <Mail className="text-green-600" size={20} />
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-800">Quick Contact</h4>
                            <a
                                href="mailto:Agritec@7oroof.com"
                                className="text-green-600 hover:underline block"
                            >
                                Agritec@7oroof.com
                            </a>

                            <a
                                href="tel:+201161145741"
                                className="text-gray-500 text-sm hover:text-green-600"
                            >
                                +2 011 6114 5741
                            </a>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-4">
                        <div className="w-11 h-11 flex items-center justify-center rounded-full bg-green-100">
                            <MapPin className="text-green-600" size={20} />
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-800">Our Location</h4>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                className="text-gray-500 hover:text-green-600 text-sm"
                            >
                                2307 Brooklyn, New York 11226
                            </a>
                        </div>
                    </div>

                    {/* Rating + Avatars */}
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-3">
                            <img
                                src="https://7oroofthemes.com/agritec/wp-content/uploads/Sienna-Hewitt-Sr-80x80.webp"
                                className="w-8 h-8 rounded-full border-2 border-white"
                            />
                            <img
                                src="https://7oroofthemes.com/agritec/wp-content/uploads/avatar-4-80x80.webp"
                                className="w-8 h-8 rounded-full border-2 border-white"
                            />
                            <img
                                src="https://7oroofthemes.com/agritec/wp-content/uploads/avatar-5-80x80.webp"
                                className="w-8 h-8 rounded-full border-2 border-white"
                            />
                        </div>

                        <div className="flex items-center gap-1 text-sm text-gray-700">
                            <Star size={16} className="text-yellow-500" />
                            Rated 4.9 stars
                        </div>
                    </div>

                </div>
            </div>


            <section className="py-24 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}
                    <div className="relative">

                        <img
                            src="https://7oroofthemes.com/agritec/wp-content/uploads/elementor/thumbs/banner-video-1-rcg7wusoeu9p628wog95iwjkb7ofkd4vjufugls8u8.webp"
                            alt="farmer"
                            className="rounded-2xl w-full h-[420px] object-cover"
                        />

                        {/* play card */}
                        <div className="absolute top-6 right-6 bg-white rounded-xl shadow-lg flex flex-col items-center overflow-hidden">

                            <div className="px-6 py-4 flex items-center gap-3">
                                <Sprout className="text-green-600" />
                                <span className="font-semibold text-gray-700">
                                    Agriculture <br /> & Foods
                                </span>
                            </div>

                            <div className="bg-yellow-400 w-full flex justify-center py-6 cursor-pointer">
                                <Play className="text-green-800 fill-green-800" size={28} />
                            </div>

                        </div>

                        {/* bottom text */}
                        <h3 className="absolute bottom-6 left-10 text-yellow-400 text-5xl font-bold rotate-[-8deg]">
                            Quality Crops
                        </h3>

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="space-y-8">

                        {/* small heading */}
                        <div className="flex items-center gap-3 text-green-600 font-semibold">
                            <Leaf size={18} />
                            <span>
                                Delivering sustainable and innovative agriculture solutions.
                            </span>
                        </div>

                        {/* main heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                            Our commitment is to produce quality crops and empowering the
                            future of food production!
                        </h2>

                        {/* paragraph */}
                        <p className="text-gray-600 leading-relaxed">
                            We help farmers and consumers have the technologies they need to
                            protect the crops and the ecosystems from the threat of pests,
                            weeds diseases in an environmentally sound, safe, and sustainable
                            way.
                        </p>

                        <p className="text-gray-600">
                            With 65 years of experience, we utilize deep industry knowledge,
                            insights and innovation expertise to create solutions for tomorrow.
                        </p>

                        {/* FEATURES */}
                        <div className="space-y-6 pt-6">

                            <div className="flex gap-4 items-start border-t pt-6">
                                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-lg">
                                    <Sprout className="text-green-600" />
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-800">
                                        Always support farmers
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        Farmers strengthen their soil health while increasing crop
                                        yields & profitability.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start border-t pt-6">
                                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-lg">
                                    <Sprout className="text-green-600" />
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-800">
                                        Power of regeneration
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        Shifting agriculture from being carbon emitter to a powerful
                                        carbon sink.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* buttons */}
                        <div className="flex gap-4 pt-6">
                            <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">
                                More About Us
                            </button>

                            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
                                Contact Us
                            </button>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Home