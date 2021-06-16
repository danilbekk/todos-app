import React, { useState } from "react"

function App() {
    let [todos, setTodos] = useState([
        {text: "Купить бананы", completed: true},
        {text: "Купить бананы2", completed: false}
    ])
    
    const [text, setText] = useState("")

    const deletedToDo = (number) =>{
       const filtered = todos.filter((item, index) => {
           if(index === number) {
               return false
           }
             return true
         } )
         setTodos(filtered)    
    }

    const completed = (i) => {
        const newTodos = todos.map((item,index) =>{
            if(index === i) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        })
        setTodos(newTodos)
    }
    

    const Todos = todos.map((item,index) =>{
        return <div className="todo">
         <input  onClick={() => completed(index)} type="checkbox" checked={item.completed}></input>
         <h3>{item.text}</h3>
         <button onClick={()=> deletedToDo(index)}>X</button>
         </div>
     })
     const addTodo = () =>{
         todos.map((item, index) => {
             console.log(text);
             if(item.text !== text) {
                setTodos([{
                    text: text,
                    completed: false
                },
                ...todos
               ])
             }
            
         })
         
        setText("")
     }
    return (
        <div className="app">
            <div className="header">
               <h2>Список дел </h2> 
            </div>
            <hr />
            <div className="form">
                <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                 className="text" 
                 placeholder="Введите текст..."/>
                <button onClick={addTodo} className="button">Добавить</button>
            </div>
            <>
            {Todos}
            </>
            
        </div>
    )
}

export default App