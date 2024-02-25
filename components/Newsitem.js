import React, { Component } from 'react'
export class newsitem extends Component {
  
  render() {
   let {title,description,imageurl,newsurl,author,date}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageurl?"https://th.bing.com/th/id/R.41526ef38109c84f5318ee3ddccdd899?rik=hin%2bEU1Q4s206g&riu=http%3a%2f%2fclaynewsnetwork.com%2fwp-content%2fuploads%2f03-10-17BAnner.png&ehk=TO4eW7GK7QnROcT4A6JXeBgW0oSGHhplJcfXCrGfDcg%3d&risl=&pid=ImgRaw&r=0":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {date}</small></p>
    <a href={newsurl} target="/" className="btn btn-sm btn-primary">ReadMore</a>
  </div>
</div>
      </div>
    )
  }
}

export default newsitem
