import React, { Component } from 'react';
import ShowCards from '../helpers/show-cards';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="full-width-card card">
                        <h2>Contact Me</h2>
                        <p>You can contact me at <a href="mailto:drew@mika.house">drew@mika.house</a> or any of the social links below.</p>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        document.title = 'Contact Me';
        ShowCards();
    }
}