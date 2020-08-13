import styled from 'styled-components';

// H Levels
export const HeaderOne = styled.h1`
    font-family: 'Nixie One', cursive;
    font-size: 1.5rem;
    text-align: left;
   
    @media screen and (min-width: 768px) {
        font-family: 'Nixie One', cursive;
        font-size: 3rem;
        text-align: left;
        transition: opacity 250ms ease;
            &:hover, &:focus {
                color: darkblue;
                opacity: 0.8;
            }
    }

    
`;

export const HeaderTwo = styled.h2`
    font-family: 'Libre Baskerville', serif;
    font-size: ${props => props.larger ? '1rem' : '1rem'};
    text-align: ${props => props.align ? props.align : 'initial'};
    @media screen and (min-width: 768px) {
        font-family: 'Libre Baskerville', serif;
        font-size: ${props => props.larger ? '1.5rem' : '1.5rem'};
    }
`;

export const HeaderThree = styled.h3`
font-size: 1.2rem;
margin-bottom: .5rem;
@media screen and (min-width: 768px) {
    font-size: 1.3rem;
    
}
`;

export const SmallFlex = styled.small`
    display: flex;
    > div {
        margin: 0.5rem 0 0;
    }
`;

export const BannerImage = styled.div`
    margin: 2rem 0;
    img {
        width: 100%;
        opacity: 0.5;
    }
`;

export const ProjectImage = styled.div`
    margin: 2rem 0;
    img {
        height: 150px;
        width: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
        opacity: 0.5;
        &:hover, &:focus {
        opacity: 1;
            }
        @media screen and (min-width: 768px) {
        height: 200px;
        opacity: 0.5;
        &:hover, &:focus {
        opacity: 1;
            }
       
    
}

    }
`;

export const BodyText = styled.div`
    font-family: 'Libre Baskerville', serif;
    font-size: 1rem;
    line-height: 1.8em;
    @media screen and (min-width: 768px) {
        font-family: 'Libre Baskerville', serif;
        font-size: 1.2rem;
        line-height: 2.1em;
        max-width: 800px;
        margin: 0 auto;
    }
    a {
        text-decoration: none;
            transition: opacity 250ms ease;
            &:hover, &:focus {
                opacity: 0.8;
    
        @media screen and (min-width: 768px) {
            text-decoration: none;
            transition: opacity 250ms ease;
            &:hover, &:focus {
                opacity: 0.8;
        }
    }
`;

