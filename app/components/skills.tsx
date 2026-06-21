// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
                        Commercial experience across frontend, backend, and data-driven web applications. I deliver maintainable interfaces, APIs, and analytics solutions that support faster product development.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {skills.map((group) => (
                        <div key={group.title} className="p-4 sm:w-1/2 lg:w-1/3 w-full">
                            <div className="h-full border border-gray-700 bg-gray-900 rounded-3xl p-6 shadow-lg shadow-black/20 transition hover:border-green-500">
                                <h2 className="text-xl font-semibold text-white mb-5">{group.title}</h2>
                                <div className="space-y-3">
                                    {group.items.map((skill) => (
                                        <div key={skill} className="flex items-center gap-3 text-gray-300">
                                            <BadgeCheckIcon className="text-green-400 w-5 h-5 flex-shrink-0" />
                                            <span>{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}