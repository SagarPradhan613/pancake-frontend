import { useTranslation } from '@pancakeswap/localization'
import { Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useQuery } from '@tanstack/react-query'
import { styled } from 'styled-components'
import { MetricsCard } from './MetricsCard'

const ImageLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`
const BnbBallRocket = styled.div`
  position: absolute;
  left: -65px;
  ${({ theme }) => theme.mediaQueries.xxl} {
    bottom: 151px;
    left: 20px;
  }
`
const EthBallRocket = styled.div`
  position: absolute;
  right: 0;
  top: 81px;
  ${({ theme }) => theme.mediaQueries.xxl} {
    right: 0;
    bottom: -30px;
  }
`

const AptosBallRocket = styled.div`
  position: absolute;
  top: 0px;
  right: 98px;
  ${({ theme }) => theme.mediaQueries.xxl} {
    top: 72px;
    right: 119px;
  }
`

const SecondButton = styled.div`
display:flex;
justify-content:center;
align-items:center;
border-radius: 16px;
font-size:30px;
background-color: rgba(0, 210, 255, 0.15);
padding-top:1.2rem;
padding-bottom:1.2rem;

position:relative;
z-index-10;
color:white;
margin-bottom:3rem;
margin-top:2rem;

  transition: transform 0.3s ease-in-out; /* Add a smooth transition effect */

  /* Define the scaling effect on hover */
  &:hover {
    transform: scale(1.1); /* Increase the scale factor as needed */
  }
    @media only screen and (max-width: 767px) {
      padding-left:3rem;
      padding-right:3rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding-left:4rem;
    padding-right:4rem;
  }

  @media only screen and (min-width: 1080px) {
    padding-left:4rem;
    padding-right:4rem;
  }
`

const UserBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2.5rem;

  @media only screen and (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;
    flex-direction: column;
    margin-top: 6rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    flex-direction: column;
    margin-top: 7rem;
  }

  @media only screen and (min-width: 1080px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    flex-direction: row;
    margin-top: 7rem;
  }
`

