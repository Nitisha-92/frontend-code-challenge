import React from 'react'

class CardPrice extends React.Component {
  render () {
    return (
      <div className="hC-price">
        <p><strong>{ this.props.price } €</strong></p>
      </div>
    )
  }
}

export default CardPrice