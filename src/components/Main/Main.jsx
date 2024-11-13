import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
    return (
        <div className='main'>

            <div className='nav'>
                <p>Dapp AI</p>
                <img src={assets.user_icon} alt=''/>
            </div>

            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Sobat Dapp</span></p>
                    <p>how can i help you today</p>
                </div>


                <div className="cards">
                    <div className="card">
                        <p>suggest beautiful places to see</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>suggest beautiful places to see</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>suggest beautiful places to see</p>
                        <img src={assets.message_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>suggest beautiful places to see</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        gemini may display innacurate info
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Main
