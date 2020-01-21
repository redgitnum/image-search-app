import React from 'react';
import './Content.css';
import { Img } from 'react-progressive-loader';
import * as asset from '../../assets'
import Masonry from 'react-masonry-css'


const Content = (props) => {
  const breakpointColumnsObj = {
    default: 3,
    1400: 2,
    750: 1

  };
  // let imagesSRC = {
  //   "largeImageURL": "https://pixabay.com/get/52e3d14a4b5ab108f5d0846096293377173bd7ed544c704c722678d3954ccd5b_1280.jpg",
  //   "webformatHeight": 429,
  //   "webformatWidth": 640,
  //   "likes": 1219,
  //   "imageWidth": 2165,
  //   "id": 434918,
  //   "user_id": 2323,
  //   "views": 500053,
  //   "comments": 195,
  //   "pageURL": "https://pixabay.com/photos/legs-window-car-dirt-road-relax-434918/",
  //   "imageHeight": 1453,
  //   "webformatURL": "https://pixabay.com/get/52e3d14a4b5ab108f5d0846096293377173bd7ed544c704c722678d3954ccd5b_640.jpg",
  //   "type": "photo",
  //   "previewHeight": 100,
  //   "tags": "legs, window, car",
  //   "downloads": 189505,
  //   "user": "Greyerbaby",
  //   "favorites": 1556,
  //   "imageSize": 587598,
  //   "previewWidth": 150,
  //   "userImageURL": "https://cdn.pixabay.com/user/2014/11/14/05-39-07-629_250x250.jpg",
  //   "previewURL": "https://cdn.pixabay.com/photo/2014/09/03/20/15/legs-434918_150.jpg"
  // }

  return (
    <div className="container" id="photos">
      {props.images && 
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {
          props.images.map((image) => 
              <div key={image.webformatURL.slice(23)} className="imageContainer">
                <Img
                  src={image.webformatURL}
                  placeholderSrc={image.previewURL}
                  bgColor = 'rgba(255,255,255,0.2)'
                  loadOnScreen
                />
                <div className="logo"><img alt='' src={asset.logo} style={{width: '80px'}}/></div>
                
                <div className="imageInfo">
                  <div className="pageLink"><a href={image.pageURL} target='_blank' rel="noopener noreferrer"><img alt='' className="bigIcon" src={asset.link} /></a></div>
                  <div className="author">author: {image.user}</div>
                  <div className="tags">{image.tags.split(', ').map((tag, i) => <p key={i}>{tag}</p>)}</div>
                  <div className="stats">
                    <div className="likes">{image.likes}<img alt='' className="smallIcon" src={asset.like} /></div>
                    <div className="views">{image.views}<img alt='' className="smallIcon" src={asset.views} /></div>
                    <div className="downloads">{image.downloads}<img alt='' className="smallIcon" src={asset.downloads} /></div>
                    <div className="favorites">{image.favorites}<img alt='' className="smallIcon" src={asset.favorite} /></div>
                  </div>
                </div>
              </div>
            
          )
        }
      </Masonry>
      }
      

    </div>
  )
}

export default Content;