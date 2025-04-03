import { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { CourseContext } from "../context/CourseContext";
import { findCourseNameById } from "../utils/findCourseNameById";

export const Course = ({ course, allCourses }) => {
  const { finishedCourses, totalCredits, handleClick, boolViewSigla } = useContext(CourseContext);

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
          className={`w-36 bg-gray-600 mb-2 rounded-lg hover:cursor-pointer ${
              isFinished ? "custom-line" : ""
          } ${!takeCourse ? "opacity-50" : ""} mx-1`}
      >
        <div className="flex justify-between items-center h-6">
          <a
              href={`https://buscacursos.uc.cl/?cxml_sigla=${course.code}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-xs pl-1 hover:underline"
          >
            {course.code}
          </a>

          <div className="flex items-center">
            {course.lab && (
                <div className="course-lab mr-1">
                  <p className="">L</p>
                </div>
            )}

            {course.yearly > 0 && (
                <div className="annual-course">
                  <p className="text-xs">{course.yearly === 1 ? "S1" : "S2"}</p>
                </div>
            )}

            <div className={`bg-white course-code mr-1`}>
              <p
                  className={`course-code ${
                      course.cr != null ? "bg-white" : ""
                  }`}
              >
                {course.cr}
              </p>
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
          {boolViewSigla ? (
              <div className={`flex w-full flex-wrap justify-start items-start ${course.req.length === 0 ? 'mb-5' : ''}`}>
                {course.req.map((r) => (
                    <div key={r.id} className={`course-code-2 ${r.cc} m-0.5`}>
                      <p className="course-code-2 text-xs">{findCourseNameById(r.id, allCourses)}</p>
                    </div>
                ))}
              </div>
          ) : (
              <>
                <div className="flex flex-wrap justify-start overflow-hidden">
                  {course.req.map((r) => (
                      <div key={r.id} className={`course-code-circle ${color} m-0.5`}>
                        <p className="text-xs m-1">{r.id}</p>
                      </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <p className={"h-4 w-10 flex ml-1 justify-center mb-0.5 mt-0.5 items-center text-xs bg-gray-300"}>ID: {course.id}</p>
                </div>
              </>
          )}
        </div>
      </div>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    code: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    req: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired,
    lab: PropTypes.bool,
    yearly: PropTypes.number,
    cc: PropTypes.string,
    cr: PropTypes.number,
  }).isRequired,
  allCourses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    course: PropTypes.string.isRequired,
  })).isRequired,
};