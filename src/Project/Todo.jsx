import React, { useState } from "react";
import TodosList from "./TodosList";


const Todo = () => {
 const [inputList, setInputList] = useState("");

 const [Items, setItems] = useState([]);

 const itemEvent = (event) => {
  setInputList(event.target.value);

 };

 const listofItems = () => {
  setItems((oldItems) => {
   return [...oldItems, inputList]

  });

  setInputList("");

 }

 const deleteItems = (id) => {
  console.log("deleted");
  setItems((oldItems) => {
   return oldItems.filter((arrElem, index) => {
    return index !== id;
   })
  })
 }
 return (
  <>
   <div className="container mt-5">
    <div className="row mt-5 shadow">
     <div className="col-sm- mt-5">
      <h1 className="text-center  text-success bg-dark">TO DO LIST</h1>
      <hr className="line" />
     </div>

     <div className="col-sm-6">
      <input type="text" placeholder="Write Somethings.."
       className="form-control"
       value={inputList}
       onChange={itemEvent}
      />
     </div>

     <div className="col-sm-6">
      <button type="button" id="btn-red" onClick={listofItems}>
       <i className="fas fa-plus"></i>
      </button>
     </div>

     <ol>

      {Items.map((itemval, index) => {
       return (
        <TodosList id={index} key={index} text={itemval} onSelect={deleteItems}
        />
       )
      })}


     </ol>
    </div>
   </div>
  </>
 );
};

export default Todo;
