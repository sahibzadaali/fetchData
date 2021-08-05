import React,{Component} from 'react';

class FetchApi extends React.Component{

    constructor(props){
        super(props);
        this.state={
            items:[],
            isLoaded:false
        }
    }
    //hello
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res=>res.json())
        .then(data => {
            console.log(data,'data')
            this.setState({
                isLoaded:true,
                items:data
            })
        })

    }
    render(){
        var {isLoaded,items} = this.state;
        console.log(items,'items');
        if(!isLoaded){
            return <div>Loading...</div>
        }
        else{
            return(
               <ul>
                   {items.map(e1=>(
                       <li key={e1.userId}>
                           {e1.id}&nbsp;&nbsp;&nbsp;
                           {e1.title}
                       </li>
                   ))}
               </ul>
            ) 
        }
         
    }
}

export default FetchApi