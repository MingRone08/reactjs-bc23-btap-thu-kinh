import React, { Component } from 'react'
import GlassesList from './GlassesList';
import GlassOnTheLeft from './GlassOnTheLeft';
import GlassOnTheRight from './GlassOnTheRight';

export default class extends Component {

    state = {
        glassCurrent: {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glassCurrent: newGlasses
        });
    }

    render() {

        const keyframe = `@keyframes animChangeGlasses${Date.now()} {
            from {
                width: 0;
                transform: rotate(45deg);
                opacity: 0;
            }
            to {
                width: 150px;
                transform: rotate(0deg);
                opacity: 0.7;
            }
        }`;

        const styleGlasses = {
            width: '150px',
            top: '75px',
            right: '70px',
            opacity: '0.7',
            transform: 'rotate(0deg)',
            animation: `animChangeGlasses${Date.now()} 2s`
        }

        const infoGlasses = {
            width: '250px',
            top: '200px',
            left: '270px',
            paddingLeft: '15px',
            backgroundColor: 'rgba(255,127,0,.5)',
            textAlign: 'left',
            height: '105px'
        }

        return (
            <div style={{ backgroundImage: "url(./glassesImage/background.jpg)", backgroundSize: '2000px', minHeight: '2000px' }}>
                <style>
                    {keyframe}
                </style>
                <div style={{ backgroundColor: 'rgba(0,0,0,.8)', minHeight: '2000px' }}>
                    <h3 style={{ backgroundColor: 'rgba(0,0,0,.3)' }} className="text-center text-light p-5">TRY GLASSES APP ONLINE</h3>
                    <div className="container" style={{height:'305px'}}>
                        <div className="row mt-5 text-center">
                            <GlassOnTheLeft glassCurrent={this.state.glassCurrent} styleGlasses={styleGlasses} infoGlasses={infoGlasses}/>
                            <GlassOnTheRight glassCurrent={this.state.glassCurrent} styleGlasses={styleGlasses} /> 
                        </div>
                    </div>

                    <GlassesList changeGlasses={this.changeGlasses} />
                </div>
            </div>
        )
    }
}
