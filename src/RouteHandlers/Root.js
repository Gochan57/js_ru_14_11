import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Menu from '../components/Menu'
import MenuItem from '../components/Menu/MenuItem'
import { dictionary } from '../dictionary'
import Switcher from '../components/Switcher'

class Root extends Component {
    static propTypes = {

    };

    state = {
        username: '',
        language: 'eng'
    }

    static childContextTypes = {
        username: PropTypes.string,
        language: PropTypes.string,
        dictionary: PropTypes.object
    }

    getChildContext() {
        return {
            username: this.state.username,
            language: this.state.language,
            dictionary: dictionary
        }
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    username: <input value = {this.state.username} onChange={this.handleUserChange}/>
                    <Switcher
                      name={"lang"}
                      items={[
                        {label:'русский', value: 'rus'},
                        {label:'english', value: 'eng'}
                      ]}
                      checked={this.state.language}
                      onChange={this.handleLangChange}/>
                    <Menu>
                        <MenuItem link = "/articles" name={dictionary["Articles index"][this.state.language]}/>
                        <MenuItem link = "/filters" name={dictionary["Filters"][this.state.language]}/>
                        <MenuItem link = "/counter" name={dictionary["Counter"][this.state.language]}/>
                        <MenuItem link = "/comments/1" name={dictionary["Comments"][this.state.language]}/>
                    </Menu>
                    {this.props.children}
                </div>
            </Provider>
        )
    }

    handleUserChange = (ev) => {
        this.setState({
            username: ev.target.value
        })
    }

    handleLangChange = (ev) => {
      this.setState({
        language: ev.target.value
      })
    }
}

export default Root
