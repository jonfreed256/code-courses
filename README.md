about code-courses-app
------------
Code Courses is a React App developed with webpack.

Structure
---------
The Catalog component is the main, stateful, container. Within are two containers: one, CourseContainer, for the each CourseCard and one, TagContainer, for each of the course Tags. The courses object is contained withing a separate file and each course author is fetched from an external API.

Functionality
-------------
The Tag component, when clicked, will filter the relavant rendered courses. Clicking a tag again will remove the filter, displaying all courses.

Responsive
----------
There are breakpoint for desktop, tablet, and mobile devices.