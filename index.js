import React from 'react'
import ReactDOM from 'react-dom'
const Heder = (props) => {
  return <h2>props.course</h2>
}
const Content = (props) => {
  return (
    <div>
      <Part p1={props.parts[0]} />
      <Part p1={props.parts[1]} />
      <Part p1={props.parts[2]} />
    </div>
  )
}
const Total = (props) => {
  return (  <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>)
}
const Part = (props) => {
  return (
    <div>
      <p>props.p1.name</p>
      <p>props.p1.exercises1</p>
      <p>props.p2.name</p>
      <p>props.p2.exercises2</p>
      <p>props.p3.name</p> 
      <p>props.p3.exercises3</p> 
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 243567
    },
    {
      name: 'Using props to pass data',
      exercises: 532
    },
    {
      name: 'State of a component',
      exercises: 52
    }
  ]
  return (
    <div>
      <Heder course={course} />
      <Content part={parts} />
      <Total part={parts} />
    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))