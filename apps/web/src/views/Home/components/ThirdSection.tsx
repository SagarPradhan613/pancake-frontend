import { useTranslation } from '@pancakeswap/localization'
import { Button, useMatchBreakpoints } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from '@pancakeswap/widgets-internal'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { styled } from 'styled-components'
import { useAccount } from 'wagmi'

const MainThirdContainer = styled.div`
  width: 100%;
  margin-top: 10rem;
  background-image: url('/Images/tradebg.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgba(0, 210, 255, 0.15);

  @media only screen and (max-width: 767px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media only screen and (min-width: 1080px) {
    padding-left: 8rem;
    padding-right: 8rem;
    display: flex;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`

const ThirdLeft = styled.div`
  padding-right: 2.5rem;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    width: 100%;
  }

  @media only screen and (min-width: 1080px) {
    width: 50%;
  }
`

const ThirdRight = styled.div`
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-top: 2.5rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    width: 100%;
    margin-top: 2.5rem;
  }

  @media only screen and (min-width: 1080px) {
    width: 50%;
  }
`
const LeftHeading = styled.p`
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

const BlueText = styled.span`
  color: #00d2ff;
  margin-left: 0.5rem;
  font-weight: 400;
`

const LeftSecHeading = styled.p`
  color: #00d2ff;

  font-weight: 400;

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
const LeftPara = styled.p`
  color: white;
  font-weight: 500;

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

const MainHeadingContainer = styled.div`
  @media only screen and (max-width: 767px) {
    line-height: 2.4rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
  }

  @media only screen and (min-width: 1080px) {
    line-height: 4rem;
  }
`
const ThirdSection = () => {
  const { t } = useTranslation()
  const { address: account } = useAccount()
  const { isMobile, isXs, isMd } = useMatchBreakpoints()
  return (
    <>
      <MainThirdContainer>
        <ThirdLeft>
          <MainHeadingContainer>
            <LeftHeading>
              Trade anything.<BlueText>No</BlueText>
            </LeftHeading>
            <LeftSecHeading>registration, no hassle</LeftSecHeading>
          </MainHeadingContainer>
          <div style={{ marginTop: '2rem' }}>
            <LeftPara>
              Lorem ipsum is a placeholder text commonly used to the visual form of a document or a typeface.
            </LeftPara>
          </div>
          <div style={{ display: 'flex ', marginTop: '3rem' }}>
            {!account && (
              <ConnectWalletButton
                style={{ borderRadius: isXs ? 12 : undefined, position: 'relative', zIndex: '10' }}
                scale="md"
                mr="15px"
              />
            )}
            <NextLinkFromReactRouter style={{ position: 'relative', zIndex: '10' }} to="/swap">
              <Button
                scale="md"
                style={{ borderRadius: isXs ? 12 : undefined }}
                variant={!account ? 'secondary' : 'primary'}
              >
                {t('Trade Now')}
              </Button>
            </NextLinkFromReactRouter>
          </div>
        </ThirdLeft>
        <ThirdRight>
          <img src="Images/traderight.png" alt="img" />
        </ThirdRight>
      </MainThirdContainer>
    </>
  )
}

export default ThirdSection
