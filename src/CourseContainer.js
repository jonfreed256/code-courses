import React from "react";
import Course from "./Course";

export const Results = ({ courses, authors }) => {

  function replaceCourseAuthIdWithName(coursesObj, authorsObj) {
    const newObj = [...coursesObj];
    const authorsArr = Object.entries([...authorsObj]);
    const newAuthorsObj = Object.values(authorsArr[0][1][1])

    newAuthorsObj.forEach(author => {
      newObj.map(course => {
        if(+course.author_id === +author.id){
          course.author_id = author.name
        }
        return course
      });
    })
    console.log(newObj)
    return newObj;
  }

  const authorsList = replaceCourseAuthIdWithName(courses, authors);

  return (
    <div className="card-wrapper">
      {!courses.length ? (
        <h1>No courses found</h1>
      ) : (
        authorsList.map(course => (
          <Course
            title={course.title}
            author={course.author_id}
            image={course.image}
            courseAuthId={course.author_id}
            key={course.id}
          />
        ))
      )}
    </div>
  );
};
