import React from "react";
import homeLogo from "../../assets/home-logo.svg";
import AboutMe from "./AboutMe";
import SocialLinks from "./SocialLinks";
import TerminalTyping from "./TerminalTyping";

const Home = () => {
    return (
        <section>
            <div className="relative pb-7.5 pt-7.5" id="home">
                <div className="pt-36 pb-8 container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-center items-center max-w-screen-2xl mx-auto">
                        <div className="pt-[80px] md:w-1/2">
                            <h1
                                style={{ paddingBottom: 15 }}
                                className="text-[2.4rem] pl-[45px] text-white"
                            >
                                ¡Hola!{" "}
                                <span
                                    className="wave"
                                    role="img"
                                    aria-labelledby="wave"
                                >
                                    👋🏻
                                </span>
                            </h1>
                            <h1 className="text-[2.5rem] pl-[50px] text-white">
                                Yo soy
                                <strong className="text-[#4169e1]">
                                    {" "}
                                    IVÁN GARCÍA
                                </strong>
                            </h1>
                            <div style={{ padding: 50, textAlign: "left" }}>
                                <TerminalTyping />
                            </div>

                            <div className="relative z-10 mt-4">
                                <SocialLinks />
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-end pb-[20px]">
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="w-[400px] md:w-[500px] lg:w-[600px] max-h-[700px] object-contain scale-x-[-1]"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <AboutMe />
        </section>
    );
};

export default Home;
