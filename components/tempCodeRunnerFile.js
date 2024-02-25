let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d8409833f2c442b79fd0662f44d739a2&page=2";
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})