export const findCourseNameById = (id, courses) => {
    if (!courses) {
        console.error('Courses array is undefined');
        return 'Unknown Course';
    }
    const course = courses.find(course => course.id === id);
    return course ? course.code : 'Unknown Course';
};