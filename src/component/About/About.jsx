import React from "react";
import aboutImg from "../../assets/avatar.png";

const About = () => {
    return (
        <section className="w-full min-h-screen bg-gradient-to-bl from-[rgba(17,16,16,0.582)] to-[rgba(12,8,24,0.904)] relative text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center py-2">
                    <div className="md:w-7/12 flex flex-col justify-center pt-8 pb-12">
                        <h1 className="text-2xl md:text-4xl pb-5">
                            Saber Quien{" "}
                            <strong className="text-[#4169e1]">SOY</strong>
                        </h1>
                    </div>
                    <div className="md:w-5/12 pt-12 md:pt-32 pb-12 flex justify-center items-center">
                        <img
                            src={aboutImg}
                            alt="about"
                            className="w-3/4 h-auto"
                        />
                    </div>
                </div>

                <h1 className="text-xl md:text-3xl font-medium text-white py-4">
                    Habilidades{" "}
                    <strong className="text-[#4169e1]">Profesionales</strong>
                </h1>

                <h1 className="text-xl md:text-3xl font-medium text-white py-4">
                    <strong className="text-[#4169e1]">Herramientas</strong> que
                    uso
                </h1>
            </div>
        </section>
    );
};

export default About;
