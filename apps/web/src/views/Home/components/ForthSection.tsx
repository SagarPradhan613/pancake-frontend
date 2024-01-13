import { styled } from 'styled-components'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from '@pancakeswap/localization'
import { Button, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from '@pancakeswap/widgets-internal'
import { useAccount } from 'wagmi'

const MainForthContainer = styled.div`
  position: relative;
  display: flex;

  @media only screen and (max-width: 767px) {
    padding-top: 2.5rem;
    padding-bottom: 3rem;
    flex-direction: column;
    margin-top: 2rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding-top: 2.5rem;
    padding-bottom: 3rem;
    flex-direction: column;
    margin-top: 2rem;
  }

  @media only screen and (min-width: 1080px) {
    padding-top: 5rem;
    padding-bottom: 15rem;
    padding-left: 3rem;
    flex-direction: row;
    margin-top: 7rem;
  }
`

const ForthLeft = styled.div`
  position: relative;

  @media only screen and (max-width: 767px) {
    width: 100%;
    height: 60vw;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    width: 100%;
    height: 70vw;
  }

  @media only screen and (min-width: 1080px) {
    padding-left: 1.5rem;
    width: 50%;
  }
`

const LeftImageContainer = styled.div`
  position: absolute;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const ForthRight = styled.div`
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin-top: 5rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    width: 100%;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin-top: 5rem;
  }

  @media only screen and (min-width: 1080px) {
    padding-left: 1.5rem;
    width: 50%;
    padding-left: 6rem;
    padding-right: 6rem;
  }
`

const FourthHeadWhite = styled.p`
  color: white;
  font-weight: 700;
  @media only screen and (max-width: 767px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1080px) {
    font-size: 3.75rem;
  }
`

const FourthHeadBlue = styled.span`
  color: #00d2ff;
  font-weight: 400;
  margin-left: 0.75rem;

  @media only screen and (max-width: 767px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1080px) {
    font-size: 3.75rem;
  }
`

const FourthHeadBlueSec = styled.p`
color:#00D2FF;
font-weight:400;
margin-top::0.75rem;

@media only screen and (max-width: 767px) {
    font-size:2rem;
}

@media only screen and (min-width:768px) and (max-width:1080px){
    font-size:2rem;
}

@media only screen and (min-width:1080px){
   font-size:3.75rem;
} 
`

const ForthSecPara = styled.p`
  color: white;
  font-weight: 400;

  @media only screen and (max-width: 767px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  @media only screen and (min-width: 1080px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`

const MainHeadContainer = styled.div`
  @media only screen and (max-width: 767px) {
    line-height: 3rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    line-height: 3rem;
  }

  @media only screen and (min-width: 1080px) {
    line-height: 4rem;
  }
`

const ForthSection = () => {
  const { t } = useTranslation()
  const { address: account } = useAccount()
  const { isMobile, isXs, isMd } = useMatchBreakpoints()
  return (
    <>
      <MainForthContainer>
        <div style={{ position: 'absolute', top: '-80%', left: '0' }} className="absolute top-[-80%] left-0">
          <img src="Images/thirdlefttop.png" alt="img" />
        </div>
        <div style={{ position: 'absolute', top: '8rem', right: '35rem' }} className="absolute top-32 right-[35rem]">
          <img src="Images/thirdright.png" alt="img" />
        </div>
        <div style={{ position: 'absolute', top: '24rem', right: '25rem' }} className="absolute top-96 right-[25rem]">
          <img src="Images/thirdrightbottom.png" alt="img" />
        </div>
        <div style={{ position: 'absolute', top: '20rem', right: '15rem' }} className="absolute top-80 right-[15rem]">
          <img src="Images/thirdrighttop.png" alt="img" />
        </div>
        <ForthLeft>
          <LeftImageContainer>
            <img
              src="Images/wings.png"
              style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              alt="img"
            />
            <img src="Images/logo.png" style={{ width: '20%', marginTop: '45%' }} alt="img" />
            <img src="Images/shadow.png" style={{ width: '25%', marginTop: '-5%' }} alt="img" />
          </LeftImageContainer>
          <div />
        </ForthLeft>
        <ForthRight>
          <MainHeadContainer>
            <FourthHeadWhite>
              Discover <FourthHeadBlue>The</FourthHeadBlue>
            </FourthHeadWhite>
            <FourthHeadBlueSec>hade’s ecosystem</FourthHeadBlueSec>
          </MainHeadContainer>
          <div style={{ marginTop: '2rem' }}>
            <ForthSecPara>
              Lorem ipsum is a placeholder text commonly used to the visual form of a document or a typeface.
            </ForthSecPara>
          </div>
          <div style={{ display: 'flex ', marginTop: '3rem' }}>
            {!account && (
              <ConnectWalletButton
                style={{ borderRadius: isXs ? 12 : undefined, position: 'relative', zIndex: '10' }}
                scale="md"
                mr="15px"
              />
            )}
            <NextLinkFromReactRouter to="/swap">
              <Button
                scale="md"
                style={{ borderRadius: isXs ? 12 : undefined, position: 'relative', zIndex: '10' }}
                variant={!account ? 'secondary' : 'primary'}
              >
                {t('Trade Now')}
              </Button>
            </NextLinkFromReactRouter>
          </div>
        </ForthRight>
      </MainForthContainer>
    </>
  )
}

export default ForthSection
