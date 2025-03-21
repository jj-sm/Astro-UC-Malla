import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

export const Stats = () => {
    const { totalCredits, finishedCourses, title } = useContext(CourseContext);

    // Define static credit and course values for each curriculum
    const curriculumStats = {
        "Malla - C020101": { totalCreditsRequired: 410, totalCourses: 41 },
        "Malla - C020101 (Modificada)": { totalCreditsRequired: 410, totalCourses: 41 },
        "Malla - FIZ - >2022": { totalCreditsRequired: 400, totalCourses: 40 }
    };

    // Get the values based on the selected curriculum (default to first option)
    const { totalCreditsRequired, totalCourses } = curriculumStats[title] || curriculumStats["Malla - C020101"];

    return (
        <div className="text-center mt-7 mb-7">
            <h2 className="font-bold text-xl">Estadísticas</h2>
            <div className="flex justify-center mt-4">
                <div className="flex mr-12">
                    <p className="mr-2">Créditos Totales: {totalCredits}</p>
                    <p>({((totalCredits * 100) / totalCreditsRequired).toFixed(1)}%)</p>
                </div>

                <div className="flex">
                    <p className="mr-2">Ramos Aprobados: {finishedCourses.length}</p>
                    <p>({((finishedCourses.length * 100) / totalCourses).toFixed(1)}%)</p>
                </div>
            </div>
            <hr className="w-full my-4 border-gray-300" />
        </div>
    );
};
