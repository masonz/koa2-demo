import React from 'react'

class Head extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="container">
                        <div className="nav-wrapper">
                            <a className="brand-logo"></a>
                            <i className="material-icons">language</i>
                            <span>Koa2 - Demo</span>
                            <ul className="right hide-on-med-and-down">
                                <li><a>登录</a></li>
                                <li><a>注册</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Head