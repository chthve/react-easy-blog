import styled from 'styled-components'

// Main container

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: ${(props: any) => props.theme.height};
  width: ${(props: any) => props.theme.width};
  margin-top: 2rem;
  min-width: 400px;
  min-height: 350px;
  max-width: 1000px;
  max-height: 1000px;
`

// Image

export const BannerImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

// Text Container

export const BannerTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: ${(props: any) =>
    props.theme.style === 2 ? 'absolute' : 'relative'};
  bottom: ${(props: any) => (props.theme.style === 2 ? '0' : '')};
  width: ${(props: any) => (props.theme.style === 2 ? '100%' : '80%')};
  height: ${(props: any) => (props.theme.style === 2 ? '40%' : '70%')};
  font-family: ${(props: any) => props.theme.fontFamily};
  border: none;
  border-radius: none;
  background-color: rgb(255, 255, 255, 0.2);
  box-shadow: ${(props: any) =>
    props.theme.style === 2 ? '' : '0 25px 60px rgba(0,0,0,.8)'};
`

// Title

export const BannerTitle = styled.p`
  font-size: ${(props: any) => props.theme.largeFont};
  font-weight: bold;
  width: 85%;
  margin: 1rem;
  text-align: center;
  color: ${(props: any) => props.theme.fontColor};
`

// Description

export const BannerDescription = styled.p`
  font-size: ${(props: any) => props.theme.mediumFont};
  font-weight: regular;
  margin: 1rem;
  width: 85%;
  text-align: center;
  color: ${(props: any) => props.theme.fontColor};
`

// Button

export const BannerButton = styled.button`
  background: transparent;
  color: ${(props: any) => props.theme.fontColor};
  font-weight: bold;
  font-size: ${(props: any) => props.theme.mediumFont};
  padding: 1rem 2rem;
  margin: 1rem;
  border: solid 1px ${(props: any) => props.theme.fontColor};
  outline: none;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: ${(props: any) =>
      props.theme.hoverButton ? props.theme.fontColor : 'transparent'};
    color: ${(props: any) =>
      props.theme.hoverButton ? props.theme.primary : props.theme.fontColor};
`

export const Route = styled.a`
  cursor: pointer;
`
