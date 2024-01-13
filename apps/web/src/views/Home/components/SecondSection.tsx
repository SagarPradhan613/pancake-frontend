import { styled } from 'styled-components'

const MainSeconContainer = styled.div`
  margin-top: 5rem;
  @media only screen and (max-width: 767px) {
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
  }

  @media only screen and (min-width: 1080px) {
  }
`

const FirstLineCont = styled.div`
  display: flex;
  width: 100%;
  color: white;
  overflow: hidden;
  gap: 8rem;
  rotate: -3deg;
`

const FirstLine = styled.p`
  @keyframes moveRightToRight {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  animation: moveRightToRight 5s linear infinite;
  white-space: nowrap;
  opacity: 0.5;
`
const SecondLineCont = styled.div`
    position:relative;
    border-left:0;
    border-rightL0;
    width:100%;
    color:white;
    margin-top:10px;
    margin-bottom:10px;
    rotate:-3deg;
    padding-top:1.3rem;
    padding-bottom:1.3rem;
    border:1px solid white;
background: linear-gradient(to right, #1e4144, #216d74);
`

const LeftAnimation = styled.div`
  display: flex;
  gap: 5rem;
`
const CenterContText = styled.p`
  white-space: nowrap;
  @keyframes moveRightToLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  animation: moveRightToLeft 5s linear infinite;
`

const SecondButton = styled.div`
  border-radius: 16px;
  font-size: 30px;
  background-color: rgba(0, 210, 255, 0.15);
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  padding-left: 4rem;
  padding-right: 4rem;
  color: white;
  margin-bottom: 3rem;
  margin-top: 2rem;
`
const MainSecondContainer = styled.div`
  background-color: #022830;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  align-items: Center;
  flex-direction: column;

  @media only screen and (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (min-width: 1080px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`

const SecondSection = () => {
  return (
    <>
      <MainSeconContainer>
        <FirstLineCont>
          <FirstLine>Hot and Trending Hight APR Farms Available To Stake Tokens.</FirstLine>
          <FirstLine>Hot and Trending Hight APR Farms Available To Stake Tokens.</FirstLine>
          <FirstLine>Hot and Trending Hight APR Farms Available To Stake Tokens.</FirstLine>
          <FirstLine>Hot and Trending Hight APR Farms Available To Stake Tokens.</FirstLine>
          <FirstLine>Hot and Trending Hight APR Farms Available To Stake Tokens.</FirstLine>
          <FirstLine>Hot and Trending Hight APR Farms Available To Stake Tokens.</FirstLine>
        </FirstLineCont>

        <SecondLineCont>
          <LeftAnimation>
            <CenterContText>METIS-USD LP ( 1000% APR )</CenterContText>
            <CenterContText>METIS-USD LP ( 1000% APR )</CenterContText>
            <CenterContText>METIS-USD LP ( 1000% APR )</CenterContText>
            <CenterContText>METIS-USD LP ( 1000% APR )</CenterContText>
            <CenterContText>METIS-USD LP ( 1000% APR )</CenterContText>
            <CenterContText>METIS-USD LP ( 1000% APR )</CenterContText>
            <CenterContText>METIS-USD LP ( 1000% APR )</CenterContText>
            <CenterContText>METIS-USD LP ( 1000% APR )</CenterContText>
            <CenterContText>METIS-USD LP ( 1000% APR )</CenterContText>
            <CenterContText>METIS-USD LP ( 1000% APR )</CenterContText>
            <CenterContText>METIS-USD LP ( 1000% APR )</CenterContText>
            <CenterContText>METIS-USD LP ( 1000% APR )</CenterContText>
          </LeftAnimation>
        </SecondLineCont>

        <FirstLineCont>
          <FirstLine>Hot and Trending Hight APR Farms Available To Stake Tokens.</FirstLine>
          <FirstLine>Hot and Trending Hight APR Farms Available To Stake Tokens.</FirstLine>
          <FirstLine>Hot and Trending Hight APR Farms Available To Stake Tokens.</FirstLine>
          <FirstLine>Hot and Trending Hight APR Farms Available To Stake Tokens.</FirstLine>
          <FirstLine>Hot and Trending Hight APR Farms Available To Stake Tokens.</FirstLine>
          <FirstLine>Hot and Trending Hight APR Farms Available To Stake Tokens.</FirstLine>
        </FirstLineCont>
      </MainSeconContainer>
    </>
  )
}

export default SecondSection
