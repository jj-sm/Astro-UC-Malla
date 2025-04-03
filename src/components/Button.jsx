import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CourseContext } from "../context/CourseContext";

export const Button = ({ className }) => {
    const { handleReset, setViewSigla } = useContext(CourseContext);
    return (
        <div className="flex space space-x-2">
            <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 mb-1 mt-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleReset}
            >
                Reiniciar Ramos
            </button>
            <button
                type="button"
                className={`text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 mb-1 mt-1 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 ${className}`}
                onClick={setViewSigla}
            >
                Cambiar Vista
            </button>
        </div>
    );
};

Button.propTypes = {
    className: PropTypes.string,
};