import React, { Component } from "react";
import { connect } from "react-redux";

import * as CourseAction from "../../store/actions/couse";

const Sidebar = ({ modules, toggleLesson }) => (
  <div className="sidebar">
    {modules.map((module) => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map((lesson) => (
            <li key={lesson.id}>
              {lesson.title}{" "}
              <button onClick={() => toggleLesson(module, lesson)}>
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  modules: state.course.modules,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLesson: (module, lesson) =>
    dispatch(CourseAction.toggleLesson(module, lesson)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
