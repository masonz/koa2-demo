'use strict'

import React from 'react'

class Foot extends React.Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col 24 s12">
                            <div className="footer-copyright">
                                <div className="container">© 2017 Masozone</div>
                            </div>
                            <a className="grey-text text-lighten-4 right" href="https://github.com/masonz/koa2-demo">
                                <i className="fa fa-github fa-lg" aria-hidden="true" style={{ margin: '0 5px' }} />
                                <span >https://github.com/masonz/koa2-demo</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Foot