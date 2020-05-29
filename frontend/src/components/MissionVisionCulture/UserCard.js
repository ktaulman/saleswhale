import React,{useState,useEffect} from 'react';


export default function UserCard({iconURL,title,content}){

  //custom styling 
  const style={
    card:{
        maxWidth:"350px",
        border:'none'
    }
  }


    return(
        <div className="text-md-left text-left col-xs-12 col-sm-3 col-md-3 col-lg-3 d-flex justify-content-center">
        <div style={style.card} className='card mb-3'>

            <img 
              src={iconURL} 
              className="u-icon u-icon--lg u-icon-secondary--air rounded-circle"
            />
          <div className='card-body text-left p-0'>

            <h3 class="card-title h5 mb-2">
              {title}
            </h3>

           
           <p className='card-subtitle'>{content}</p>        
      
          </div>
        
        </div>
      </div>
    )
}