import { useTranslation } from '@pancakeswap/localization'
import { Button, Flex, Link, OpenNewIcon, useMatchBreakpoints } from '@pancakeswap/uikit'
import { styled } from 'styled-components'
import { useAccount } from 'wagmi'

const MainFifthContainer = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 10rem;

  @media only screen and (max-width: 767px) {
    flex-direction: column;

    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    flex-direction: column;

    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (min-width: 1080px) {
    display: flex;
    flex-direction: row;

    padding-left: 5rem;
    padding-right: 5rem;
  }
`

const MainFifthLeft = styled.div`
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media only screen and (min-width: 1080px) {
    width: 60%;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`
const FifthWhiteHead = styled.div`
  font-weight: 700;
  color: white;

  @media only screen and (max-width: 767px) {
    font-size: 2rem;
    line-height: 2.3rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1080px) {
    font-size: 3.75rem;
  }
`

const FifthBlueHead = styled.span`
  color: #00d2ff;
  font-weight: 400;

  @media only screen and (max-width: 767px) {
    font-size: 2rem;
    line-height: 3rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1080px) {
    font-size: 3.75rem;
    margin-left: 0.75rem;
    margin-top: 1rem;
  }
`
const FifthThirdHead = styled.p`
  color: white;

  font-weight: 400;
  @media only screen and (max-width: 767px) {
    font-size: 2rem;
    line-height: 3rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    font-size: 2rem;
    margin-top: 0.5rem;
  }

  @media only screen and (min-width: 1080px) {
    font-size: 3.75rem;
    margin-top: 0.75rem;
  }
`

const FifthPara = styled.div`
  color: white;

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

const FifthRight = styled.div`
  positive: relative;
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-top: 2rem;
    height: 30vh;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    width: 100%;
    height: 30vh;
  }

  @media only screen and (min-width: 1080px) {
    width: 40%;
  }
`

const CoinMainContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`
const LeftCoinConainer = styled.div`
  position: absolute;
  left: 0;
  width: 40%;
`
const RightCoinContainer = styled.div`
  position: absolute;
  right: 0%;
  width: 40%;
`
const CenterCoinContainer = styled.div`
  position: absolute;
  left: 50%;
  z-index: 20;
  transform: translate(-50%, -50%);
  top: 50%;

  @media only screen and (max-width: 767px) {
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
  }

  @media only screen and (min-width: 1080px) {
  }
`
const CoinShadow = styled.div`
  position: absolute;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  top: 50%;

  @media only screen and (max-width: 767px) {
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
  }

  @media only screen and (min-width: 1080px) {
  }
`
const CenterAndShadowContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  border: 1px solid white;
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
const FifthSection = () => {
  const { t } = useTranslation()
  const { address: account } = useAccount()
  const { isMobile, isXs, isMd } = useMatchBreakpoints()

  return (
    <>
      <MainFifthContainer>
        <div style={{ position: 'absolute', top: '-100%', right: '0' }} className="absolute top-[-100%] right-0">
          <img src="images/forthright.png" alt="img" />
        </div>
        <div style={{ position: 'absolute', top: '2.5rem', left: '5rem' }} className="absolute top-10 left-20">
          <img src="images/forthtopleft.png" alt="img" />
        </div>
        <div style={{ position: 'absolute', top: '18rem', left: '30rem' }} className="absolute top-72 left-[30rem]">
          <img src="images/forthsecondbubble.png" alt="img" />
        </div>
        <div style={{ position: 'absolute', top: '25rem', left: '14rem' }} className="absolute top-[25rem] left-56">
          <img src="images/forthsecondbubble.png" alt="img" />
        </div>
        <MainFifthLeft>
          <MainHeadContainer>
            <FifthWhiteHead>
              Unlock the full <FifthBlueHead>potential</FifthBlueHead>
            </FifthWhiteHead>
            <FifthBlueHead style={{ marginLeft: '0', display: 'block' }}>of Decentralized finance</FifthBlueHead>
            <FifthThirdHead>with hades</FifthThirdHead>
          </MainHeadContainer>
          <div style={{ marginTop: '2rem' }}>
            <FifthPara>
              Experience the power of community ownership, global governance, and explore infinite use cases within the
              PancakeSwap ecosystem
            </FifthPara>
          </div>
          <Flex justifyContent="left" style={{ gap: 14, marginTop: '3rem' }}>
            <Link
              style={{ position: 'relative', zIndex: '10' }}
              href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"
            >
              <Button variant="primary">{t('Buy CAKE')}</Button>
            </Link>
            <Link
              style={{ position: 'relative', zIndex: '10' }}
              href="https://docs.pancakeswap.finance/governance-and-tokenomics/cake-tokenomics"
            >
              <Button pl="0" endIcon={<OpenNewIcon color="primary" />} variant="text">
                {t('Learn')}
              </Button>
            </Link>
          </Flex>
        </MainFifthLeft>
        <FifthRight>
          {/* <CoinMainContainer>
                        <LeftCoinConainer>
                            <img src='images/coinleftsm.png' ></img>
                        </LeftCoinConainer>
                        <RightCoinContainer>
                            <img src='images/coinrightsm.png' ></img>
                        </RightCoinContainer>
                       
                        <CoinShadow>
                        <CenterCoinContainer>
                            <img src='images/coincentercm.png' className=''></img>
                        </CenterCoinContainer>
                            <img src='images/coinshadowsm.png'></img>
                        </CoinShadow>

                    </CoinMainContainer> */}
          <div>
            <img src="images/fullcoins.png" alt="img" />
          </div>
        </FifthRight>
      </MainFifthContainer>
    </>
  )
}

export default FifthSection
