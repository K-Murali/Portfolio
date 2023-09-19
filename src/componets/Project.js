import React from 'react'
import Card from './Card'

import weat from '../assets/experience/weather.png'
import youtube from '../assets/experience/youtube.png'
import news from '../assets/experience/news.png'

const Project = () => {
  return (
    <div   name ='projects' className='mt-24 ' >
      <div>
        
      </div>
    <h1 className=' container mx-auto  text-center text-3xl  font-bold '>My Projects</h1>

    <div className=' mt-12 flex flex-wrap justify-center gap-10 md:gap-20 items-center'>

      <Card
      title='Weather App'
      color='primary'
      id='1'
      img={weat}
      gitlink='https://k-murali.github.io/weather-app/'
      more='I made this App using HTML, CSS, Javascript and bootstrap. you can search a city name in the seacrh component and get the forecast updates for 3 days'
      info='This Weather App contains 6 types of Weather infomation of a particular City for 3 days. we can aslo search a query'
      />
      <Card
      title='News App'
      id='2'
      color='primary'
      img={news}
      gitlink='https://github.com/K-Murali/news-app'
      more='I made this App using React ,bootstrap and News-API. we can search for a topic in the search component and it will load the related content in the page.'
      info='This News App conatins News From seven categories of a particular country. we can search for a particular keyword. '
      />
      <Card
      id='3'
      title='Youtube-clone'
      color='primary'
      img={youtube}
      more='This App is made by using React ,Tailwind and  Youtube-API. basically you can search for videos same like in youtube. All components are taken inspiration from youtube.'
      gitlink='https://k-murali.github.io/yt-clone/'
      info='This is a Youtube clone almost similar to official Youtube made by  fetching data from Youtube-API.'
      />
    </div>
    </div>
  )
}

export default Project
