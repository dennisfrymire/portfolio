import styled from 'styled-components';

// H Levels
export const HeaderOne = styled.h1`
    font-size: 4rem;
    text-align: left;
   
    @media screen and (min-width: 768px) {
        font-size: 6rem;
        text-align: left;
    }

    
`;

export const HeaderTwo = styled.h2`
    font-size: ${props => props.larger ? '2rem' : '1.6rem'};
    text-align: ${props => props.align ? props.align : 'initial'};
    @media screen and (min-width: 768px) {
        font-size: ${props => props.larger ? '3.5rem' : '2.5rem'};
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
    font-size: 1rem;
    line-height: 1.8em;
    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
        line-height: 2.1em;
        max-width: 800px;
        margin: 0 auto;
    }
`;

