import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './Box.scss';




const Box = () => {

  const [imageList, setImageList] = useState([]);



  const url  = 'https://picsum.photos/v2/list'

  const loadImage = () => {
    fetch(url, { method: "GET", })
      .then(res => {
      return res.json()
      
      })
      .then(newRes => {
      const newList = newRes.map(item => item.download_url)
      setImageList(newList)
    
    })
}

  useEffect(() => { }, [imageList])  
  

  return(
  <div className='Box'>
      <button onClick={loadImage} >ClickMe</button>
      
      {
        imageList.map(item => {
          return (
            <div key={item}>
              <img width='500px' src={item} alt="img"/>
              
            </div>
          )
        })
      }
    </div>
  )
};


export default Box;
