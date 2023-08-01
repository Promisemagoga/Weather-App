const API_key = "2736697580e64109a631ee5e8973c3d6"

const getNews = async(city) =>{
    const URL = `https://newsapi.org/v2/everything?q=${city}&apiKey=${API_key}`

    const data = await fetch(URL)
   

    console.log(data);
return data;
}

export default getNews