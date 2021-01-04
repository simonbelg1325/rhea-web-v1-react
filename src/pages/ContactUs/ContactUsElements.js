import styled from 'styled-components';

export const MapContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  position relative;

  @media screen and (max-width: 768px) {
    height: 1300px;
}
`;

export const MapInfoOne = styled.div`
    position: absolute;
    top: 0px;
    left: 100px;
    height: 200px;
    width: 200px;
    display:flex;
    background-color: #00a8e9;

    @media screen and (max-width: 768px) {
        position: static;
        margin-bottom: 20px;
    }
`;

export const MapInfoTwo = styled.div`
    height: 200px;
    width: 200px;
    background-color: #00a8e9;
    margin: 0px auto;

    @media screen and (max-width: 768px) {
       margin: 0;
       margin-bottom: 20px;
    }
`;

export const MapInfoThree = styled.div`
    position: absolute;
    top: 0px;
    right: 100px;
    height: 200px;
    width: 200px;
    background-color: #00a8e9;

    @media screen and (max-width: 768px) {
       position: static;
`;


export const MapInfoContainer = styled.div`
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 20px;

    @media screen and (max-width: 768px) {
        bottom: 486px;
    }
}
`;
export const MapInfoDiv = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content
    display: flex;
    position; relative;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: 670px;
        align-items: center;
    }
}
`;

export const MapIcon = styled.div`
    width: 100%;
    height: 50px;
    font-size: 3rem;
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

export const MapInfo = styled.div`
    width: 100%;
`;

export const MapText = styled.p`
    color: #fff;
    font-size: 1rem;
    margin: 20px;
    text-align: center;
`;