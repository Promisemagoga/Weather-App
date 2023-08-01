import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import getNews from '../Services/NewsServices'
import { Link } from "react-router-dom";

// import { newsbg } from "../Assets/old-newspaper-350376_640.jpg";

export default function News() {
  const [news, setNews] = useState(null)
  const [searchNews, setSearchNews] = useState("Pretoria")




  useEffect(() => {
    const fetchData = async () => {
      const data = await getNews(searchNews)
        .then((res) => res.json())
        .then((data) => {
          setNews(data.articles)
          console.log(data.articles);
          //localStorage.setItem("articles",JSON.stringify(data.articles))

        });


    }
    fetchData()
  }, [searchNews])




  const enterCity = (event) => {
    if (event.keyCode === 13) {
      setSearchNews(event.currentTarget.value)
      event.currentTarget.blur()
    }
  }

  if (!news) return <div>Loading..</div>
  return (
    <div className='news'>
      <input type="text" placeholder='Enter City...' onKeyDown={enterCity} />
      {news.map((data, index) => (
        <div key={index} >
          <div className='articles'>
            <div className='newsContent'>
              <div className='newsHeader'>
                <h1>{data.source.name}</h1>
                <p>{data.publishedAt}</p>
              </div>
              <br/>
              <hr />
              <br/>
              <div className='newsDes'>
                <h3>{data.title}</h3>
                <h4>{data.author}</h4>
                <p>{data.content}</p>
                <Link to={data.url} className='newsLink'>{data.url}</Link>
              </div>
            </div>
            <img src={data.urlToImage} alt="" className='articleImg' />
          </div>
          <br></br>
          <br></br>
          <br />


        </div>
      ))}
    </div>
  )
}


