import React,{Component} from 'react'

export default class SeasonDisplay extends Component{
    
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <h1>Lat: {this.props.lat}</h1>
                <h1>Long: {this.props.long}</h1>
            </div>
        )
    }
}
