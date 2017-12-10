import React from 'react'

class CardMoreDetails extends React.Component {
  render(){
    return (
      <div className="hC-price">
        <p className="hC-p-l">{ this.props.rooms } Zimmer</p>
        <p className="hC-p-r">{ this.props.space }<sup>2</sup></p>
      </div>
    )
  }
}

export default CardMoreDetails
