import React,{useState,useEffect} from 'react';
import UserCard from './UserCard'

const data={
    title:'Our Culture',

    content:'At Saleswhale, we encourage everyone to grow and innovate, while having fun in the process.',

    cards:[
        {
            iconURL:"./card-glasses.svg",
            title:'Building for the future',
            content:'We always challenge the status quo and work hard innovating on a product that not only works, but changes the game for our users. ' 
        },
        {
            iconURL:"./card-glasses.svg",
            title:'Promoting trust & transparency',
            content:'We remain completely open, honest and transparent with everyone. This has allowed us to build strong relationships with each other.' 
        },
        {
            iconURL:"./card-glasses.svg",
            title:'Achieving our very best',
            content:'We believe the success of the company lies within our employees and we constantly challenge each other to learn and level up.' 
        },

    ],
    caption:'If you are excited by our vision of the future, and want to solve meaningful problems, talk to us!'
}


export default function MissionVisionCulture(){
    //destructure data

    //set state to update
    const [info,setInfo]=useState(null)
    useEffect(()=>{
        setInfo(data)
    },[])
    //While waiting for HTTP Response
    if(!info)return <p>Loading...</p>

    //destructure keys
    const {title,content,cards,caption}=info;
    
    //inline styling
    const style={
        section:{
            padding:'0px 30px'
        },
        content:{

        }
    }


    //Returns once info state is updated
    return(
        <section style={style.section} className='mb-5 container'>
            <div className="row">
                <h2 className=" col-xs-12 col-md-12 h2 font-weight-bold text-xs-left text-md-center">
                    {title}
                </h2>
                <p className="col-xs-12  col-md-12 text-xs-left text-md-center">
                    {content}
                </p>
            </div>

            <div className='row mb-4 justify-content-center'>
                {cards.map(card=>{
                    //destructure keys
                    const {iconURL,title,content}=card;
                    return(
                        <UserCard
                            iconURL={iconURL}
                            title={title}
                            content={content}
                        />
                    )
                })}
            </div>

            <div className="row justify-content-start justify-content-sm-center justify-content-md-center">

                <p className="col-lg-12 text-xs-left  text-sm-center text-md-center" >
                        {caption}
                </p>
                <a
                    href="https://jobs.lever.co/saleswhale" 
                    className="btn btn-primary col-xs-12 col-sm-4 col-md-4 col-lg-4" role="button" aria-pressed="true"
                >
                    Join the Team
                </a>
            </div>
        </section>
    )
};