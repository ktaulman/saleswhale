import React, { useState,useEffect } from 'react';
//import icon 
import icon from './icon-offices.svg';
import { OfficesCard } from './OfficesCard';
import background from './background-offices.svg';

//mock JSON data 
const data=[
    {
        iconURL:icon,
        title:"Singapore",
        address:"155B Telok Ayer Street", 
        city:"Singapore, 068611"
    },
    {
        iconURL:icon,
        title:"Washington DC",
        address:"1701 Rhode Island Ave NW",
        city:"Washington, DC 20036"
    }
]

//React Component
export default function Offices(){
    //component state for data
    const [info,setInfo]=useState(null);
    
    //set state based on server response
    useEffect(()=>{
        setInfo(data)
    },[])

    //custom styling
    const style={
        div:{
            background:`url(${background}) no-repeat`,
            backgroundSize:'cover',
        }
    }
    //if data hasn't loaded display loading message
    if(!info) return <p>Loading...</p>

    //main component
    return(
       
        <section style={style.div} className='container-fluid'  >
            <div className="row justify-content-center">
                    <h2 className="mb-5 font-weight-bold">
                        Our Offices
                    </h2>
            </div>  

            <div className="row justify-content-center">

                {info.map(office=>{
                //destructure office obj
                const {iconURL,title,address,city}=office;
                 return(
                        <OfficesCard
                            iconURL={iconURL}
                            title={title}
                            address={address}
                            city={city}
                        />
                        )          
                    }
                )}
        
            </div>
        </section>
    )
}