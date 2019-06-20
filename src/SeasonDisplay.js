import React,{Component} from 'react'

export default class SeasonDisplay extends Component{

    constructor(props){
        super(props)
        this.state = {
            season:null,
            message:null,
            month: new Date().getMonth()
        }
        this.getSeason = this.getSeason.bind(this)
    }

    getSeason(long,month){
        let data = {
            season:null,
            message:null
        }
        if(long < 0){
            if(month < 4 || month > 6){
                data.season = "Summer"
                data.message = "Go to the beach!"
            }else{
                data.season = "Winter"
                data.message = "Go buy some jacket!"
            }
        }else{
            if(month > 4 || month < 6){
                data.season = "Summer"
                data.message = "Go to the beach!"
            }else{
                data.season = "Winter"
                data.message = "Go buy some jacket!"
            }
        }
        return data
    }

    componentDidMount(){
        this.setState({
            season:this.getSeason(this.props.long,this.state.month).season,
            message:this.getSeason(this.props.long,this.state.month).message
        })
    }
    
    render(){
        return(
            <div>
                <h1>Lat: {this.props.lat}</h1>
                <h1>Long: {this.props.long}</h1>
                <h1>Season: {this.state.season}</h1>
                <h1>Message: {this.state.message}</h1>
            </div>
        )
    }
}
