import React, { Component, PropTypes } from 'react'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
      language: PropTypes.string,
      dictionary: PropTypes.object
    }

    render() {
        return (
            <div>
                <h3>{this.context.dictionary['Choose menu item'][this.context.language]}:</h3>
                <section>
                    {this.props.children}
                </section>
            </div>
        )
    }
}

export default Menu
