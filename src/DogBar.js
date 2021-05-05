import React, {Component, Fragment} from 'react'


export default class DogBar extends Component{

    // state={
    //     dogs: []
    // }

    // componentDidMount(){
    //     fetch('http://localhost:3000/pups')
    //     .then(resp => resp.json())
    //     .then(dogs => {
    //         this.setState({
    //             dogs
    //         })
    //     })
    // }
    render(){
        return(
            <Fragment>
                {this.props.dogs.map(dog => <span onClick={() => this.props.handleClick(dog)} >{dog.name}</span> )}
            </Fragment>
        )
    }
}