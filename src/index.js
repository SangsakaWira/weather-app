import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import LoadingBar from './LoadingBar';

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            lat:null,
            long:null,
            accuracy:null,
            err:null
        }
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (data)=>{
                let crd = data.coords
                console.log(crd)
                this.setState({
                    lat:crd.latitude,
                    long:crd.longitude,
                    accuracy:crd.accuracy
                })
            }
        )
    }

    render(){
        return(
            <div>
                <h1>Hello World!</h1>
                <SeasonDisplay lat={this.state.lat} long={this.state.long}></SeasonDisplay>
                <LoadingBar></LoadingBar>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector("#root"))