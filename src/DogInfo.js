import React, {Component, Fragment} from 'react'


export default class DogInfo extends Component{
    render(){
        return(
            <Fragment>
                <img src={this.props.dogObj.image}></img>
                <h2>{this.props.dogObj.name}</h2>
                <button onClick={() => this.props.handleGoodBad(this.props.dogObj)}>{this.props.dogObj.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
            </Fragment>
        )
    }
}