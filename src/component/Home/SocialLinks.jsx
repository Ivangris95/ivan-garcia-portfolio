import { Github, Linkedin, X, Mail } from "iconoir-react";

const SocialLinks = () => {
    return (
        <ul className="flex justify-baseline space-x-6 z-3 pl-[50px] pb-7">
            <li className="transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                <a
                    href="https://github.com/example"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-purple-600 text-2xl"
                >
                    <Github />
                </a>
            </li>
            <li className="transform hover:-translate-y-2 transition-transform duration-300">
                <a
                    href="https://twitter.com/example"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:opacity-50 text-2xl"
                >
                    <X />
                </a>
            </li>
            <li className="transform hover:-translate-y-2 transition-transform duration-300">
                <a
                    href="https://www.linkedin.com/in/example/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-blue-600 text-2xl"
                >
                    <Linkedin />
                </a>
            </li>
            <li className="transform hover:-translate-y-2 transition-transform duration-300">
                <a
                    href="https://www.instagram.com/example"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-red-600 text-2xl"
                >
                    <Mail />
                </a>
            </li>
        </ul>
    );
};

export default SocialLinks;
