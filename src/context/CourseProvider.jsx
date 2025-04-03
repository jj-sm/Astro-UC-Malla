import React, { useEffect, useState } from "react";
import { CourseContext } from "../context/CourseContext";
import { ramos20221, ramos20222, ramosFiz2022 } from "../utils";

const storedFinishedCourses = JSON.parse(localStorage.getItem("finishedCourses")) || [];
const credits = JSON.parse(localStorage.getItem("credits")) || 0;
const stored = JSON.parse(localStorage.getItem("stored")) || "Malla C020101";

export const CourseProvider = ({ children }) => {
    const [finishedCourses, setFinishedCourses] = useState(storedFinishedCourses);
    const [totalCredits, setTotalCredits] = useState(credits);
    const [title, setTitle] = useState(stored);
    const [boolViewSigla, setBoolViewSigla] = useState(true);

    const data = title === "Malla - C020101" ? ramos20221 :
        title === "Malla - C020101 (Modificada)" ? ramos20222 :
            title === "Malla - FIZ - >2022" ? ramosFiz2022 :
                ramos20221;

    // Ensure each course has a 'completed' property (default to false if not defined)
    const dataWithCompleted = data.map(course => ({
        ...course,
        completed: course.completed !== undefined ? course.completed : false,
    }));

    const allCourses = [...ramos20221, ...ramos20222, ...ramosFiz2022].map(course => ({
        ...course,
        completed: course.completed !== undefined ? course.completed : false,
    }));

    const coursesBySemesterAndYear = dataWithCompleted.reduce((acc, course) => {
        const { year, semester } = course;
        if (!acc[year]) {
            acc[year] = {};
        }
        if (!acc[year][semester]) {
            acc[year][semester] = [];
        }
        acc[year][semester].push(course);
        return acc;
    }, {});

    useEffect(() => {
        localStorage.setItem("finishedCourses", JSON.stringify(finishedCourses));
        localStorage.setItem("credits", JSON.stringify(totalCredits));
    }, [finishedCourses]);

    useEffect(() => {
        localStorage.setItem("stored", JSON.stringify(title));
    }, [title]);

    const handleReset = () => {
        setTotalCredits(0);
        setFinishedCourses([]);
    };

    const setViewSigla = () => {
        setBoolViewSigla(prevState => !prevState);
    };

    const handleClick = course => {
        const isFinished = finishedCourses.includes(course.id);
        if (!isFinished) {
            if (course.cr) setTotalCredits(state => state + course.cr);
            setFinishedCourses(prevFinishedCourses => [...prevFinishedCourses, course.id]);
        } else {
            if (course.cr) setTotalCredits(state => state - course.cr);
            setFinishedCourses(prevFinishedCourses => prevFinishedCourses.filter(id => id != course.id));
        }
    };

    return (
        <CourseContext.Provider
            value={{
                title,
                setTitle,
                handleReset,
                totalCredits,
                setTotalCredits,
                finishedCourses,
                setFinishedCourses,
                coursesBySemesterAndYear,
                handleClick,
                allCourses,
                boolViewSigla,
                setViewSigla
            }}
        >
            {children}
        </CourseContext.Provider>
    );
};