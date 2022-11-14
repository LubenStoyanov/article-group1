import React from 'react'
import './ReactArticle.css';
import { Fade } from "react-slideshow-image";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ReactArticle = () => {
  const fadeImages = [
    "https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg",
    "https://assets.website-files.com/61c34f199281cd32c399f08e/6266ee9a01e75659eace2e7a_Point-PropTypes-in-React-concepta-blog.jpg",
    "http://mattermost.com/wp-content/uploads/2022/04/01_Create-React-App_Typescript@2x.png",
    "https://prognote.ru/wp-content/uploads/2021/10/%D0%91%D0%BB%D0%BE%D0%B3-%D0%BD%D0%B0-React-2.jpg",
    "https://assets.website-files.com/5b6901669b93d7837e36dc4c/615e17a6df037040ed528ccf_React-Native--1--1.png",
    "https://crowdbotics.ghost.io/content/images/2021/05/React-Native-Img.png"
  ];
  return (
    <div className='headerSec'>
      
    <Fade className='images'>
        <img src={fadeImages[1]} />
        <img src={fadeImages[2]} />
        <img src={fadeImages[5]} />
        <img src={fadeImages[3]} />
        <img src={fadeImages[4]} />
        <img src={fadeImages[0]} />
    </Fade>
    </div>


  )
}
export default ReactArticle
