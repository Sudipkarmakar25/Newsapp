import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize:8,
    category:'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
  }
     articles= [ ];
  constructor(){
    super();
    console.log("Hello");
    this.state={
      articles:this.articles,
      loading:false,
      page:1

    }

  }
  async componentDidMount()
  {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d8409833f2c442b79fd0662f44d739a2&page=1 &pageSize=${this.props.pagesize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,totalResults: parsedData.totalResults})

  }
  handleprevClick=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=d8409833f2c442b79fd0662f44d739a2&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    
    this.setState({
        page:this.state.page-1,
        articles:parsedData.articles,
        totalResults:parsedData.totalResults
    })
  }
   capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  handlenextClick=async()=>{
    console.log("next")
    if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=d8409833f2c442b79fd0662f44d739a2&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    
    this.setState({
        page:this.state.page+1,
        articles:parsedData.articles
    })
}
  }
  render() {
    return (

      <div className="container my-3">
       <h1 className="text-center">Welcome to NEWSAPP</h1>
    <h1 className="text-center">E-Khabri Top Headlines on {this.capitalizeFirstLetter(this.props.category)}</h1>
        <div className="row my-3">
        {this.state.articles.map((element)=>{
        return <div className="col-md-4 my-2" key={element.url} >
        <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
        </div>
    })}
        <div className="container d-flex justify-content-between">
        <button disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevClick}>&larr;  Previous </button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handlenextClick}>Next &rarr;</button>
        </div>
        </div>
        
        </div>
    
    )
  }

}
export default News
