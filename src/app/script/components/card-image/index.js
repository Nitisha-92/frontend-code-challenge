import React, {Component} from 'react'

class CardImg extends Component {
  render() {
    return (
      <div className="hC-imgContainer">
        <div className="hC-image"><img src={ this.props.url }/></div>
        <div className="hC-tab"><span>{ this.props.city }</span></div>
      </div>
    )
  }
}

export default CardImg