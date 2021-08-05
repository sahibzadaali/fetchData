// import axios from 'axios';
// import React,{useState,useEffect} from 'react'

// function FetchApi() {
//     const [posts,setPosts]=useState([]);

//     useEffect(() => {
//        axios.get('https://jsonplaceholder.typicode.com/albums')
//        .then(res=>{
//            console.log(res.data,'res')
//            setPosts(res.data);
//        })
//        .catch(err=>{
//            console.log(err);
//        })
//     }, [])
//     console.log(posts,'posts')
//     return (
//         <div>
//             <ul>
//                 {posts.map(data=>(<li key= {data.id}>
//                         {data.id}
//                         {data.title}
//                         </li>)
                    
// )}
//             </ul>
            
//         </div>
//     )
// }

// export default FetchApi;

import axios from 'axios';
import { useEffect,useState} from 'react';

const FetchApi=()=>{
    const [posts,setPosts]= useState([]);
    const [id,setId]=useState(1);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            setPosts(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[id])
    console.log(posts,'post')
    return(
        <>
        <ul>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <div>{posts.title}</div>
        </ul>
        </>
    )
}

export default FetchApi;