import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center d-flex justify-content-center'>
                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_fdih05cz.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop autoplay></lottie-player>
            </div>
        )
    }
}
