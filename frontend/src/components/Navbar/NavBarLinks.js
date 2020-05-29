import React from 'react';
//import Link from React-Router
import {Link} from 'react-router-dom';

export default function NavBarLinks(){
    return(
        
       <>

                <Link to='/saleswhale' className='nav-link u-header__nav-link m-2'>Why Saleswhale?</Link>

                <Link to='/product' className='nav-link u-header__nav-link m-2'>Product</Link>

                <Link to='/company' className='nav-link u-header__nav-link m-2'>Company</Link>
                <form class="form-inline my-2 my-lg-0">
                    <a 
                        className="btn btn-outline-primary rounded text-primary shadow-lg font-weight-bold p-1 pl-3 pr-3 m-2"
                        href='https://app.saleswhale.com' 
                        target='_blank' 
                        alt='login'
                        rel='noopener noreferrer'
                    >
                        Login
                    </a>
                    <a 
                        className="btn btn-primary font-weight-bold  shadow-lg text-white p-1 pl-3 pr-3 m-2"
                        href='https://www.saleswhale.com/get-a-free-demo'
                        target='_blank'
                        alt='Get a demo'        
                    >
                        Get a Demo
                    </a>
                </form>
        </>
 )}