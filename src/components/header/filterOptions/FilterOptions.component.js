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
        <div onClick={toggleOptions} className="filterText">Filter Options &#187;</div>
            <div id="formContainer" className="hide">
                <form id="form" className="form" onSubmit={props.changeOptions}>
                    
                    <div className="field">Order by
                        <div className="fieldContent">
                            <label className="toggleOption">popular<input type="radio" name="order" value="popular" defaultChecked/></label>
                            <label className="toggleOption">latest<input type="radio" name="order" value="latest" /></label>
                        </div>
                    </div>

                    <div className="field">Image orientation
                        <div className="fieldContent">
                            <label className="toggleOption"><input name="orientation" type="radio" value='all' defaultChecked/>all</label>
                            <label className="toggleOption"><input name="orientation" type="radio" value='horizontal'/>horizontal</label>
                            <label className="toggleOption"><input name="orientation" type="radio" value='vertical'/>vertical</label>
                        </div>
                    </div>

                    <div className="field">Category
                        <div className="fieldContent">
                            <select name="category">
                                {categories.map((item, index) => 
                                    <option key={'category' + index} value={item}>{item}</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="field">Language
                        <div className="fieldContent">
                            <select name="language">
                                {languages.map((item, index) => 
                                    <option key={'language' + index} value={item[1]}>{item[0]}</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="field">
                        Colors
                        <div className="fieldContent">
                            <label className="toggleColor"><input style={{backgroundImage: 'linear-gradient(45deg, black, white)'}} type="checkbox" name="colors" value='grayscale' />grayscale</label>
                            <label className="toggleColor"><input style={{backgroundImage: 'linear-gradient(45deg, transparent 40%, rgba(105,105,105,0.7))'}} type="checkbox" name="colors" value='transparent' />transparent</label>
                                {colors.map((item, index) => 
                                    <label className="toggleColor" key={'colors' + index}><input style={{background: item}} type="checkbox" name="colors" value={item} />{item}</label>
                                )}
                            <label className="toggleColor"><input style={{background: '#c8a2c8'}} type="checkbox" name="colors" value='lilac' />lilac</label>
                        </div>
                    </div>
                    <div className="field">Extra options
                        <div className="fieldContent extra">
                            <label className="toggleOption">Editor's choice Awards<input type="checkbox" name="editorChoice"/></label>
                            <label className="toggleOption">safeSearch<input type="checkbox" name="safeSearch" /></label>
                        </div>
                    </div>
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