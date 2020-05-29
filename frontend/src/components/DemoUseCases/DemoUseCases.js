import React,{useState,useEffect} from 'react';

const data={
    title:'See the future',
    demoButton:{
        label:'Get a Demo',
        href:''
    },
    useCaseButton:{
        label:'Read Use Cases',
        href:''
    }
}


export default function DefaultUseCases(){ 

     //State for JSON Data
     const [info,setInfo]=useState(null);

     //Component Lifecycle
     useEffect(()=>{
         setInfo(data);
     },[])
 
     
     //if data hasn't loaded display loading message
     if(!info) return <p>Loading... </p>
 
     //destructure info object
     const {title,demoButton,useCaseButton}=info;

     //React Component
     return(
         <section className="container bg-primary">
            <div className="row pt-5">
             <h3 className="col-12 h2 justify-content-center d-flex text-white font-weight-bold"> 
                {title}
             </h3>
            
            </div>
             <div className='d-flex flex-column flex-md-row justify-content-center w-100 pb-5 pt-3'>
          
                    <a href={demoButton.href} className="btn btn-primary bg-white font-weight-bold text-dark btn-outline-light rounded m-2 pl-5 pr-5">{demoButton.label}</a>
              
                    <a href={useCaseButton.href} className="btn btn-seconadry text-white font-weight-bold border-white shadow-lg rounded m-2 pl-5 pr-5 ">{useCaseButton.label}</a> 
          

             </div>
         </section>
     )
}