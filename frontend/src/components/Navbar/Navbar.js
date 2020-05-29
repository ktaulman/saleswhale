import React,{useState,useEffect} from 'react';
//import Link from React-Router
import {Link} from 'react-router-dom';
//import NavLinksBaR 
import NavBarLinks from './NavBarLinks';
import DropDown from '../DropDown/DropDown'

export default function Navbar(){
     //Modal State
     const[displayModal,setDisplayModal]=useState(false);
    //window Resize event State
    const[screenWidth,setScreenWidth]=useState(window.innerWidth) 


    //Effect Hooks
    useEffect(()=>{
        function handleResize(){
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
    },[])



    return(
        <header className='navbar'>
       
            <nav className='navbar fixed-top bg-white'>

                <Link to='/' className='navbar-brand u-header__navbar-brand u-header__navbar-brand-top-space sw-header__navbar-brand'>
                <img className="navbar-brand" src="https://www.saleswhale.com/hubfs/humpback/web/assets/svg/logos/sw-logo.svg" alt="Saleswhale logo"/>
                </Link>

                {
                    screenWidth<=900?
                    <DropDown 
                        dropDownContent={<NavBarLinks/>
                    }/>:
                    <NavBarLinks/>  
                }

            </nav>
    </header>
    )
}