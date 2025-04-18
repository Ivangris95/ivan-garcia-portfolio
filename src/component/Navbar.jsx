import { Home, User, Presentation, JournalPage } from "iconoir-react";

const Navbar = () => {
    return (
        <header className="relative p-2 px-4 md:px-8 lg:px-8 w-full h-20 font-[Raleway]">
            <div className="absolute inset-0 bg-gradient-to-b from-[hsla(0,0%,100%,0)] to-[rgba(107,114,128,0.2)]"></div>

            <nav className="relative z-10 w-full h-auto flex justify-between items-center p-2">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <h2 className="text-white text-xl md:text-3xl font-bold">
                        IG
                    </h2>
                </div>

                {/* Navegación principal */}
                <ul className="text-base md:text-xl flex justify-center items-center gap-6 md:gap-8 lg:gap-12 mx-4 font-[Raleway]">
                    <li className="text-white hover:text-gray-200 transition-colors">
                        <a href="/" className="flex items-center gap-2">
                            <Home
                                className="w-5 h-5 md:w-6 md:h-6"
                                strokeWidth="2.5"
                            />
                            <span>Inicio</span>
                        </a>
                    </li>
                    <li className="text-white hover:text-gray-200 transition-colors">
                        <a href="/about" className="flex items-center gap-2">
                            <User
                                className="w-5 h-5 md:w-6 md:h-6"
                                strokeWidth="2.5"
                            />
                            <span>Sobre mi</span>
                        </a>
                    </li>
                    <li className="text-white hover:text-gray-200 transition-colors">
                        <a href="/projects" className="flex items-center gap-2">
                            <Presentation
                                className="w-5 h-5 md:w-6 md:h-6"
                                strokeWidth="2.5"
                            />
                            <span>Proyectos</span>
                        </a>
                    </li>
                    <li className="text-white hover:text-gray-200 transition-colors">
                        <a
                            href="/curriculum"
                            className="flex items-center gap-2"
                        >
                            <JournalPage
                                className="w-5 h-5 md:w-6 md:h-6"
                                strokeWidth="2"
                            />
                            <span>Curriculum</span>
                        </a>
                    </li>
                </ul>

                {/* Botón para cambiar el tema oscuro/claro */}
                <div className="flex-shrink-0 ml-4"></div>
            </nav>
        </header>
    );
};

export default Navbar;
