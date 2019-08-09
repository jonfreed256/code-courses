import React, { Component } from "react";
import courses from "./courses";
import CourseContainer from "./CourseContainer";
import TagContainer from "./TagContainer";

export default class App extends Component {
  state = {
    courses: courses,
    authors: null,
    last: null
  };

  componentDidMount() {
    fetch(
      "https://s3.us-east-2.amazonaws.com/codecademy-interview/entities.json"
    )
      .then(response => response.json())
      .then(data => this.setState({ authors: Object.entries(data) }))
      .catch(error => console.error(error));
  }

  handleTagFilter = e => {
    e.preventDefault();
    if (e.target.value === this.state.last) {
      this.setState({
        courses: courses,
        last: null
      });
    } else {
      let filteredCoursesByTag = courses.filter(course => {
        return course.tags.includes(e.target.value);
      });
      this.setState({
        courses: [...filteredCoursesByTag],
        last: e.target.value
      });
    }
  };

  render() {
    return (
    !this.state.authors ?
    <h1>Loading...</h1>
    :
      <div>
        <div>
          <TagContainer
            courses={courses}
            handleTagFilter={this.handleTagFilter}
          />
          <CourseContainer authors={this.state.authors} courses={this.state.courses} />
        </div>
      </div>
    );
  }
}