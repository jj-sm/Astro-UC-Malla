import { findCourseNameById } from './findCourseNameById.js';
import { courses } from './malla-AST-020101-1.js';

const testId = 12;
const courseName = findCourseNameById(testId, courses);
console.log(`Course name for ID ${testId}: ${courseName}`);