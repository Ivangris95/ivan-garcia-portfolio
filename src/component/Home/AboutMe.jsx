import myImg from "../../assets/avatar.png";

const AboutMe = () => {
    return (
        <section
            className="w-full py-[110px] relative bg-gradient-to-bl from-[rgba(17,16,16,0.582)] to-[rgba(12,8,24,0.904)]"
            id="about"
        >
            <div className="container mx-auto px-20">
                {/* Primera fila con descripción y avatar */}
                <div className="flex flex-col md:flex-row items-start">
                    {/* Columna de descripción (equivalente a Col md={8}) */}
                    <div className="w-full md:w-2/3 mb-8 md:mb-0 pr-0 md:pr-8 text-white pt-[100px] pb-20 text-center">
                        <h1 className="text-[2.6em] font-bold mb-6">
                            UN POCO{" "}
                            <span className="text-[#4169e1]">SOBRE MÍ</span>
                        </h1>
                        <div className="text-white text-[1.2em] pt-[50px] text-left">
                            <p>
                                Me enamoré de la programación y disfruto
                                explorando diferentes entornos de desarrollo,
                                aprovechando mi formación tanto en DAM como en
                                DAW 🚀
                            </p>
                            <br />
                            <p>
                                Trabajo con lenguajes como
                                <i>
                                    <b className="text-[#4169e1]">
                                        {" "}
                                        Java, Javascript y SQL{" "}
                                    </b>
                                </i>
                            </p>
                            <br />
                            <p>
                                Me interesa el desarrollo de &nbsp;
                                <i>
                                    <b className="text-[#4169e1]">
                                        Aplicaciones Multiplataforma y
                                        Soluciones Web{" "}
                                    </b>{" "}
                                    y estoy abierto a explorar diversos campos
                                    como{" "}
                                    <b className="text-[#4169e1]">
                                        Desarrollo Móvil y Frontend/Backend.
                                    </b>
                                </i>
                            </p>
                            <br />
                            <p>
                                En mis proyectos, utilizo tecnologías como
                                <b className="text-[#4169e1]"> Java</b> y
                                <i>
                                    <b className="text-[#4169e1]">
                                        {" "}
                                        Frameworks Web
                                    </b>
                                </i>
                                &nbsp; como
                                <i>
                                    <b className="text-[#4169e1]">
                                        {" "}
                                        React.js y Spring
                                    </b>
                                </i>
                            </p>
                        </div>
                    </div>

                    {/* Columna del avatar (equivalente a Col md={4}) */}
                    <div className="w-full md:w-1/3 flex justify-center pt-9 md:pt-[9em]">
                        <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src={myImg}
                                className="rounded-full shadow-lg w-[200px] md:w-[250px] lg:w-[250px] max-h-[600px]"
                                alt="avatar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
