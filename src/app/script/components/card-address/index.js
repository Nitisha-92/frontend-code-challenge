import React, {Component} from 'react'

class CardHeading extends Component {
  render(){
    return (
      <p className="hC-details"><strong>{ this.props.address }</strong></p>
    )
  }
}

export default CardHeading