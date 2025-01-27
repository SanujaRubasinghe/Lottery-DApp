import React from 'react'

function Student(props) {
  return (
    <div className='Student'>
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Student : {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

export default Student