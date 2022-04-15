import React, { Component } from 'react'

const imgModel = './glassesImage/model.jpg';

export default class GlassOnTheRight extends Component {
    render() {
        let { glassCurrent, styleGlasses } = this.props;
        return (
            <div className="col-6">
                <div className="position-relative" style={{right:'25%'}}>
                    <img className='position-absolute' src={imgModel} alt="..." style={{ width: '250px' }} />
                    <img className='position-absolute' style={styleGlasses} src={glassCurrent.url} alt="..." />
                </div>
            </div>
        )
    }
}
