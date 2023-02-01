import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
          "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
          },
          "author": "Archiman Bhaduri",
          "title": "U-19 T20 World Cup: A cricketer by chance, Titas Sadhu's journey begins now - Indiatimes.com",
          "description": "Cricket News: Titas Sadhu had received her first player-of-the-match award from Jhulan Goswami. She was so overawed by the legendary cricketer's presence that she w",
          "url": "https://timesofindia.indiatimes.com/sports/cricket/news/u-19-t20-world-cup-a-cricketer-by-chance-titas-sadhus-journey-begins-now/articleshow/97470630.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-97470649,width-1070,height-580,imgsize-50984,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-01-31T02:46:00Z",
          "content": "Women's U-19 World Cup: Know the winnersThey can't be anonymous anymore. But, even in a cricket- obsessed India, very few would have heard of them before their campaign in the U-19 World Cup culminat… [+106 chars]"
        },
        {
          "source": {
              "id": null,
              "name": "Hindustan Times"
          },
          "author": "HT Sports Desk",
          "title": "'He's not Umran, he's not Siraj': Gambhir's hard-hitting statement on India star - Hindustan Times",
          "description": "Former Indian opener Gautam Gambhir gave a noteworthy mention to premier pacers Umran Malik and Mohammed Siraj in his hard-hitting statement against fast bowler Arshdeep Singh during the T20I series between India and New Zealand. | Cricket",
          "url": "https://www.hindustantimes.com/cricket/gautam-gambhir-s-hard-hitting-statement-on-arshdeep-amid-india-vs-new-zealand-t20i-series-he-s-not-umran-malik-he-s-not-mohammed-siraj-101675024405134.html",
          "urlToImage": "https://images.hindustantimes.com/img/2023/01/30/1600x900/Collage_Maker-31-Jan-2023-1242-AM_1675106039110_1675106039387_1675106039387.jpg",
          "publishedAt": "2023-01-31T01:53:18Z",
          "content": "Former Indian opener Gautam Gambhir feels Arshdeep Singh should stick to the basics and keep things simple if the speedster wants to avoid bowling no-balls in the limited-overs format. Arshdeep's tal… [+2098 chars]"
        }
            ]
  constructor(){
      super();
      console.log("Constructor called from news component");
      this.state = {
          art: this.articles
      }
  }

  async componentDidMount(){
    console.log("cdm");
    let myUrl  = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=910d7c155f8346988fc6c2052685093c";
    let myData = await fetch(myUrl);
    let parsedData = await myData.json()
    console.log(parsedData);
    this.setState({art: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News Headlines by Nagi</h2>

        <div className="row">
        {this.state.art.map( (element)=> {
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} desp={element.description} imageUrl={element.urlToImage} more={element.url}/>
          </div>

        })}
        </div>

      </div>
    )
  }
}

export default News
