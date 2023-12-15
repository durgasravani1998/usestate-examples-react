import React, {useState} from "react";

const UseStateExample3copy=()=>{

// const tempList=[{
      
// },]


    const [list, setList]=useState([]);

    const[message, setMessage]=useState({
        text:"",
        id:"",

    })

    const [editingItem, setEditingItem] = useState((
        {
            id:"",
            isEditing:""
        }
    ));

    const changeMessage=(e)=>{
        console.log(e.target.value);
        setMessage({
            ...message,
            text:e.target.value,
        })

        

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let newTodo = {
            text:message.text,
            id:new Date().getTime().toString(),
        }
        console.log(newTodo.id);
        setList([...list, newTodo]);
        setMessage({
            text:"",
            id:"",
        })
        

    }

    const handleDelete=(id)=>{
        let newTodos=list.filter((eachItem)=>{
            return eachItem.id != id
        })
        setList(newTodos);
    }

    // console.log(list.length);

    const changeEditState = (id)=>{
        setEditingItem({
            ...editingItem,
            id:id,
            isEditing:true,
        })
        let editableItem=list.find((eachItem)=>eachItem.id===id);
        setMessage({
            ...message,
            text:editableItem.text,
            id:editableItem.id,
        })


       
    }

    const handleEdit=(e)=>{
        e.preventDefault();
        console.log("previous",list);

        let newTodos = list.map((eachItem)=>{
            if(eachItem.id===editingItem.id){
                return {
                    text:message.text,
                    id:editingItem.id,

                }
              }  else{
                    return eachItem;
                }
            
        })
        console.log("current",newTodos);
        setList(newTodos);
        console.log(list);
        
        setMessage({
            text:"",
            id:"",
        })
        setEditingItem({
            id:"",
            isEditing:false
        })
        

    }
    







    return(
        <div>
            <input  type="text" name="message" id="message" placeholder="Enter Your Message" value={message.text} onChange={changeMessage}/>
            {
                editingItem.isEditing ? <button type="button" onClick={handleEdit}> edit</button>:<button type="button" onClick={handleSubmit}> add</button>
            }
            

            <hr/>

            {list.length === 0 && <h4>There are no items in the list</h4>}



            <ul>
               { list.map((eachItem)=>{
                const{text,id}=eachItem;
                    return(
                        <li key={id}>
                            <span>{text}</span>
                            <button onClick={()=>changeEditState(id)}>Edit</button>
                            <button onClick={()=>handleDelete(id)}>Delete</button>
                        </li>

                    )

                })
            }
            </ul>

        </div>

    )
}

export default UseStateExample3copy;