const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Starting with React",
      lessons: [
        { id: 1, title: "First CLass" },
        { id: 2, title: "Second Class" },
      ],
    },
    {
      id: 2,
      title: "Learning Redux",
      lessons: [
        { id: 3, title: "Third CLass" },
        { id: 4, title: "Fourth Class" },
      ],
    },
  ],
};

export default function course(state = INITIAL_STATE, action) {
  console.log(action);

  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
}
