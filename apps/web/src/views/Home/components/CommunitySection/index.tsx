import { useTranslation } from '@pancakeswap/localization'
import { Flex, Heading, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import { styled } from 'styled-components'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CommunitySummary, { sharedCss } from './CommunitySummary'
import { CommunityTags } from './CommunityTags'
import { BlogCard, TwitterCards } from './TwitterCards'
import { LeftBottomBox, RightBottomBox } from './ImagesOnBg'

const TransparentFrame = styled.div<{ isDark: boolean }>`
  position: relative;
  z-index: 2;
  background: ${({ theme }) => (theme.isDark ? 'rgba(0, 0, 0, 0.80)' : ' rgba(255, 255, 255, 0.8)')};
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  border-radius: 72px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 40px;
  }
`

const StyledSwiper = styled(Swiper)`
  width: 340px;
  position: relative;
  padding-bottom: 3px;
  .swiper-pagination {
    position: absolute;
    bottom: 24px;
    left: 24px;
    width: 72px;
    display: flex;
    height: 8px;
    border-radius: 24px;
    span {
      width: 50%;
      margin: 0 !important;
      border-radius: 24px;
      background-color: rgba(122, 110, 170, 0.7);
      &:first-child {
        border-radius: 4px 0px 0px 4px;
      }
      &:last-child {
        border-radius: 0px 4px 4px 0px;
      }
      &.swiper-pagination-bullet-active {
        background-color: #7645d9;
      }
    }
  }
  ${sharedCss}
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`
const MainCommunity = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 10rem;
    margin-bottom: 15rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 18rem;
    margin-bottom: 25rem;
  }

  @media only screen and (min-width: 1080px) {
    padding-left: 5rem;
    padding-right: 5rem;
    margin-top: 18rem;
    margin-bottom: 25rem;
  }
`

const SixthHeaderWhite = styled.div`
  color: white;
  font-weight: 700;
  display: flex;
  @media only screen and (max-width: 767px) {
    font-size: 2.25rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    font-size: 2.25rem;
  }

  @media only screen and (min-width: 1080px) {
    font-size: 3.75rem;
  }
`

const SixthHeaderBlue = styled.div`
  color: #00d2ff;
  font-weight: 400;
  margin-left: 1rem;
  @media only screen and (max-width: 767px) {
    font-size: 2.25rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    font-size: 2.25rem;
  }

  @media only screen and (min-width: 1080px) {
    font-size: 3.75rem;
  }
