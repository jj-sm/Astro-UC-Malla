import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

export const Stats = () => {
    const { totalCredits, finishedCourses } = useContext(CourseContext);

    return (
        <div className="text-center mt-7 mb-7">
            <h2 className="font-bold text-xl">Estadísticas</h2>
            <div className="flex justify-center mt-4">
                <div className="flex mr-12">
                    <p className="mr-2">Créditos Totales: {totalCredits}</p>{" "}
                    <p>({((totalCredits * 100) / 410).toFixed(1)}%)</p>
                </div>

                <div className="flex">
                    <p className="mr-2">Ramos Aprobados: {finishedCourses.length}</p>
                    <p>({((finishedCourses.length * 100) / 40).toFixed(1)}%)</p>
                </div>
            </div>
            <hr className="w-full my-4 border-gray-300" />
        </div>
    );
};
