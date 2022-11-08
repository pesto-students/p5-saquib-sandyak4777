import React from "react";
import { useState } from "react";

const ToDo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddItems = () => {
    if (!input) {
    } else {
      setItems([...items, input]);
      setInput("");
    }
  };
  const handleRemoveItem =(removeItemId) =>{
    const updateItemList = items.filter((item,id)=>{
        return id !=removeItemId
    })
    setItems(updateItemList);
  }
  return (
    <div>
      <h1>This is todo simple application</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleAddItems}>Add item</button>
      <h3>This is todo list</h3>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <h4>{item}</h4>
            <button onClick={()=>handleRemoveItem(index)}>Remove Item</button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDo;
