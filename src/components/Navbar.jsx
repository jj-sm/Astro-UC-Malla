import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { CourseContext } from "../context/CourseContext";
import { Button } from "./Button";

export const Navbar = ({ showPopup }) => {
    const { title, setTitle, handleReset } = useContext(CourseContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar fixed top-0 left-0 right-0 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 mb-5 z-50">
            <div className=" flex flex-wrap items-center justify-between mx-auto p-1">
                <span className="w-full sm:w-auto text-2xl items-cen poppins-medium whitespace-nowrap dark:text-white flex-wrap text-center sm:flex mx-4">
                    <p className="mr-2 ml-4 text-center">Astronomía UC: </p>
                    <p className="mr-2 text-blue-300">{title}</p>
                </span>

                <div className="mx-auto sm:mr-2 flex items-center my-1">
                    <Button className={showPopup ? "breathing-effect" : ""} />
                    <button
                        onClick={toggleMenu}
                        data-collapse-toggle="navbar-hamburger"
                        type="button"
                        className="inline-flex justify-center p-2 mt-0.5 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-hamburger"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Abrir Menú</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                <div
                    className={`w-full overflow-hidden ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} transition-all duration-700 ease-out`}
                    id="navbar-hamburger"
                >
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <li>
                            <div
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={() => {
                                    setTitle("Malla - C020101");
                                    handleReset();
                                    toggleMenu();
                                }}
                            >
                                Astronomía: Malla C020101 (&gt;2022)
                            </div>
                        </li>
                        <li>
                            <div
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={() => {
                                    setTitle("Malla - C020101 (Modificada)");
                                    toggleMenu();
                                    handleReset();
                                }}
                            >
                                Astronomía: Malla C020101 (Modificada - Admitidos Segundo Semestre)
                            </div>
                        </li>
                        <li>
                            <div
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={() => {
                                    setTitle("Malla - FIZ - >2022");
                                    handleReset();
                                    toggleMenu();
                                }}
                            >
                                Física: Malla (&gt;2022)
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    showPopup: PropTypes.bool.isRequired,
};