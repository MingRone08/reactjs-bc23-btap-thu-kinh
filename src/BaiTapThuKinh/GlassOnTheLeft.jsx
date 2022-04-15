import React, { Component } from 'react'

export default class GlassOnTheLeft extends Component {
    render() {
        let {glassCurrent, styleGlasses, infoGlasses} = this.props;
        return (
            <div className="col-6">
                <div className="position-relative" style={{ right: '25%' }}>
                    <img className='position-absolute' src="./glassesImage/model.jpg" alt="..." style={{ width: '250px' }} />
                    <img className='position-absolute' style={styleGlasses} src={glassCurrent.url} alt="..." />
                    <div style={infoGlasses} className="position-relative">
                        <span style={{ color: '#AB82FF', fontSize: '17px' }} className='font-weight-bold'>{glassCurrent.name}</span>
                        <br />
                        <span style={{ fontSize: '14px', fontWeight: '400' }}>
                            {glassCurrent.desc}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
