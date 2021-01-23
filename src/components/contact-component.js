import React, { Component, lazy } from 'react';
import ShowCards from '../helpers/show-cards';

const DefaultCard = lazy(() => import('./default-card-component'));

export default class Contact extends Component {
    render() {
        return (
            <div className="container">
                <DefaultCard title='Contact Me' copy='<p>You can contact me at <a href="mailto:drew@mika.house">drew@mika.house</a> or any of the social links below.</p><b style="opacity: 0">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</b>'>
                </DefaultCard>                
            </div>
        )
    }

    componentDidMount() {
        document.title = 'Contact Me';
        ShowCards();
    }
}