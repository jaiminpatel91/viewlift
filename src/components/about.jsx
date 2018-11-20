import React, {Component} from 'react';
import axios from 'axios';

export class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }
    componentDidMount() {
        axios.get("http://www.snagfilms.com/apis/films.json?limit=10")
            .then(res => res)
            .then((res) => {
                console.log("response", res);
                this.setState({
                    data: res.data.films.film,
                })
            })
            .catch((err) => {
                console.log('error', err);
            });
    }

    displayWidget = () => {
        if (this.state.data.length > 0) {
            return this.state.data.map(card => {
              return ( <div key={card.id} className={"card"}>
                  <a href={card.permaLink} style={{ textDecoration: 'none', color: 'black' }}>
                  <img src={card.images.image[0].src} className={"image"} />
                  {card.title}
                  </a>
                </div> )
            })
        }
        else {
            return (
                <div>Loading ....</div>
            )
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.history.push("/")} style={{ display: 'block' }}> Log Out </button>
                {
                    this.displayWidget()
                }
            </div>
        )
    }
}