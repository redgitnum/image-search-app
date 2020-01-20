import React from 'react';
import './Header.css'
import * as asset from '../../assets'

import FilterOptions from './filterOptions/FilterOptions.component'


const Header = (props) => {

    return (
        <div className="header">
            <h1>Image search app</h1>
            <p className="powered">Powered by <a href="https://pixabay.com/" target="_bland" rel="noopener noreferrer"><img alt='' src={asset.logo} /></a></p>
            <input className="searchInput" type="text" name="input" placeholder="search Images..." value={props.searchQuery} onChange={props.inputChange} onKeyPress={props.fetchImages}/>
            <FilterOptions changeOptions={props.changeOptions}/>
        </div>
    )
}

export default Header;