import { Leaf, Sprout, Play } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-24 px-6 lg:px-16">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT IMAGE */}
                <div className="relative">

                    <img
                        src="https://7oroofthemes.com/agritec/wp-content/uploads/elementor/thumbs/banner-video-1-rcg7wusoeu9p628wog95iwjkb7ofkd4vjufugls8u8.webp"
                        alt="farmer"
                        className="rounded-2xl w-full h-105 object-cover"
                    />

                    {/* Floating Card */}
                    <div className="absolute top-6 right-6 bg-white rounded-xl shadow-xl overflow-hidden">

                        <div className="px-6 py-4 flex items-center gap-3">

                            <Sprout className="text-green-600" size={20} />

                            <span className="font-semibold text-gray-700 leading-tight">
                                Agriculture <br /> & Foods
                            </span>

                        </div>

                        <div className="bg-yellow-400 flex justify-center items-center py-6 cursor-pointer">

                            <Play
                                className="text-green-900 fill-green-900"
                                size={28}
                            />

                        </div>

                    </div>

                    {/* Script Text */}
                    <h3 className="absolute bottom-6 left-10 text-yellow-400 text-5xl font-bold rotate-[-8deg]">

                        Quality Crops

                    </h3>

                </div>

                {/* RIGHT CONTENT */}
                <div className="space-y-8">

                    {/* Small Heading */}
                    <div className="flex items-center gap-3 text-green-600 font-semibold text-sm">

                        <Leaf size={18} />

                        Delivering sustainable and innovative agriculture solutions.

                    </div>

                    {/* Main Title */}
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">

                        Our commitment is to produce quality crops and empowering the
                        future of food production!

                    </h2>

                    {/* Paragraphs */}
                    <p className="text-gray-600 leading-relaxed">

                        We help farmers and consumers have the technologies they need
                        to protect the crops and ecosystems from pests and diseases
                        in an environmentally safe and sustainable way.

                    </p>

                    <p className="text-gray-600">

                        With 65 years of experience we utilize industry knowledge,
                        insights and innovation expertise to create solutions
                        for tomorrow.

                    </p>

                    {/* FEATURES */}
                    <div className="space-y-6 pt-4">

                        <div className="flex gap-4 border-t pt-6">

                            <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-lg">

                                <Sprout className="text-green-600" />

                            </div>

                            <div>

                                <h4 className="font-semibold text-gray-900">
                                    Always support farmers
                                </h4>

                                <p className="text-gray-600 text-sm">
                                    Farmers strengthen their soil health while increasing
                                    crop yields and profitability.
                                </p>

                            </div>

                        </div>

                        <div className="flex gap-4 border-t pt-6">

                            <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-lg">

                                <Sprout className="text-green-600" />

                            </div>

                            <div>

                                <h4 className="font-semibold text-gray-900">
                                    Power of regeneration
                                </h4>

                                <p className="text-gray-600 text-sm">
                                    Shifting agriculture from being carbon emitter to
                                    a powerful carbon sink.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-4 pt-6">

                        <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">

                            More About Us →

                        </button>

                        <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">

                            Contact Us

                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}