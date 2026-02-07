import img from "../assets/img.png";

function Home() {
    return (
        <section className="bg-[#fbf7f1] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-7 py-16 sm:py-24">

                <div className="flex flex-col lg:flex-row items-center lg:items-end lg:gap-40">

                    {/* Image */}
                    <div className="flex-shrink-0 -translate-x-0 -translate-y-0 lg:-translate-x-9 lg:-translate-y-20 flex justify-center w-full lg:w-auto">
                        <div className="h-[270px] w-[180px] sm:h-[350px] sm:w-[180px] lg:h-[890px] lg:w-[580px] rounded-t-full overflow-hidden">
                            <img
                                src={img}
                                alt="Image"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="text-center lg:text-left lg:pb-[410px] max-w-xl lg:-translate-y-8">
                        <h1 className="text-[55px] sm:text-[52px] lg:text-[80px] leading-tight font-semibold text-[#2f3b1f] text-center italic">
                            Live your life <br /> in full bloom
                        </h1>

                        <p className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold text-[#2f3b1f] text-center mx-auto max-w-md font-semibold/40">
                            Therapy for Adults in Minneapolis, MN.
                        </p>


                        <div className="flex justify-center">
                            <button
                                className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 font-semibold text-sm border border-[#2f3b1f] uppercase text-[#2f3b1f] transition-all duration-1000 ease-in-out hover:bg-[#2f3b1f] hover:text-white" >
                                Connect with me →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;