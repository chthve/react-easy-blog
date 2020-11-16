import styled from 'styled-components'

// Main container

export const ListContainer = styled.div`
  display: flex;
  position: relative;
  background-color: white;
  flex-direction: ${(props: any) =>
    props.theme.imagePosition === 'right' ? 'row-reverse' : 'row'};
  height: ${(props: any) => props.theme.size.height};
  width: ${(props: any) => props.theme.size.width};
  margin: 2rem;
  padding: 1.5rem;
`

export const Separation = styled.div`
  position: absolute;
  bottom: -15px;
  border-radius: 2px;
  left: 5%;
  height: 1px;
  width: 90%;
  background-color: ${(props: any) => props.theme.secondary};
`

// Image

export const ImageContainer = styled.div`
  height: 100%;
  width: 25%;
`

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

// Text Container

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
`

// Title

export const TitleText = styled.p`
  width: 95%;
  font-size: ${(props: any) => props.theme.largeFont};
  margin-top: 0.2rem;
  font-weight: bold;
`

// Description

export const DescriptionText = styled.p`
  margin-top: 1rem;
  width: 95%;
  font-size: ${(props: any) => props.theme.mediumFont};
`

// Info Container

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  align-self: flex-end;
`

// Info Text

export const InfoText = styled.p`
  font-size: ${(props: any) => props.theme.smallFont};
  color: ${(props: any) => props.theme.primary};
  margin: 2rem;
`
