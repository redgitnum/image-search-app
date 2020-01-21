import React from 'react';
import Header from './components/header/Header.component';
import Content from './components/content/Content.component'
import * as utils from './utils/'
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: '',
      searchQuery: '',
      category: '',
      colors: [],
      editorChoice: '',
      language: 'en',
      order: 'popular',
      orientation: 'all',
      safeSearch: '',
      page: 1
    }

  
  }

  fetchImages = (e) => {
      if(e.key === 'Enter') {
        utils.fetchData(this.state, callback => {
          this.setState({data: callback, page: 1})
        })
        let scrollInfo = document.getElementById('photos')
        window.scrollBy(0, scrollInfo.getBoundingClientRect().y)
      }
      
  }

  inputChange = (e) => {
    this.setState({
      searchQuery: e.target.value
    })
  }

  changeOptions = async (e) => {
    //delete async await later
    e.preventDefault()
    if(e.type === 'reset'){
      console.log(e.type)
      document.getElementById('form').reset()
    }
    const data = new FormData(e.target);
    this.setState({
      colors: [],
      editorChoice: '',
      safeSearch: '',
      page: 1
    })
    for (let item of data){
      if(item[0] === 'colors') {
        let tempColor = [...this.state.colors, item[1]]
        await this.setState({
          [item[0]]: tempColor
        })
      }
      else {
        await this.setState({
          [item[0]]: item[1]
        })
      } 
    }

    utils.fetchData(this.state, callback => {
      this.setState({data: callback})
    })
    let scrollInfo = document.getElementById('photos')
      window.scrollBy(0, scrollInfo.getBoundingClientRect().y)

  }

  componentDidMount = () => {
    window.scrollY = 0
    utils.fetchData(this.state, callback => {
      this.setState({data: callback, page: 1})
    })
  }


  render() {
    let counter = 0;

    window.onscroll = () => {
      let containerH = document.getElementById('photos');
      
      if(!counter) {
        if(containerH.scrollHeight - 5000 < window.scrollY) {
          counter=1
          setTimeout(() => {
            counter = 0
            this.setState({page: this.state.page + 1}, () => {
              utils.fetchData(this.state, callback => {
                this.setState({data: [...this.state.data, ...callback]})
              })
            })
          }, 1000);
        }
      }
    }

    return (
      <>
        <Header 
          inputChange = {this.inputChange}
          searchQuery = {this.state.searchQuery}
          changeOptions = {this.changeOptions}
          fetchImages= {this.fetchImages}
        />
        <Content 
          images = {this.state.data}
        />

        
      </>
    )
  }

} 

export default App;
