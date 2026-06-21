import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-20 bg-gray-900/95 backdrop-blur border-b border-gray-800">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0 transition hover:text-green-400">
                    Dmytro Mykhailiuk
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center gap-3">
                    <a href="#projects" className="mr-5 hover:text-white transition-colors duration-200">
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white transition-colors duration-200">
                        Skills
                    </a>
                    <a href="#testimonials" className="mr-5 hover:text-white transition-colors duration-200">
                        Testimonials
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-green-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-green-400 rounded text-base mt-4 md:mt-0 transition shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}