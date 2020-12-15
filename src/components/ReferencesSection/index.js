import React from 'react';
import Icon1 from '../../images/constructiv-logo.png';
import Icon2 from '../../images/corona-direct.png';
import Icon3 from '../../images/0-basf-logo.png';
import Icon4 from '../../images/Cronos-Groep-logo.png';
import Icon5 from '../../images/g_vvsg_logo_001_kleur.png';
import Icon6 from '../../images/liantis-logo_0.png';
import Icon7 from '../../images/LibriusLogo_kl.png';
import Icon8 from '../../images/logo_vlaanderen.gif';
import Icon9 from '../../images/logo-Kind-en-Gezin.png';
import Icon10 from '../../images/logo-vertrouwen-centrum.png';
import Icon11 from '../../images/onzemerken_digitalhub-logo.jpg';
import Icon12 from '../../images/rode-kruis-logo.png';
import Icon13 from '../../images/Softn-logo.png';
import Icon14 from '../../images/taxshelter-logo.png';
import Icon15 from '../../images/telenet-logo.png';
import Icon16 from '../../images/umicore-logo.png';
import Icon17 from '../../images/vdab-logo.png';
import Icon18 from '../../images/vlamse-waterweg-logo.png';
import Icon19 from '../../images/dpgmedia-logo-rgb.png';
import Icon20 from '../../images/BOEKENBANK11.png';
import {
    ReferencesContainer,
    ReferencesCard,
    ReferencesWrapper,
    ReferencesIcon,
    ReferencesH1
} from './ReferencesElements';

const References = ({header}) =>{
    return(
        <ReferencesContainer id='references'>
            <ReferencesH1>{header}</ReferencesH1>
            <ReferencesWrapper>
                <ReferencesCard>
                    <ReferencesIcon src={Icon1} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon2} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon3} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon4} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon5} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon6} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon7} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon8} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon9} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon10} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon11} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon12} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon13} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon14} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon15} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon16} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon17} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon18} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon19} />
                </ReferencesCard>
                <ReferencesCard>
                    <ReferencesIcon src={Icon20} />
                </ReferencesCard>
            </ReferencesWrapper>
        </ReferencesContainer>
    );
};

export default References;