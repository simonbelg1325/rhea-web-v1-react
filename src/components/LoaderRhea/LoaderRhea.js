import React from 'react';
import Loader from 'react-loader-spinner';
import {LoaderContainer, SpinnerHolder } from './LoaderRheaElements';

const LoaderRhea = () => {
    return (
        <LoaderContainer>
            <SpinnerHolder>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={200}
                    width={200}
                    timeout={3000} //3 secs
                />
            </SpinnerHolder>
        </LoaderContainer>
    )
}

export default LoaderRhea
