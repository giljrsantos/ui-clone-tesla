import styled from 'styled-components';
//background image desktop
import modelY from '../../assets/modelY.jpg'
import modelX from '../../assets/modelX.jpg'
import model3 from '../../assets/model3.jpg'
import modelS from '../../assets/modelS.jpg'
import SolarPanels from '../../assets/SolarPanels.jpg'
import SolarRoof from '../../assets/SolarRoof.jpg'
import accessories from '../../assets/accessories.jpg'

//background-image mobile;
import mobilemodelY from '../../assets/Mobile-ModelY.jpg'
import MobileModelX from '../../assets/Mobile-ModelX.jpg'
import MobileModel3 from '../../assets/Mobile-Model3.jpg'
import MobileModelS from '../../assets/Mobile-ModelS.jpg'
import MobileSolarPanels from '../../assets/Mobile-SolarPanels.jpg'
import MobileSolarRoof from '../../assets/Mobile-SolarRoof.jpg'
import MobileAccessories from '../../assets/Mobile-Accessories.jpg'

export const Container = styled.div`
    .colored:nth-child(1) {
    background: #f1ffe7;
    background-image: url(${modelY});
    background-size: cover;
    background-position: center;
    }

    .colored:nth-child(2) {
    background: #dfffd9;
    background-image: url(${modelX});
    background-size: cover;  
    background-position: center;  
    }
    .colored:nth-child(3) {
    background: #cdfeca;
    background-image: url(${model3});
    background-size: cover; 
    background-position: center;   
    }
    .colored:nth-child(4) {
    background: #bbfebb;
    background-image: url(${modelS});
    background-size: cover;
    background-position: center; 
    }
    .colored:nth-child(5) {
    background: #a9fdac;
    background-image: url(${SolarPanels});
    background-size: cover;
    background-position: center; 
    }
    .colored:nth-child(6) {
    background: #90f29c;
    background-image: url(${SolarRoof});
    background-size: cover;
    background-position: center;    
    }
    .colored:nth-child(7) {
    background: #77e68c;
    background-image: url(${accessories});
    background-size: cover;
    background-position: center;    
    } 

    @media(max-width: 600px){
        .colored:nth-child(1) {
            background: #f1ffe7;
            background-image: url(${mobilemodelY});
            background-size: cover;
            background-position: center;
        }
        .colored:nth-child(2) {
            background: #f1ffe7;
            background-image: url(${MobileModelX});
            background-size: cover;
            background-position: center;
        }
        .colored:nth-child(3) {
            background: #bbfebb;
            background-image: url(${MobileModel3});
            background-size: cover;
            background-position: center;    
        }
        .colored:nth-child(4) {
            background: #a9fdac;
            background-image: url(${MobileModelS});
            background-size: cover;
            background-position: center;    
        }
        .colored:nth-child(5) {
            background: #90f29c;
            background-image: url(${MobileSolarPanels});
            background-size: cover;
            background-position: center;    
        }
        .colored:nth-child(6) {
            background: #77e68c;
            background-image: url(${MobileSolarRoof});
            background-size: cover;
            background-position: center;    
        }         
        .colored:nth-child(7) {
            background: #77e68c;
            background-image: url(${MobileAccessories});
            background-size: cover;
            background-position: center;    
        }         
    }    
`;

export const Spacer = styled.div`
    height: 15vh;
    background: #fff;
`;
