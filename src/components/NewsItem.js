import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let { title, description, urlToImage, urlToNews, publishedAt,publishers, modeState} = this.props;
        return (
            title && <div className="card card-style" style={{ width: "18rem" }}>
                <div className="card-img-container">
                    <span className='badge bg-primary text-light shadow-sm image-container-btn' style={{ position: "absolute", zIndex: "50", top: "0.5rem", right: "1rem" }}>{publishers}</span>
                    <img src={urlToImage ? urlToImage : "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"} className="card-img-top" alt="News-Img" />
                </div>
                <div className={`card-body bg-${modeState.mode === 'light'? 'light' : 'dark'} text-${modeState.mode === 'light'? 'dark' : 'light'}`}>
                    <h5 className="card-title">{title.length >40 ? title.slice(0,40) + "...." : title}</h5>
                    <p className="card-text my-2">{description.length >77 ? description.slice(0,77) + "...." : description}</p>
                </div>
                <div className="card-footer text-body-secondary d-flex justify-content-between p-3" style={{backgroundColor : modeState.mode === 'light'? '#f6f6f6' : '#121212'}}>
                        <a href={urlToNews} target='_blank' className="app-btn">Read More</a>
                    <div className="info d-flex align-item-center" style={{color : modeState.mode === 'light'? '#000000' : '#ffffff'}}>
                        <p className='m-auto small'><i className="fa-solid fa-calendar-days mx-2"></i>{publishedAt}</p>
                    </div>
                </div>
            </div>
        )
    }
}

