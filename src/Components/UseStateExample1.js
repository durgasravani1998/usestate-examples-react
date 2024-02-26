import React,{useState} from 'react';


const UseStateExample1 = () => {
    const [showData, setShowData]=useState(false);

    const handleChange=()=>{
        // return(
        setShowData(!showData)
        // )
    }
  return (
    
    <div>
        <button onClick={handleChange} >{showData ? "hide" : "show"}</button>
        {/* {
            showData && (
                <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, officia?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam ipsam nisi sint repellendus nihil consequatur blanditiis quas doloremque laudantium.
        </div>
            )
        } */}

        {
            showData ? (<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, officia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam ipsam nisi sint repellendus nihil consequatur blanditiis quas doloremque laudantium.</div>
           ) : (<h3>The Data is hidden</h3>)
        }

    </div>
  )
}

export default UseStateExample1;

