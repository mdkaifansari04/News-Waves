import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import CountryDropdown from './CountryDropdown';

export default class News extends Component {

    static defaultProps = {
        pageSize: 8,
        country: 'in',
        category: 'general',
    }
    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string
    }
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: true,
            totalResults: 0,
            page: 1,
            country : 'in'
        }
    }
    updateNews = async () => {
        this.props.setProgress(30)
        let url = `${process.env.REACT_APP_API_URL}?url=https://newsapi.org/v2/top-headlines?country=${this.state.country}|category=${this.props.category}|apiKey=${this.props.apiKey}|page=${this.state.page}|pageSize=${this.props.pageSize}`
        this.props.setProgress(50)
        let data = await fetch(url)
        this.props.setProgress(70)
        let parsedData = await data.json()
        this.props.setProgress(90)
        this.setState({
            totalResults: parsedData.totalResults,
            articles: parsedData.articles,
            loading: false,
            page: this.state.page
        })
        this.props.setProgress(100)
    }
    async componentDidMount() {
        this.setState({ page: 1 })
        this.updateNews()
    }

    fetchMoreData = async () =>{
        let url = `${process.env.REACT_APP_API_URL}?url=https://newsapi.org/v2/top-headlines?country=${this.state.country}|category=${this.props.category}|apiKey=${this.props.apiKey}|page=${this.state.page+1}|pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
            page: this.state.page + 1
        })
    }

    setCountry = async () =>{
        this.props.setProgress(10)
        let country = document.getElementById('countryName').value
        console.log(country);
        this.setState({
            country : country
        })
        this.props.setProgress(20)
        this.updateNews()
    }

    render() {
        let { modeState, heading } = this.props;
        return (
            <>
                <div className='container d-flex justify-content-around flex-wrap' style={{ marginTop: "5rem" }}>
                    <h1 style={{ color: modeState.mode === 'light' ? '#000000' : '#ffffff' }} className='heading'>{heading}-<span className='sub-heading mx-2'>({this.state.totalResults} Results)</span></h1>
                    <CountryDropdown setCountry ={this.setCountry} mode = {modeState}/>
                </div>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >

                    <div className="d-flex justify-content-center flex-wrap gap-4 py-2">
                        {!this.state.loading && this.state.articles.map((element, index) => {
                            return <NewsItem key={index} modeState={modeState} title={element.title ?element.title :"No Title"} description={element.description ? element.description : "No Description"} urlToImage={element.urlToImage} urlToNews={element.url} publishedAt={element.publishedAt ? element.publishedAt.split('T')[0] : "date"} publishers={element.source ? element.source.name : "News"} author={element.author} />
                        })}
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
