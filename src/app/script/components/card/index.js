import React, {Component} from 'react'
import CardImage from './../card-image'
import CardHeading from './../card-heading'
import CardAddress from './../card-address'
import CardPrice from './../card-price'
import CardMoreDetails from './../card-more-details'

class Card extends Component {

    render () {
        const adData = this.props.adData
        const { title } = adData
        const { realestateSummary = {} } = adData
        const { advertisementPrice = {} } = adData
        const { advertisementAssets = [] } = adData
        const { address = {} } = realestateSummary
        const { city = ''} = address
        const { fullAddress = '' } = address
        const { advertisementThumbnails = {} } = advertisementAssets[0]
        const { inventory_m = {} } = advertisementThumbnails
        const { sellPrice } = advertisementPrice
        const { numberOfRooms, space } = realestateSummary
        return (
            <div className="hC">
                <CardImage url={inventory_m.url} city={city} />
                <div className="hC-content">
                    <div className="hC-title">
                        <CardHeading title={title} />
                        <CardAddress address={fullAddress}/>
                    </div>
                    <div className="hC-info">
                        <CardPrice price={sellPrice} />
                        <CardMoreDetails rooms={numberOfRooms} space={space}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card