import React,{useEffect,useState} from 'react';
//import components for project

const data={
    imageURL:'./hero-img.svg',

    title:"A future where AI and humans work hand in hand",

    content:[
        "At Saleswhale, we believe that the future of work is Collaborative Intelligence - where machines and AI help humans fulfil their highest potential by automating drudgery and producing for more effective results.",

        "AI assistants help to automate repetitive and mundane tasks so that us humans focus on creative, high-impact work that creates value and inspires. The result? Happier and more productive teams doing meaningful work.",

        "Our mission is to put an AI assistant in every company that could greatly benefit from it, and we're starting off strong addressing this need in marketing and sales teams all across the world.",

        "The future is where AI and humans work hand in hand, and we’re here to help businesses benefit from that."
    ]


}

export default function HeroContent(){
    //State for JSON Data
    const [info,setInfo]=useState(null);
  
    
    useEffect(()=>{
        setInfo(data)
    },[])

    //inline styling
    const style={
       figure:{
        height:'300px',
        overflow:'hidden'
       },
        img:{
        
        }
    }

    if(!info) return <p>Loading...</p>

    const {imageURL,title,content}=info;
    return(
        
        <section className="container mb-4">
            
            <figure style={style.figure} className='mb-4'>
                <img style={style.img} className="img" src={imageURL} alt='starry night'/>
           </figure>

             <div className="row">
           
                <h1 
                style={style.h1}
                className="mb-4 col-xs-12 col-sm-6 col-xl-6 ">
                    {title}
                </h1>
            
                <div className="pl-30 col-xs-12 col-sm-6 col-xl-6">

                    {content?
                        content.map(paragraph=>{
                            return(
                                <p className=" mb-4 mb-sm-7">
                                {paragraph}
                                </p>
                            )
                        })
                    :null}
                </div>
        
            </div>
            
        </section >
    )
}