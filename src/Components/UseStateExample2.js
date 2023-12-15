import React, {useState} from 'react';
import '../index.css';

const UseStateExample2 = () => {
    const [firstname,setFirstName]= useState("");
    const [email,setEmail] = useState(" ");
    const [password,setPassword] = useState(" ");

    // const changeFirstName = (e)=>{
    //     console.log(e.target.value);
    //     setFirstName(e.target.value)

    // }

    // const changeEmail = (e)=>{
    //     console.log(e.target.value);
    //     setEmail(e.target.value);
    // }

    // const changePassword = (e)=>{
    //     console.log(e.target.value);
    //     setPassword(e.target.value)
    // }

    const handleInputChange=(e,namee)=>{
        console.log(e.target.value, namee);

        if(namee === "firstname"){
            setFirstName(e.target.value)

        }else if(namee === "email"){
                setEmail(e.target.value)
            
            }else if(namee === "password"){
                setPassword(e.target.value)
            }
        };  

    

    const handleSubmit = (e)=>{
        e.preventDefault();
        let userobj={
            firstname:firstname,
            email:email,
            password:password,
        };
        console.log(userobj);
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
            <input
            type='text'
            name='firstname'
            id='firstname'
            placeholder='Enter your name'
            value={firstname}
            onChange={(e)=>handleInputChange(e,"firstname")}
            />
            </div>
            <div>
            <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e)=>handleInputChange(e,"email")}
            />
            </div>
            <div>
            <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e)=>handleInputChange(e,"password")}
            />
            </div>
            <div>
                <button type='' >submit</button>
            </div>

            
        </form>
    </div>
  )
}

export default UseStateExample2