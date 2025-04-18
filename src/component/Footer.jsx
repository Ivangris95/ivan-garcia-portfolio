import React from "react";
import { Github, Linkedin, X, Mail } from "iconoir-react";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <footer className="bg-[rgba(255,255,255,0.1)] font-bold p-2 px-4 md:px-10 lg:px-10 font-[Raleway]">
            <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center py-4 px-4">
                <div className="text-white w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-start items-center text-center md:text-left gap-2 mb-4 md:mb-0">
                    <div>
                        <h3 className="text-sm md:text-base">
                            Diseñado y desarrollado por Iván García
                        </h3>
                    </div>
                    <div className="hidden md:block mx-2">•</div>
                    <div>
                        <h3 className="text-sm md:text-base">
                            Copyright &copy; {year} IG.
                        </h3>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-5 text-base md:text-xl">
                    <a href="https://github.com/username">
                        <Github className="text-white hover:text-[#6e5494]" />
                    </a>
                    <a href="https://linkedin.com/in/username">
                        <Linkedin className="text-white hover:text-[#0a66c2]" />
                    </a>
                    <a href="https://twitter.com/username">
                        <X className="text-white hover:opacity-60" />
                    </a>
                    <a
                        href="mailto:email@email.com"
                        aria-label="Gmail"
                        className="text-white hover:text-[#ea4335]"
                    >
                        <Mail />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
