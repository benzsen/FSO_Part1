import React from "react"

const Header = (props) => {
  return props;
};

const Part = (props) => {
  return props;
};

const Content = (props) => {
  return(
  <div>
    <div>props.part1 props.exercises1</div>
    <div>props.part2 props.exercises2</div>
    <div>props.part3 props.exercises3</div>
  </div>

  <Part

  );
};

const Total = (props) => {
  const total = props.exercises1 + props.exercises2 + props.exercises3;

  return(
  <div>
    "Number of exercises" + total;
  </div>);
};



const App = () => {
  const course = 'Half Stack application development'

  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'

  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Part
        part1={part1};
        part2={part2};
        part3={part3};

        exercises1={exercises1};
        exercises2={exercises2};
        exercises3={exercises3};
      />
      <Content>
      <Total
        exercises1={exercises1};
        exercises2={exercises2};
        exercises3={exercises3};
      />
    </div>
  )
}

export default App
