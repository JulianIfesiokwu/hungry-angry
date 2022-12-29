import React, { useState } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Image1 from '../../assets/Gallery Images/Image (1).jpeg';
import Image2 from '../../assets/Gallery Images/Image (2).jpeg';
import Image3 from '../../assets/Gallery Images/Image (3).jpeg';
import Image4 from '../../assets/Gallery Images/Image (4).jpeg';
import Image5 from '../../assets/Gallery Images/Image (5).jpeg';
import Image6 from '../../assets/Gallery Images/Image (6).jpeg';
import Image7 from '../../assets/Gallery Images/Image (7).jpeg';
import Image8 from '../../assets/Gallery Images/Image (8).jpeg';
import Image9 from '../../assets/Gallery Images/Image (9).jpeg';
import Image10 from '../../assets/Gallery Images/Image (10).jpeg';
import Image11 from '../../assets/Gallery Images/Image (11).jpeg';
import Image12 from '../../assets/Gallery Images/Image (12).jpeg';
import Image13 from '../../assets/Gallery Images/Image (13).jpeg';
import Image14 from '../../assets/Gallery Images/Image (14).jpeg';
import Image15 from '../../assets/Gallery Images/Image (15).jpeg';
import Image16 from '../../assets/Gallery Images/Image (16).jpeg';
import Image17 from '../../assets/Gallery Images/Image (17).jpeg';
import Image18 from '../../assets/Gallery Images/Image (18).jpeg';
import Image19 from '../../assets/Gallery Images/Image (19).jpeg';
import Image20 from '../../assets/Gallery Images/Image (20).jpeg';
import Image21 from '../../assets/Gallery Images/Image (21).jpeg';
import Image22 from '../../assets/Gallery Images/Image (22).jpeg';
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

import './Gallery.Page.styles.css';

export default function Gallery() {
  const [data, setData] = useState({img: '', i: 0});

  const imageLibrary = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20, Image21, Image22];

  const viewImage = (img, i) => {
    setData({img, i});
  };

  const imgAction = (action) => {
    let i = data.i;
    if(action === 'next-img') {
      setData({img: imageLibrary[i + 1], i: i + 1});
    }
    if(action === 'prev-img') {
      setData({img: imageLibrary[i - 1], i: i - 1});
    }
    if(!action) {
      setData({img: '', i: 0})
    }
  }

  return (
    <>
      {
        data.img && 
        <div
          style={{
          width: '100%',
          height: '100vh',
          background: 'black',
          position: 'fixed',
          top: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}>
          <AiOutlineLeft 
            size='40' 
            color='#fff' 
            className='control-btn'
            onClick={() => imgAction('prev-img')}/>
          <img 
            src={data.img} 
            
            alt=''
             style={{
            width: 'auto',
            maxWidth: '80%',
            maxHeight: '80%',
            margin: '1rem',
          }} />
          <AiOutlineRight 
            size='40' 
            color='#fff' 
            className='control-btn'
            onClick={() => imgAction('next-img')}
             />
          <AiOutlineClose
          size='40'
          color='#fff'
          className='control-btn close-btn'
          onClick={() => imgAction()}
          />
        </div>
      }
      <div className='image-gallery'>
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry gutter='16px'>
              {imageLibrary.map((image, i) => {
                return (
                  <img 
                    src={image} 
                    key={i} 
                    style={{width: '100%', display: 'block', cursor: 'pointer'}} 
                    alt='' 
                    onClick={() => viewImage(image, i)} />
                )
              })}
            </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  )
}
