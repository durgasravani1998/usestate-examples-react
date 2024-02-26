import React, {useState} from 'react'

const UseStateExample3 = () => {
    

    const [list, setList] = useState([]);

    const [message, setMessage]=useState({
        text:"",
        id:"",
    });

    const [editingItem, setEditingItem] = useState({
        id:"",
        isEditing:"",
    });



    const changeMessage =(e)=>{
        setMessage({
            ...message,
            text:e.target.value,
        });
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let newTodo ={
            text:message.text,
            id:new Date().getTime().toString(),
        };
        console.log(newTodo);
        setList([...list, newTodo]);
        setMessage({
            text:"",
            id:"",
        })
    };

    const handleDelete =(id)=>{
        console.log(id);
        let newTodos = list.filter((eachItem)=>{
            return eachItem.id !== id;
        });
        console.log(newTodos);
        setList(newTodos);
    };

   const changeEditState = (id)=>{
        console.log(id);
        setEditingItem({
            ...editingItem,
            id:id,
            isEditing:true,
        });
        let editableItem = list.find((eachItem)=>eachItem.id === id)
        
        setMessage({
            ...message,
            text:editableItem.text,
            id:editableItem.id
        });
        console.log(editableItem);
    };


        const handleEdit = (e)=>{
            e.preventDefault();
            let newTodoos = list.map((eachItem)=>{
                if(eachItem.id === editingItem.id){
                    return {
                        text:message.text,
                        id:editingItem.id
                    };

                } 
                else{
                    return eachItem;
                }
            });
            console.log(newTodoos);
            setList(newTodoos);
            setMessage({
                text:"",
                id:"",
            })
            setEditingItem({
                id:"",
                isEditing:false,
            });
        };

    
console.log(list.length);




  return (

    <div className="main">
        
        <div className='newtask'>
            <input className='taskinfo' type='text' name='message' id='message' placeholder='Enter your message'
            value={message.text}
            onChange={changeMessage}/>
            {editingItem.isEditing ? (<button type='submit' className='add'  onClick={handleEdit}>edit</button>)
            : (<button type='submit' className='add'  onClick={handleSubmit}>add</button>)}
            
            </div>
        <div className='tasklist'>
        

        <h4>{list.length === 0 && <h4>There are no items in the list</h4>}</h4>
        <ul className='taskhead'>
            {
                list.map((eachItem)=>{
                    const {text,id}=eachItem;
                    return( 
                    <li key={id} className='task'>

                        <div className='text'>{text}</div>
                        <div className='buttons'>
                        <button  className='edit'  onClick={()=>changeEditState(id)}><i class="fa-regular fa-pen-to-square"></i></button>
                        <button  className='delete'  onClick={()=>handleDelete(id)}><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </li>
                    );
                })
            }

        </ul>



        </div>
        </div>
    
  )
}

export default UseStateExample3