`

const CommunityFigureContainer = styled.div`
  background-image: url('/images/community-bg.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgba(0, 210, 255, 0.15);
  border-radius: 30px;
  margin-top: 5rem;
  width: 80%;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  @media only screen and (max-width: 767px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media only screen and (min-width: 1080px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`

const CommunityFigure = styled.div`
  background-image: url('/images/community-figure.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgba(0, 210, 255, 0.15);
  border-radius: 30px;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 1080px) {
    flex-direction: row;
  }
`

const CommunityMemberContainer = styled.div`
  color: white;

  justify-content: center;
  items-align: center;
  text-align: center;
`

const MultilingualContainer = styled.div`
  color: white;

  justify-content: center;
  items-align: center;
  text-align: center;

  @media only screen and (max-width: 767px) {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media only screen and (min-width: 1080px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const CommunitySocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 5rem;

  @media only screen and (min-width: 1080px) {
    padding-left: 7rem;
    padding-right: 7rem;
  }
`
const CommunityTextContainer = styled.div`
  display: flex;
  color: white;
  opacity: 0.5;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
`

const HideinMob = styled.div`
  @media only screen and (max-width: 767px) {
    display: none;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    display: none;
  }

  @media only screen and (min-width: 1080px) {
    display: block;
  }
`

const AnimationContainer = styled.div`
  transition: transform 0.3s ease-in-out; /* Add a smooth transition effect */

  /* Define the scaling effect on hover */
  &:hover {
    transform: scale(1.1); /* Increase the scale factor as needed */
  }
`
const CommunitySection = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const { isMobile } = useMatchBreakpoints()

  return (
    <>
      {/* <BgWrapper>
        <RightBottomBox />
        <LeftBottomBox />
      </BgWrapper> */}
      {/* <TransparentFrame isDark={theme.isDark}>
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <Flex
            style={{ gap: isMobile ? 0 : 8 }}
            justifyContent="center"
            alignItems="center"
            flexDirection={isMobile ? 'column' : 'row'}
            mb="12px"
          >
            <Heading scale="xl">{t('Join our')}</Heading>{' '}
            <Heading color={theme.isDark ? '#A881FC' : theme.colors.secondary} scale="xl">
              {t('Community')}
            </Heading>
          </Flex>
          <Text mb="40px" color="textSubtle" fontWeight={600} textAlign="center">
            {t('Together we can make the PancakeSwap community even stronger')}
          </Text>
          <Flex flexDirection="row" flexWrap="wrap" alignItems="center" style={{ gap: 24 }} justifyContent="center">
            <CommunitySummary />
            <StyledSwiper
              modules={[Autoplay, Pagination, EffectFade]}
              spaceBetween={50}
              observer
              slidesPerView={1}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={500}
              autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
              loop
              pagination={{ clickable: true }}
            >
              <SwiperSlide key="TwitterCards">
                <TwitterCards />
              </SwiperSlide>
              <SwiperSlide key="BlogCard">
                <BlogCard />
              </SwiperSlide>
            </StyledSwiper>
          </Flex>
        </Flex>

        <CommunityTags />
      </TransparentFrame> */}

      <MainCommunity>
        <div style={{ position: 'absolute', top: '-100%', right: '0' }} className="absolute top-[-100%] right-0">
          <img src="images/sixthtop.png" alt="img" />
        </div>
        <div style={{ position: 'absolute', top: '0', left: '0' }} className="absolute top-0 left-0">
          <img src="images/sixthleft.png" alt="img" />
        </div>
        <div style={{ position: 'absolute', bottom: '-100%', right: '0' }} className="absolute bottom-[-100%] right-0">
          <img src="images/fifthright.png" alt="img" />
        </div>
        <HideinMob
          style={{ position: 'absolute', top: '0', left: '-5%' }}
          className="absolute hidden lg:block top-0 left-[-5%]"
        >
          <img src="images/twittermask.png" alt="img" />
        </HideinMob>
        <HideinMob
          style={{ position: 'absolute', top: '-20%', left: '13rem' }}
          className="absolute hidden lg:block top-[-20%] left-52"
        >
          <img src="images/instamask.png" alt="img" />
        </HideinMob>
        <div style={{ position: 'absolute', top: '-3%', left: '30%' }} className="absolute top-[-3%] left-[30%]">
          <img src="images/joinleftbubble.png" alt="img" />
        </div>
        <HideinMob
          style={{ position: 'absolute', top: '-20%', left: '40rem' }}
          className="absolute hidden lg:block top-[-20%] left-[40rem]"
        >
          <img src="images/discordmask.png" alt="img" />
        </HideinMob>
        <HideinMob
          style={{ position: 'absolute', top: '-10%', left: '50rem' }}
          className="absolute hidden lg:block top-[-10%] left-[50rem]"
        >
          <img src="images/redditmask.png" alt="img" />
        </HideinMob>
        <div style={{ position: 'absolute', top: '-10%', left: '60rem' }} className="absolute  top-[-10%] left-[60rem]">
          <img src="images/jointopbubble.png" alt="img" />
        </div>
        <HideinMob
          style={{ position: 'absolute', top: '-10%', right: '-5%' }}
          className="absolute hidden lg:block top-[-10%] right-[-5%]"
        >
          <img src="images/youtubemask.png" alt="img" />
        </HideinMob>
        <HideinMob
          style={{ position: 'absolute', top: '20rem', right: '0' }}
          className="absolute hidden lg:block top-80 right-0"
        >
          <img src="images/telemask.png" alt="img" />
        </HideinMob>

        <SixthHeaderWhite>
          Join our <SixthHeaderBlue>Community</SixthHeaderBlue>{' '}
        </SixthHeaderWhite>

        <CommunityFigureContainer>
          <CommunityFigure>
            <CommunityMemberContainer>
              <p style={{ fontSize: '2.25rem' }}> 1.8M +</p>
              <p style={{ marginTop: '1.5rem' }}>Community Members</p>
            </CommunityMemberContainer>
            <MultilingualContainer>
              <p style={{ fontSize: '2.25rem' }}> 15 +</p>
              <p style={{ marginTop: '1.5rem' }}>Multilingual Communities</p>
            </MultilingualContainer>
            <CommunityMemberContainer>
              <p style={{ fontSize: '2.25rem' }}> 35 +</p>
              <p style={{ marginTop: '1.5rem' }}>Community Ambassadors</p>
            </CommunityMemberContainer>
          </CommunityFigure>
          <CommunitySocialContainer>
            <img
              className="transition-transform duration-500 transform hover:scale-110"
              src="images/twitter.png"
              alt="img"
            />
            <img
              className="transition-transform duration-500 transform hover:scale-110"
              src="images/tele.png"
              alt="img"
            />
            <img
              className="transition-transform duration-500 transform hover:scale-110"
              src="images/tele.png"
              alt="img"
            />
            <img
              className="transition-transform duration-500 transform hover:scale-110"
              src="images/discord.png"
              alt="img"
            />

            <img
              className="transition-transform duration-500 transform hover:scale-110"
              src="images/insta.png"
              alt="img"
            />
            <img
              className="transition-transform duration-500 transform hover:scale-110"
              src="images/youtube.png"
              alt="img"
            />
            <img
              className="transition-transform duration-500 transform hover:scale-110"
              src="images/reddit.png"
              alt="img"
            />
          </CommunitySocialContainer>

          <CommunityTextContainer>
            <p style={{ textAlign: 'center' }}>Join the hades community and become a part of hades army!</p>
          </CommunityTextContainer>
        </CommunityFigureContainer>
      </MainCommunity>
    </>
  )
}

export default CommunitySection
