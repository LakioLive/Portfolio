"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-scroll";

export default function Footer() {
    return (
        <footer id="contactme" className="w-full bg-dark-gray mt-20">
            <div className="container mx-auto px-3 md:px-5 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold tracking-tight">
                            Let&apos;s create something
                            <span className="block text-light-blue">
                                amazing together
                            </span>
                        </h2>
                        <p className="max-w-md text-gray-400">
                            Have a project in mind? Let&apos;s talk about it.
                            I&apos;m always open to discussing new and exciting
                            opportunities.
                        </p>
                        <div className="flex flex-col space-y-4">
                            <a
                                href="mailto:mister.lakio.new@gmail.com"
                                className="group flex items-center space-x-2 text-gray-400 hover:text-light-blue transition-colors"
                                target="_blank"
                            >
                                <MdMailOutline className="w-5 h-5" />
                                <span>mister.lakio.new@gmail.com</span>
                                <RiArrowRightUpLine className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-sm text-gray-300 font-semibold uppercase tracking-wider">
                                Navigation
                            </h3>
                            <nav className="flex flex-col space-y-4">
                                {["Home", "About", "Skills", "Projects"].map(
                                    (item) => (
                                        <Link
                                            key={item}
                                            to={`${item.toLowerCase()}`}
                                            className="w-fit text-gray-400 hover:text-light-blue transition cursor-pointer"
                                        >
                                            {item}
                                        </Link>
                                    ),
                                )}
                            </nav>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-sm text-gray-300 font-semibold uppercase tracking-wider">
                                Connect
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/LakioLive"
                                    className="p-2 text-black bg-gray-50 hover:bg-gray-200 rounded-full transition"
                                    target="_blank"
                                >
                                    <FaGithub className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/lakiolive/"
                                    className="p-2 text-black bg-gray-50 hover:bg-gray-200 rounded-full transition"
                                    target="_blank"
                                >
                                    <FaLinkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://bsky.app/profile/lakiolive.bsky.social"
                                    className="p-2 text-black bg-gray-50 hover:bg-gray-200 rounded-full transition"
                                    target="_blank"
                                >
                                    <FaBluesky className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://x.com/lakiolive"
                                    className="p-2 text-black bg-gray-50 hover:bg-gray-200 rounded-full transition"
                                    target="_blank"
                                >
                                    <FaXTwitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-gray-100">
                    <p className="text-center text-gray-500">
                        © {new Date().getFullYear()} LakioLive. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
