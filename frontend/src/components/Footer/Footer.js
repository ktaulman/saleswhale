import React,{useState,useEffect} from "react";
//import React Router Links
import {Link} from 'react-router-dom';
//import background 
import background from './background.svg';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import linkedin from './linkedin.svg';

const data={
    menus:[
        {
            title:"Why Saleswhale",
            links:[
                {label:"Collaborative Intelligence",href:'#'},
                {label:"AI Assistant Capabilities",href:'#'},
                {label:"Customer Stories",href:'#'},
                {label:"Use Case - Technology",href:'#'},
                {label:"Use Case - Education",href:'#'},
                {label:"Use Case - Events",href:'#'},
            ]
        },
        {
            title:"Products",
            links:[
                {label:"AI Conversations",href:'#'},
                {label:'Lead Enrichment',href:'#'},
                {label:"Deal Intelligence",href:'#'},
                {label:"Workflow Integration",href:'#'},
            ]
        },
        {
            title:"Company",
            links:[
                {label:"About Us",href:'#'},
                {label:'Blog',href:'#'},
                {label:"Resources",href:'#'},
                {label:"Careers",href:'#'},
                {label:"Help Center",href:'#'},
            ]
        }
        ],
    contactUs:{
        email:{
            title:"Contact",
            content:'hello@saleswhale.com'
        },
        offices:[
            {
                title:'',
                content:''
            },
            {
                title:'',
                content:''
            }
        ]
    }
}


function LinkMenu({title,links}){
    return(
        <nav className="nav flex-column col-6 col-sm-6 mb-3">
            <h3 className='nav-body nav-text h5 p-0 m-0 mb-2 font-weight-bold'>{title}</h3>

            {links.map(link=>{
                const {label,href}=link; 
                return(
                    <Link className='nav-link text-dark p-0 m-0 mb-2' to={href}>{label}</Link>
                )
            })}
        </nav>
    )
}

export default function Footer(){
    //state for mock JSON Data 
    const [info,setInfo]=useState(null);
    
    //useEffect for initial canvas pint lifecycle
    useEffect(()=>{
        setInfo(data)
    },[])

    //Loading component if JSON data is still being loaded. 
    if(!info) return <p>Loading... </p>

    //destructure JSON Data
    const{menus,contactUs}=data;

    //custom styling
    const style={
        lower:{
            backgroundColor:'#F4F4F4'
        }
    }

    return(
        <footer className='container-fluid mt-5 '>
            <div className='row'>
                <div className='col-12  col-sm-4 col-md-4 mb-3'>
                    <img style={{maxWidth:'165px'}} className="navbar-brand" src="https://www.saleswhale.com/hubfs/humpback/web/assets/svg/logos/sw-logo.svg" alt="Saleswhale logo"/>
                
                </div>

                <div className='col-12 col-lg-8 col-xl-8 col-md-8 col-sm-8 col-xs-12 mb-3'>
                    <div className='row pl-2 pr-2'>
                        {menus.map(menu=>{
                                const {title,links}=menu;
                                return(
                                    <LinkMenu
                                        title={title}
                                        links={links}
                                    />
                                )
                        })}

                        
                        
                    </div>
                </div>
            </div>
            
            <div style={style.lower}  className="row">
                <div className='row col-12 mb-5'>
                    <div className='col-12 mt-5 d-flex text-center'>
                        <img src={facebook} className='p-3'/>
                        <img src={twitter} className='p-3'/>
                        <img src={linkedin} className='p-3'/>
                    </div>
                    <h4 className='col-md-3 col-sm-3 col-12 h5 text-sm-left text-center'>Privacy</h4>
                    <h4 className='col-md-3 col-sm-3 col-12 h5 text-sm-left text-center'>Terms</h4>
                    <p className="col-12 text-sm-left text-center">© 2020 Saleswhale, Inc. All rights reserved. </p>
                </div>
                
                <img src={background} className='img w-100 col-12'/>
            </div>
        </footer>
    )
}