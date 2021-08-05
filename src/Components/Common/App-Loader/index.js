import React from 'react'
import Loader from "react-loader-spinner";
import './AppLoader.css'


const AppLoader = () => {
    return (
        <div>
            <div className="loader">
                <div className="loader-text">Loading</div>
                <Loader
                    className="loader-dots"
                    type="ThreeDots"
                    color="#7918f2"
                    height={70}
                    width={70}
                />
            </div>
        </div>
    )
}

export default AppLoader
