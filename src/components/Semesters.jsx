import React, { useContext } from "react";
import { Course } from "./Course";
import { CourseContext } from "../context/CourseContext";
import PropTypes from 'prop-types';

export const Semesters = ({ semester, courses }) => {
    const { handleClick, finishedCourses, allCourses } = useContext(CourseContext);

    const handleSemesterClick = () => {
        const allCompleted = courses.every(course => finishedCourses.includes(course.id));

        courses.forEach(course => {
            if (allCompleted || !finishedCourses.includes(course.id)) {
                handleClick(course);
            }
        });
    };

    return (
        <div className="">
            <h2
                className="text-center bg-[#327ddb] mx-1 mb-2 text-white font-semibold rounded-md hover:cursor-pointer hover:bg-[#1160C2]"
                onClick={() => handleSemesterClick()}
            >
                {semester}
            </h2>
            {courses.map(course => (
                <Course key={course.id} course={course} allCourses={allCourses} />
            ))}
        </div>
    );
};

Semesters.propTypes = {
    semester: PropTypes.string.isRequired,
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
    })).isRequired,
};