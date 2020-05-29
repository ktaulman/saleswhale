import React,{useEffect,useState} from 'react';

//import TimelineCard
import TimelineCard from './TimelineCard';
//import icon 
import icon from './timeline-icon.svg'

const milestones=[
   
    {
        iconURL:icon,
        year:'2015',
        content:'Founded in Singapore by Gabriel Lim, Ethan Le, and Venus Wong'
    },
    {
        iconURL:icon,
        year:'2016',
        content:'Accepted into Y Combinator (S16) and moved to San Francisco'
    },
    {
        iconURL:icon,
        year:'2017',
        content:'Raised US$1.2M in seed funding and hired core engineers'
    },
    {
        iconURL:icon,
        year:'2019',
        content:'Raised US$5.3M in Series A and expanded team size'
    },
    {
        iconURL:icon,
        year:'2020',
        content:'Opened US office in Washington, DC and hired US sales team'
    },
   
]

const style={
    section:{
        width:'100%',
        display:"block",
        borderSizing:'border-box'
    },
    main:{
        backgroundColor:"#EFF8FF",
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
}

export default function Timeline(){
    const [info,setInfo]=useState(null);

    useEffect(()=>{
        setInfo(milestones)
    },[])

    if(!info) return <p>Loadding...</p>

    return(
        <section style={style.section} className='mb-5 pt-5 pb-5 w-100
        '>
            <h2 class="mb-3 text-center font-weight-bold">Our Progress</h2>  
            <div 
            style={style.main}
            >
                <TimelineCard empty />
                {
                    info.map(item=>{
                        const {iconURL,year,content}=item;
                        return(
                        <TimelineCard
                            iconURL={iconURL}
                            year={year}
                            content={content}
                        />
                        )
                    })
                }
            </div>

        </section>
    )
}