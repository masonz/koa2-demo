import React from 'react'

import Header from './common/Header/index'
import Footer from './common/Footer/index'

class Foot extends React.Component {

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, { key: child.props.location.pathname }))

        return (
            <div>
                <Header />
                    {childrenWithProps}
                <Footer />
            </div>
        )
    }
}

export default Foot