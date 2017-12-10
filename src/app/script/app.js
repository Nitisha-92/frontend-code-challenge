import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';


class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            ads: {}
        }
    }

    componentWillMount () {
        fetch('//api.mcmakler.de/v1/advertisements').then(response => {
            response.json().then(resp => {
                resp.data.length = 10
                this.setState({
                    ads: resp
                })
            })
        })
    }

    render() {
        const { data = []} = this.state.ads
        return (
            <div className="row">
                {
                    data.map(adData => <div key={adData.additionalId} className="col-md-4 col-sm-6 col-xs-12"><Card adData={adData}/></div>)
                }
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));