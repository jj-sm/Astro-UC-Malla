import React, { useContext, useEffect, useState } from "react";
import { CourseContext } from "../context/CourseContext";

export const Course = ({ course }) => {
  const { finishedCourses, totalCredits, handleClick } =
      useContext(CourseContext);

  const [takeCourse, setTakeCourse] = useState(false);

  useEffect(() => {
    const isCreditRequired = "rc" in course;
    const creditCheck = isCreditRequired && totalCredits >= 410;

    const reqCheck = course.req.every(req => {
      const isCompleted = finishedCourses.includes(req.id);
      return isCompleted && (!isCreditRequired || creditCheck);
    });

    if ("rc" in course) {
      setTakeCourse(reqCheck && creditCheck);
    } else {
      setTakeCourse(reqCheck);
    }
  }, [finishedCourses]);

  const isFinished = finishedCourses.includes(course.id);
  let color = "bg-[#F0F0F0]";
  if (course.cc === "bg-[#CCDFF6]") {
    color = "bg-[#CCDFF6]";
  } else {
    color = course.cc;
  }

  return (
      <div
          className={`w-32 bg-gray-600 mb-2 rounded-lg hover:cursor-pointer ${
              isFinished ? "custom-line" : ""
          } ${!takeCourse ? "opacity-50" : ""} mx-1`}
      >
        <div className="flex justify-between items-center h-6">
          {/* Course code as a hyperlink */}
          <a
              href={`https://buscacursos.uc.cl/?cxml_sigla=${course.code}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-xs pl-1 hover:underline"
          >
            {course.code}
          </a>

          {/* Course lab circle (if it exists) next to course.id */}
          <div className="flex items-center">
            {course.lab && (
                <div className="course-lab mr-1">
                  <p className="">L</p>
                </div>
            )}

            {/* Course yearly circle */}
            {course.yearly > 0 && (
                <div className="bg-red-400 text-black w-4 h-4 rounded-full flex items-center justify-center mr-1">
                  <p className="text-xs">{course.yearly === 1 ? "S1" : "S2"}</p>
                </div>
            )}

            {/* Course ID on the right */}
            <div className="bg-white course-code mr-1">
              <p className="">{course.id}</p>
            </div>
          </div>
        </div>

        <div
            className={`${color} h-12 flex justify-center items-center text-center w-full`}
            onClick={() => handleClick(course)}
        >
          <p className="line-clamp text-sm">{course.course}</p>
        </div>

        <div className="flex justify-between p-1">
          <div className="flex justify-start">
            {course.req.map(r => (
                <div key={r.id} className={`course-code ${color} mx-0.5 border`}>
                  <p className="text-xs">{r.id}</p>
                </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            {/* Creditos */}
            <p
                className={`${
                    course.cr ? "bg-white" : ""
                } h-4 w-4 text-center text-xs`}
            >
              {course.cr}
            </p>
          </div>
        </div>
      </div>
  );
};