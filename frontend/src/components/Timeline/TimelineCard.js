import React from 'react';

const style={
    main:{
        minHeight:'100px',
        maxWidth:"400px"
    },
    div:{
        position:'relative',
        display:'flex'
    },
    line:{
        zIndex:'2',
        position:'absolute',
        borderLeft:"4px solid #0688FA",
        height:'100%',
        marginLeft:"20px"
    },
    icon:{
        position:'absolute',
        zIndex:3
    },
    content:{
        marginLeft:"50px"
    }      
}
export default function TimelineCard({empty,iconURL,year,content}){
    //returns empty div 
    if(empty){
        return(
            <div
            style={style.main}
            className="row flex-nowrap">

            <p style={{...style.year,color:'rgb(239, 248, 255)'}} className="p-0 m-0 col-3 text-right justify-content-right" >2000 </p>

            <div>
                <div 
                    style={style.div} 
                    className='m-1 p-0 h-100 col-3'>
            
                       {iconURL?
                       <img style={style.icon}className='u-icon u-icon--md' src={iconURL} alt='icon' />
                       :null }
                        <span style={{...style.line,marginLeft:'15px'}}>{" "}</span>
            
                
                </div>
               
            </div>
       
                <p style={{...style.content,color:'rgb(239, 248, 255)'}} className='w-100 '>
                    "lorem ipsum header here will be display none "
                </p>
                
        </div>
        )
    }
    //returns regular div
    return(
        <div
            style={style.main}
            className="row flex-nowrap">

            <p style={style.year} className="p-1 m-0 col-3 text-right justify-content-right" >{year} </p>

            <div>
                <div 
                    style={style.div} 
                    className='m-0 p-0 h-100 col-3'>
            
                       {iconURL?
                       <img style={style.icon}className='u-icon u-icon--md' src={iconURL} alt='icon' />
                       :null }
                        <span style={style.line}>{" "}</span>
            
                
                </div>
               
            </div>
       
                <p style={style.content}>
                    {content}
                </p>
                
        </div>
    )
}