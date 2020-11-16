import styled from 'styled-components'

// Card Styling

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props: any) => props.theme.backgroundColor};
  height: ${(props: any) => props.theme.size.height};
  width: ${(props: any) => props.theme.size.width};
  border: ${(props: any) =>
    props.theme.border ? `solid 1px ${props.theme.primary}` : 'none'};
  font-family: ${(props: any) => props.theme.fontFamily};
  margin-top: 2rem;
`

// Image Styling

export const ImageContainer = styled.div`
  position: relative;
  width: ${(props: any) => props.theme.size.width};
  background-color: orange;
  height: 100%;
`

export const Img = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`

// Social Media Styling

export const SocialMediaContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  height: 9%;
  background-color: ${(props: any) =>
    props.theme.socialMediaBackground ? props.theme.primary : 'none'};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  bottom: 0;
  right: 27.5%;
`

export const Button = styled.button`
  height: ${(props: any) =>
    props.theme.socialMediaBackground ? '65%' : '80%'};
  width: auto;
  font-size: 0.75rem;
  padding: 0 0.4rem;
  margin-bottom: ${(props: any) =>
    props.theme.socialMediaBackground ? 'none' : '0.5rem'};
  background-color: ${(props: any) => props.theme.secondary};
  color: ${(props: any) => props.theme.primary};
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
`

// Text Container Style

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  align-self: flex-end;
`

// Category Style

export const CategoryText = styled.p`
  font-size: ${(props: any) => props.theme.smallFont};
  color: ${(props: any) => props.theme.primary};
  margin: 1rem;
  text-align: center;
`

// Title Style

export const TitleText = styled.p`
  font-size: ${(props: any) => props.theme.largeFont};
  font-weight: bold;
  margin: 1rem;
  color: ${(props: any) => props.theme.fontColor};
  text-align: left;
  width: 95%;
`

// Description Style

export const DescriptionText = styled.p`
  font-size: ${(props: any) => props.theme.mediumFont};
  color: ${(props: any) => props.theme.fontColor};
  text-align: left;
  width: 95%;
`

// Info Text

export const InfoText = styled.p`
  font-size: ${(props: any) => props.theme.smallFont};
  color: ${(props: any) => props.theme.primary};
  margin: 2rem;
`
