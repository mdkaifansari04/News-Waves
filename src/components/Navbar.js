import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        let {toggleMode, state} =this.props;
        return (
            <div>
                <nav id='navbar' className={`navbar navbar-expand-lg navbar-${state.mode === 'light' ? "light" : "dark"} bg-${state.mode === 'light' ? "light" : "dark"} fixed-top`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand brand-logo" to="/">News Wave</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars menubar"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                                </li>
                            </ul>
                            <div className="button-container d-flex justify-content-center">
                            <button onClick={toggleMode} title='Mode' className="app-btn"><i className={`fa-solid fa-${state.icon}`} style={{fontSize : '1.1rem'}}></i></button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
