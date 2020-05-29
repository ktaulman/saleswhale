//React states
import React,{useState,useEffect} from 'react';
//import images
import background from "./investor-background.svg";
import yCombinator from './yCombinator.svg';
import monkHill from './monkHill.svg';
import strive from './strive.svg';
import waveMaker from './waveMaker.svg';
//import investorCard component
import InvestorCard from './InvestorCard'

//JSON Mock Data 
const data=[
    {
        imageURL:yCombinator,
        href:'https://www.ycombinator.com/',
        alt:'ycombinator incubator'
    },
    {
        imageURL:monkHill,
        href:'https://www.monkshill.com/',
        alt:'monk hill ventures'
    },
    {
        imageURL:strive,
        href:'https://strive.vc/en/',
        alt:'strive ventures'
    },
    {
        imageURL:waveMaker,
        href:'https://wavemaker.vc/',
        alt:'wavemaker ventures'
    }
]
    



export default function Investors(){
    //State for JSON Data
    const [info,setInfo]=useState(null);

    //Component Lifecycle
    useEffect(()=>{
        setInfo(data);
    },[])

     //custom styling
     const style={
        section:{
            background:`url(${background}) no-repeat`,
            backgroundSize:'100%',
        }
    }
    //if data hasn't loaded display loading message
    if(!info) return <p>Loading... </p>

    //React Component
    return(
       
        <section style={style.section} className='container-fluid'>
            <div  className="row justify-content-center">
                    <h2 className='m-5 font-weight-bold'>
                        Our Investors
                    </h2>
            </div>  

            
            <div className="container">
            
            <div className="row 
            justify-content-center">

                {info.map(investor=>{
                //destructure investor obj
                const {imageURL,href,alt}=investor;
                 return(
                        <InvestorCard
                            imageURL={imageURL}
                            href={href}
                            alt={alt}
                        />
                        )          
                    }
                )}
            </div>
            </div>
        </section>
    )
} 