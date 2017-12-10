import React, {Component} from 'react'

class CardHeading extends Component {
  render () {
    return (
      <h4 className="heading-det">{ this.props.title }</h4>
    )
  }
}

export default CardHeading