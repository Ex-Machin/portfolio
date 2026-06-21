// src/components/About.js

import React from "react";

export default function About() {
    return (
        <section id="about" className="animate-fade-in-up">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I&apos;m Dmytro.
                        <br className="hidden lg:inline-block" />I build full-stack apps with React, .NET, and modern web tools.
                    </h1>
                    <p className="mb-4 leading-relaxed text-gray-300">
                        I bring commercial experience from research and product teams, delivering fast, maintainable solutions across frontend, backend, and data workflows.
                    </p>
                    <div className="mb-6 text-left text-sm text-gray-400 space-y-3">
                        <p>
                            • Optimized data visualizations and agent-based model performance using Factory Method and Singleton patterns.
                        </p>
                        <p>
                            • Built responsive Angular apps, crypto trading interfaces, and secure multi-step banking validations.
                        </p>
                        <p>
                            • Delivered Django/Flask CRUD backends and React interfaces with analytics integration.
                        </p>
                    </div>
                    <div className="mb-6 text-left text-sm text-gray-200 bg-gray-800/70 rounded-xl p-5 border border-gray-700">
                        <p className="font-semibold text-white mb-2">Personal projects</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Roulette simulator — React + .NET</li>
                            <li>Social network app — React</li>
                            <li>Job application scraper — .NET</li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Hire Me
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Work
                        </a>
                        <a
                            href="/NET_FullStack_Dmytro_Mykhailiuk_CV.pdf"
                            download
                            className="inline-flex text-gray-200 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    );
}