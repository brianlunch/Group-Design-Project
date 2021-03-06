import { IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle,IonCardTitle,IonIcon} from '@ionic/react';

import { callOutline, downloadOutline, medkit, thunderstorm, warning } from 'ionicons/icons';
import NewsItem from '../NewsItem/NewsItem'
import './NewsContainer.css';
import React, { useState, useEffect } from 'react';
import News from '../../Util/newsFetch'
import axios from 'axios';
 

interface ContainerProps {
  title: string;
}


  

let articles: {author: string,
    clean_url: string,
    country: string,
    language: string,
    link: string,
    published_date: string,
    rank: string,
    rights: string,
    summary: string,
    title: string,
    topic: string,
    _id: string,
    _score: number}[] = [{author: "string",
        clean_url: "string",
        country: "string",
        language: "string",
        link: "string",
        published_date: "string",
        rank: "string",
        rights: "string",
        summary: "string",
        title: "string",
        topic: "string",
        _id: "string",
        _score: 10}];


function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

function searchYelp(crisis:string){

    News.search(crisis).then(articles =>{
        console.log(articles)
        return articles;
    });
   
   }

const NewsContainer = ({ title }) => {

// Declare a new state variable, which we'll call "count"
const [data, setData] = useState([{}]);
 
  useEffect(async () => {
var s = 'Philippines '+title;

    const options = {
      method: 'GET',
      url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
      params: {q: s, lang: 'en', page_size: '3', media: 'True'},
      headers: {
        'x-rapidapi-key': '039ddef734msh07919f94290861dp14440fjsna239b77e2334',
        'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
      }
    };

    const result = await axios.request(
     options
    );

 console.log(result.data);
    setData(result.data.articles);
  }, []);
    
  return (
      
    <IonCard className="ion-text-center ion-full-width">

    
        <IonCardHeader>
        <IonCardTitle className="smallFont">{title + " News"}</IonCardTitle>
        
        {data.map((article) => <NewsItem headline={article.title} source={article.rights} url={article.link} date={article.published_date}/>)}
        
        </IonCardHeader>

     
  </IonCard>

  );
};

export default NewsContainer;