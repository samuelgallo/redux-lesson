import React, { Component } from "react";
import { connect } from "react-redux";

const Video = ({ activeLesson, activeModule }) => (
  <div className="video">
    <strong>Module {activeModule.title}</strong>
    <p>{activeLesson.title} class</p>
  </div>
);
export default connect((state) => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);
