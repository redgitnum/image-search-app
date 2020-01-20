import React from 'react';
import './FilterOptions.css'

const categories = ['all', 'fashion', 'nature', 'backgrounds', 'science', 'education', 
'people', 'feelings', 'religion', 'health', 'places', 'animals', 'industry', 
'food', 'computer', 'sports', 'transportation', 'travel', 'buildings', 
'business', 'music'];

const languages = [
    ['english', 'en'], ['polski', 'pl'],
    ['deutsch', 'de'], ['français', 'fr'],
    ['español', 'es'], ['русский', 'ru'],
    ['日本の', 'ja'],
];

const colors = [
    "red", "orange",
    "yellow", "green", "turquoise", "blue",
    "pink", "white", "gray", "black", "brown"
];

const FilterOptions = (props) => {

    

    let toggleOptions = () => {
        let formContainer = document.getElementById('formContainer');
        formContainer.className = (formContainer.className === 'hide' ? 'show' : 'hide')
    }


    return (
        <div className="optionsContainer">
                <div onClick={toggleOptions} className="filterArrow">
                    <div className="filterText">Filter Options</div>
                </div>
            <div id="formContainer" className="hide">
                <form id="form" className="form" onSubmit={props.changeOptions}>
                    
                    <fieldset className="alignSwitch">
                        <legend>Order by</legend>
                        <label className="radioButton">popular<input type="radio" name="order" value="popular" defaultChecked/></label>
                        <label className="radioButton">latest<input type="radio" name="order" value="latest" /></label>
                    </fieldset>

                    <fieldset className="alignSwitch">
                        <legend>Image orientation</legend>
                        <label className="radioButton"><input name="orientation" type="radio" value='all' defaultChecked/>all</label>
                        <label className="radioButton"><input name="orientation" type="radio" value='horizontal'/>horizontal</label>
                        <label className="radioButton"><input name="orientation" type="radio" value='vertical'/>vertical</label>
                    </fieldset>

                    <fieldset className="alignSwitch">
                        <legend>Category</legend>
                        <select name="category">
                            {categories.map((item, index) => 
                                <option key={'category' + index} value={item}>{item}</option>
                            )}
                        </select>
                    </fieldset>

                    <fieldset className="alignSwitch">
                        <legend>Language</legend>
                        <select name="language">
                            {languages.map((item, index) => 
                                <option key={'language' + index} value={item[1]}>{item[0]}</option>
                            )}
                        </select>
                    </fieldset>

                    <fieldset className="colors">
                        <legend>Colors</legend>
                        <label className="checkboxButton"><input style={{backgroundImage: 'linear-gradient(45deg, black, white)'}} type="checkbox" name="colors" value='grayscale' />grayscale</label>
                        <label className="checkboxButton"><input style={{backgroundImage: 'linear-gradient(45deg, transparent 40%, rgba(105,105,105,0.7))'}} type="checkbox" name="colors" value='transparent' />transparent</label>
                            {colors.map((item, index) => 
                                <label className="checkboxButton" key={'colors' + index}><input style={{background: item}} type="checkbox" name="colors" value={item} />{item}</label>
                            )}
                        <label className="checkboxButton"><input style={{background: '#c8a2c8'}} type="checkbox" name="colors" value='lilac' />lilac</label>
                    </fieldset>
                    <fieldset className="extra">
                        <legend>Extra options</legend>
                        <label className="radioButton">Editor's choice Awards<input type="checkbox" name="editorChoice"/></label>
                        <label className="radioButton">safeSearch<input type="checkbox" name="safeSearch" /></label>
                    </fieldset>
                    <div className="buttonContainer">
                        <button className="btn" type="submit">apply filters</button>
                        <button className="btn" type="reset">clear filters</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FilterOptions;