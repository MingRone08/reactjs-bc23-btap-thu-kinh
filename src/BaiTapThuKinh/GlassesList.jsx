import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'

export default class GlassesList extends Component {
    renderGlassesList = () => {
        return dataGlasses.map((glassItem, index) => {
            return <img onClick={() => { this.props.changeGlasses(glassItem) }} className='ml-2 p-2 border border-width-1' 
            style={{ width: '110px', cursor: 'pointer' }} key={index} src={glassItem.url} alt="..." />
        });
    }

    render() {
        return <div className="bg-light container text-center mt-5 d-flex ">
            {this.renderGlassesList()}
        </div>
    }
}
