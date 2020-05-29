import React,{useState,useEffect} from 'react';


export default function InvestorCard({imageURL,href,alt}){

  //custom styling 
  const style={
    card:{
        minHeight:'175px',
        minWidth:"350px",
        maxWidth:'350px',
        border:'none',
    },
    img:{
        maxWidth:'200px'
    }
  }


    return(
       
        <div className=" d-flex  justify-content-around m-3">
    
             <div 
                style={style.card}
                className=' card h-100 bg-white  pt-2 pb-2 pl-4 pr-4 border border-light rounded bg-white shadow-lg justify-content-center align-items-center'>

                <a className=""href={href}>
                    <img 
                    style={style.img}
                    src={imageURL} 
                    className="card-img-top img-rounded h-100"
                    alt={alt}
                    />
                </a>
            </div>
     
        </div>
    )
}