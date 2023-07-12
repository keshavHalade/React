import React, { useState } from 'react';

const CatView=()=>{
    
    const [imgurl,setUrl] = useState("https://cdn2.thecatapi.com/images/c2b.jpg");
    const [count, increaseCount] = useState(0);
    const callImg=()=> {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res=>res.json())
        .then(data=>setUrl(data[0].url))
        .catch((error) => console.log('Error:', error));
        
        increaseCount(count+1);
    }
    return (
        <>
            <div className="container">
                <div style={{textAlign: "center",margintop:"100px"}}>
                <h1 style={{textAlign: "center"}}>Enjoy the cat images</h1><br></br>
                <img src={imgurl} alt='my cat' /><br></br>
                <br></br>
                <h3>You see {count} imgaes</h3><br></br><br></br>
                <button onClick={()=>callImg()}>Click me</button>
            </div>
            </div>
        </>
    )
}

export default CatView;