import React, {Component} from 'react';

class Header extends Component {

    constructor(props) {
        /**
         * @Super();
         * @Description: This will get all the parent lib data
         */
        super();

        /**
         * @Description: State is an object
         */
        this.state = {
            title: 'The keywords are: ',
            keywords: 'Gugu'
        }
    }

    /**
     * @Descripton: OnInputChange
     * @param {*} event 
     * @Author: Pardip Bhatti
     */
    inputChange(event) {
        this.setState({keywords: event.target.value})
        this.props.newsSearch(event.target.value)
    }

    render() {
        return (
            <header>
                <div className="logo">Logo</div>
                <input onChange={this.inputChange.bind(this)}/>
            </header>
        );
    }
}
export default Header;