import { useState } from "react";

function TodoListContainer() {
    return (
        <div className="flex-col p-4  w-96 min-h-96 bg-black text-white">
            <ListItem/>
        </div>
    );
  }
export default TodoListContainer


function ListItem(){
    return(
        <div className="flex justify-between">
            <p></p>
            <CustomCheckbox></CustomCheckbox>
        </div>
    )
}


function CustomCheckbox() {
    const [isChecked, setIsChecked] = useState(false);
  
    return (
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setIsChecked(!isChecked)}>
        <div className={`w-6 h-6 border rounded flex items-center justify-center ${isChecked ? 'bg-green-400' : 'bg-white'}`}>
          {isChecked && (
            <div className="text-center w-5 h-5">
              x
            </div>
          )}
        </div>
      </div>
    );
  }
  


