import React from 'react'

const TodosList = (props) => {

 return (
  <>

   <div className='d-flex '>
    <i className="fas fa-trash   text-center mt-2 hover-overlay delete" onClick={() => {props.onSelect(props.id);}}> &nbsp;</i>
    <h4 className='text-center '>{props.text}</h4>
   </div>
  </>
 )
}

export default TodosList
