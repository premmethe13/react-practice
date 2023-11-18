import React from 'react';
import { DropdownMenu as Categories } from '../DropdownMenu/DropdownMenu';
import './Nav.css';

const categories = ['Stationery', 'Dairy'];

const Nav = ()=>{
    return (
    <div className='navContainer'>
        <h1 className='heading'>
            Heading
        </h1>
        <div className='outerContainer'>
            <div className='listContainer'>
                <ul className='list'>
                    <li className='listItem'>Home</li>
                    <li className='listItem'>
                        <Categories name='Categories' items={categories}/>
                    </li>
                    <li className='listItem'>About Us</li>
                    <li className='listItem'>Contact</li>
                </ul>
            </div>
            <div className='login'>
                <span className='listItem'>Login</span>
            </div>
        </div>
    </div>
    )
}

export default Nav;