const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2.5rem;

  padding-bottom: 2.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
  background-image: url('/images/userbg.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgba(0, 210, 255, 0.15);
  border-radius: 30px;

  @media only screen and (max-width: 767px) {
    min-width: 300px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    min-width: 370px;
  }

  @media only screen and (min-width: 1080px) {
    min-width: 370px;
  }
`

const UserProfile = styled.div`
  width: 119px;
  height: 99px;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  border-radius: 20px;
  background: rgba(0, 210, 255, 0.15);
  box-shadow: 0px 4px 5px 0px rgba(0, 210, 255, 0.7);
`

const MainSecondContainer = styled.div`
  background-color: #022830;
  display: flex;
  justify-content: center;

  align-items: Center;
  flex-direction: column;
  z-index: 0;
  @media only screen and (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 6rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 8rem;
  }

  @media only screen and (min-width: 1080px) {
    padding-left: 5rem;
    padding-right: 5rem;
    margin-top: 8rem;
  }
`
const MainHeadContainer = styled.div`
  @media only screen and (max-width: 767px) {
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
  }

  @media only screen and (min-width: 1080px) {
    display: flex;
    align-items: Center;
  }
`

const Stats = () => {
  const { t } = useTranslation()
  const { data: tvl = 0 } = useQuery<number>(['tvl'], { enabled: false })
  const { data: txCount = 0 } = useQuery<number>(['totalTx30Days'], { enabled: false })
  const { data: addressCount = 0 } = useQuery<number>(['addressCount30Days'], { enabled: false })
  const { isMobile, isSm, isMd, isXxl } = useMatchBreakpoints()

  return (
    <MainSecondContainer>
      {/* <div style={{position:"absolute",right:"0",bottom:"-150%"}} className='absolute bottom-[-150%] right-0'>
          <img src='Images/secondbottomoright.png'></img>
        </div> */}
      <SecondButton>Join The Team!</SecondButton>
      <MainHeadContainer>
        <Text
          style={{ color: 'white' }}
          textAlign="center"
          lineHeight="110%"
          fontWeight={700}
          mb="4px"
          fontSize={isMobile ? '30px' : '60px'}
        >
          {t('Used By Millions.')}
        </Text>
        <Text
          style={{ color: '#00D2FF' }}
          textAlign="center"
          lineHeight="110%"
          fontWeight={400}
          fontSize={isMobile ? '30px' : '60px'}
          // mb={isMobile ? '32px' : '48px'}
        >
          {t('Trusted With Billions')}
        </Text>
      </MainHeadContainer>

      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2rem', textAlign: 'center', color: 'white' }}>
        <Text style={{ color: 'white' }} fontSize={isMobile ? '16px' : '20px'}>
          {t('Shaping the Future of Decentralized Trading:')}
        </Text>
        <Text style={{ color: 'white' }} fontSize={isMobile ? '16px' : '20px'}>
          {t('PancakeSwap’s Unstoppable Expansion')}
        </Text>
      </div>
      {/* <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={isMobile ? 'column' : 'row'}
        width={['100%', '100%', '100%', '800px']}
        style={{ gap: isMobile ? 32 : 50 }}
        mb={isMobile ? '32px' : '48px'}
        flexWrap="wrap"
      >
        <MetricsCard
          width={isSm || isMd ? '100%' : 'auto'}
          title={t('Total Users:')}
          value={addressCount}
          description={t('in the last 30 days')}
        />
        <MetricsCard title={t('Total Trades:')} value={txCount} description={t('in the last 30 days')} />
        <MetricsCard title={t('Total Value Locked:')} value={tvl} description={t('in the last 30 days')} prefix="$" />
      </Flex> */}

      <UserBoxContainer>
        <UserBox>
          <UserProfile>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="86" height="72" viewBox="0 0 86 72" fill="none">
                <g filter="url(#filter0_d_49_2431)">
                  <circle cx="67.5142" cy="22.864" r="7.41134" fill="#00D2FF" />
                  <path
                    d="M81.9663 48.6184C81.9663 44.1466 80.4436 39.858 77.7333 36.696C75.023 33.534 71.3471 31.7576 67.5141 31.7576C63.6812 31.7576 60.0053 33.534 57.295 36.696C54.5847 39.858 53.062 44.1466 53.062 48.6184L67.5141 48.6184H81.9663Z"
                    fill="#00D2FF"
                  />
                </g>
                <g filter="url(#filter1_d_49_2431)">
                  <circle cx="18.676" cy="22.864" r="7.41134" fill="#00D2FF" />
                  <path
                    d="M33.1281 48.6184C33.1281 44.1466 31.6055 39.858 28.8952 36.696C26.1849 33.534 22.5089 31.7576 18.676 31.7576C14.843 31.7576 11.1671 33.534 8.4568 36.696C5.74651 39.858 4.22388 44.1466 4.22388 48.6184L18.676 48.6184H33.1281Z"
                    fill="#00D2FF"
                  />
                </g>
                <g filter="url(#filter2_d_49_2431)">
                  <circle cx="43.0951" cy="13.9577" r="9.96697" fill="#00D2FF" />
                  <path
                    d="M62.5307 48.5929C62.5307 42.5792 60.483 36.8118 56.8381 32.5594C53.1932 28.307 48.2497 25.9181 43.0951 25.9181C37.9405 25.9181 32.9969 28.307 29.3521 32.5594C25.7072 36.8118 23.6595 42.5792 23.6595 48.5929L43.0951 48.5929H62.5307Z"
                    fill="#00D2FF"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_49_2431"
                    x="49.062"
                    y="11.4526"
                    width="36.9042"
                    height="41.1658"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_49_2431" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_49_2431" result="shape" />
                  </filter>
                  <filter
                    id="filter1_d_49_2431"
                    x="0.223877"
                    y="11.4526"
                    width="36.9042"
                    height="41.1658"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_49_2431" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_49_2431" result="shape" />
                  </filter>
                  <filter
                    id="filter2_d_49_2431"
                    x="19.6595"
                    y="-0.00927734"
                    width="46.8712"
                    height="52.6022"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_49_2431" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_49_2431" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </UserProfile>
          <MetricsCard
            width={isSm || isMd ? '100%' : 'auto'}
            title={t('Total Users')}
            value={addressCount}
            description={t('in the last 30 days')}
          />
        </UserBox>

        <UserBox>
          <UserProfile>
            <div>
              <svg width="54" height="58" viewBox="0 0 54 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.5151 56.6667C18.6698 56.6667 22.8485 52.488 22.8485 47.3334C22.8485 42.1787 18.6698 38 13.5151 38C8.36048 38 4.1818 42.1787 4.1818 47.3334C4.1818 52.488 8.36048 56.6667 13.5151 56.6667ZM14.7526 4.7929C14.0692 4.10949 12.9611 4.10949 12.2777 4.7929L1.14077 15.9298C0.457349 16.6133 0.457349 17.7213 1.14077 18.4047C1.82418 19.0881 2.93222 19.0881 3.61564 18.4047L13.5151 8.50521L23.4146 18.4047C24.098 19.0881 25.2061 19.0881 25.8895 18.4047C26.5729 17.7213 26.5729 16.6133 25.8895 15.9298L14.7526 4.7929ZM15.2651 47.3334L15.2651 6.03034L11.7651 6.03034L11.7651 47.3334L15.2651 47.3334Z"
                  fill="#00D2FF"
                />
                <path
                  d="M40.8788 2.84843C46.0334 2.84843 50.2121 7.02711 50.2121 12.1818C50.2121 17.3364 46.0334 21.5151 40.8788 21.5151C35.7241 21.5151 31.5455 17.3364 31.5455 12.1818C31.5455 7.0271 35.7241 2.84843 40.8788 2.84843ZM42.1162 54.7222C41.4328 55.4056 40.3248 55.4056 39.6413 54.7222L28.5044 43.5853C27.821 42.9019 27.821 41.7938 28.5044 41.1104C29.1878 40.427 30.2959 40.427 30.9793 41.1104L40.8788 51.0099L50.7783 41.1104C51.4617 40.427 52.5697 40.427 53.2532 41.1104C53.9366 41.7938 53.9366 42.9019 53.2532 43.5853L42.1162 54.7222ZM42.6288 12.1818L42.6288 53.4848L39.1288 53.4848L39.1288 12.1818L42.6288 12.1818Z"
                  fill="#00D2FF"
                />
                <path
                  d="M16.3278 50.0315V51.1515H11.3018V50.0315H13.2898V44.5715C13.2058 44.6835 13.0751 44.8048 12.8978 44.9355C12.7205 45.0568 12.5198 45.1735 12.2958 45.2855C12.0718 45.3975 11.8478 45.4908 11.6238 45.5655C11.3998 45.6308 11.1945 45.6635 11.0078 45.6635V44.4875C11.2131 44.4875 11.4371 44.4315 11.6798 44.3195C11.9318 44.1982 12.1745 44.0582 12.4078 43.8995C12.6411 43.7408 12.8371 43.5915 12.9958 43.4515C13.1638 43.3115 13.2618 43.2135 13.2898 43.1575H14.5498V50.0315H16.3278Z"
                  fill="black"
                  fill-opacity="0.25"
                />
                <path
                  d="M37.7347 16C37.7347 15.6267 37.7627 15.2767 37.8187 14.95C37.884 14.6233 37.996 14.3107 38.1547 14.012C38.3227 13.7133 38.556 13.4287 38.8547 13.158C39.1534 12.878 39.5407 12.6073 40.0167 12.346C40.2967 12.1873 40.5767 12.038 40.8567 11.898C41.146 11.758 41.412 11.6087 41.6547 11.45C41.9067 11.2913 42.1074 11.1187 42.2567 10.932C42.406 10.736 42.4807 10.512 42.4807 10.26C42.4807 10.0453 42.4154 9.84 42.2847 9.644C42.1634 9.43867 41.9767 9.27533 41.7247 9.154C41.482 9.02333 41.1787 8.958 40.8147 8.958C40.5347 8.958 40.278 8.99533 40.0447 9.07C39.8207 9.14467 39.6154 9.24267 39.4287 9.364C39.2514 9.476 39.0927 9.59733 38.9527 9.728C38.822 9.84933 38.71 9.96133 38.6167 10.064L37.8467 9.196C37.9214 9.112 38.0474 9 38.2247 8.86C38.402 8.71067 38.626 8.56133 38.8967 8.412C39.1674 8.26267 39.48 8.13667 39.8347 8.034C40.1987 7.922 40.5954 7.866 41.0247 7.866C41.6034 7.866 42.098 7.96867 42.5087 8.174C42.9287 8.37 43.2507 8.64067 43.4747 8.986C43.6987 9.322 43.8107 9.7 43.8107 10.12C43.8107 10.484 43.7314 10.8013 43.5727 11.072C43.4234 11.3427 43.2274 11.5807 42.9847 11.786C42.7514 11.9913 42.504 12.1687 42.2427 12.318C41.9907 12.458 41.762 12.5793 41.5567 12.682C41.1367 12.8873 40.7774 13.074 40.4787 13.242C40.18 13.41 39.9327 13.578 39.7367 13.746C39.55 13.9047 39.396 14.0727 39.2747 14.25C39.1627 14.4273 39.0787 14.6373 39.0227 14.88H43.9647V16H37.7347Z"
                  fill="black"
                  fill-opacity="0.25"
                />
              </svg>
            </div>
          </UserProfile>
          <MetricsCard title={t('Trades')} value={txCount} description={t('made in last 30 days')} />
        </UserBox>

        <UserBox>
          <UserProfile>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
                <rect x="1.5" y="24.5" width="14" height="31" rx="2.5" stroke="#00D2FF" stroke-width="3" />
                <rect x="40.5" y="24.5" width="14" height="31" rx="2.5" stroke="#00D2FF" stroke-width="3" />
                <rect x="20.5" y="35.5" width="15" height="20" rx="2.5" stroke="#00D2FF" stroke-width="3" />
                <path
                  d="M31.8573 21.3367L30.7913 20.2814V20.2814L31.8573 21.3367ZM52.5 1.99244C52.4958 1.16402 51.8209 0.495842 50.9924 0.500019L37.4926 0.568085C36.6642 0.572262 35.996 1.24721 36.0002 2.07563C36.0044 2.90405 36.6793 3.57222 37.5077 3.56805L49.5076 3.50754L49.5681 15.5074C49.5723 16.3358 50.2472 17.004 51.0756 16.9998C51.904 16.9956 52.5722 16.3207 52.568 15.4923L52.5 1.99244ZM2.17933 15.0417C1.48589 15.495 1.29117 16.4245 1.74441 17.118C2.19766 17.8114 3.12723 18.0061 3.82067 17.5529L2.17933 15.0417ZM9.97281 11.7397L10.7935 12.9953H10.7935L9.97281 11.7397ZM16.3327 12.4806L15.2454 13.5139L16.3327 12.4806ZM24.6797 21.2635L23.5924 22.2968L24.6797 21.2635ZM32.9233 22.392L52.066 3.0553L49.934 0.944701L30.7913 20.2814L32.9233 22.392ZM3.82067 17.5529L10.7935 12.9953L9.15214 10.4842L2.17933 15.0417L3.82067 17.5529ZM15.2454 13.5139L23.5924 22.2968L25.767 20.2301L17.42 11.4473L15.2454 13.5139ZM10.7935 12.9953C12.2081 12.0707 14.0812 12.2889 15.2454 13.5139L17.42 11.4473C15.258 9.1723 11.7792 8.76707 9.15214 10.4842L10.7935 12.9953ZM30.7913 20.2814C29.402 21.6848 27.1274 21.6616 25.767 20.2301L23.5924 22.2968C26.1189 24.9552 30.3431 24.9983 32.9233 22.392L30.7913 20.2814Z"
                  fill="#00D2FF"
                />
              </svg>
            </div>
          </UserProfile>
          <MetricsCard title={t('Staked')} value={tvl} description={t('Total value locked')} prefix="$" />
        </UserBox>
      </UserBoxContainer>
      {/* <ChainTags /> */}
      {/* <ImageLayer>
        <BnbBallRocket>
          <Image
            src={`${ASSET_CDN}/web/landing/bnb-ball-rocket.png`}
            alt="bnbBallRocket"
            width={144}
            height={168}
            unoptimized
          />
        </BnbBallRocket>
        <EthBallRocket>
          <Image
            src={`${ASSET_CDN}/web/landing/eth-ball-rocket.png`}
            alt="ethBallRocket"
            width={isXxl ? 116 : 70}
            height={isXxl ? 230 : 140}
            unoptimized
          />
        </EthBallRocket>
        <AptosBallRocket>
          <Image
            src={`${ASSET_CDN}/web/landing/aptos-ball-rocket.png`}
            alt="aptosBallRocket"
            width={isXxl ? 84 : 53}
            height={isXxl ? 101 : 64}
            unoptimized
          />
        </AptosBallRocket>
      </ImageLayer> */}
    </MainSecondContainer>
  )
}

export default Stats
