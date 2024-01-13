import { ChainId } from '@pancakeswap/chains'
import { useIntersectionObserver } from '@pancakeswap/hooks'
import { useTranslation } from '@pancakeswap/localization'
import { cakeVaultV2ABI } from '@pancakeswap/pools'
import { bscTokens } from '@pancakeswap/tokens'
import { Balance, Flex, Heading, Skeleton, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { formatBigInt, formatLocalisedCompactNumber, formatNumber } from '@pancakeswap/utils/formatBalance'
import { useQuery } from '@tanstack/react-query'
import { SLOW_INTERVAL } from 'config/constants'
import { useCakePrice } from 'hooks/useCakePrice'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { getCakeVaultAddress } from 'utils/addressHelpers'
import { publicClient } from 'utils/wagmi'
import { useCakeEmissionPerBlock } from 'views/Home/hooks/useCakeEmissionPerBlock'
import { erc20ABI } from 'wagmi'

const StyledColumn = styled(Flex)<{ noMobileBorder?: boolean; noDesktopBorder?: boolean }>`
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
    border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }
  &:nth-child(2n) {
    border-right: none;
  }
  width: 50%;
  ${({ theme }) => theme.mediaQueries.sm} {
    &:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
      border-bottom: none;
    }
    &:nth-child(3) {
      border-right: none;
    }
    width: 33%;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: auto;
    &:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
    }
  }
`
const StyledWrapper = styled(Flex)`
  margin-top: 24px;
  flex-direction: row;
  flex-wrap: wrap;
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`

const MainSixthContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;
    // margin-top:40rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding-left: 2rem;
    padding-right: 2rem;
    // margin-top:40rem;
  }

  @media only screen and (min-width: 1080px) {
    padding-left: 5rem;
    padding-right: 5rem;
    // margin-top:20rem;
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

const FigureBoxContainer = styled.div`
  margin-top: 7rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  row-gap: 2.5rem;
`
const FigureBox = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 186px;
  background-image: url('/Images/figureboxbg.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgba(0, 210, 255, 0.15);
  border-radius: 30px;
`

const FigureHead = styled.div`
  color: #fff;
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 115%; /* 46px */
`
/**
 * User (Planet Finance) built a contract on top of our original manual CAKE pool,
 * but the contract was written in such a way that when we performed the migration from Masterchef v1 to v2, the tokens were stuck.
 * These stuck tokens are forever gone (see their medium post) and can be considered out of circulation."
 * https://planetfinanceio.medium.com/pancakeswap-works-with-planet-to-help-cake-holders-f0d253b435af
 * https://twitter.com/PancakeSwap/status/1523913527626702849
 * https://bscscan.com/tx/0xd5ffea4d9925d2f79249a4ce05efd4459ed179152ea5072a2df73cd4b9e88ba7
 */
const planetFinanceBurnedTokensWei = 637407922445268000000000n
const cakeVaultAddress = getCakeVaultAddress()

const CakeDataRow = () => {
  const { t } = useTranslation()
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const [loadData, setLoadData] = useState(false)
  const emissionsPerBlock = useCakeEmissionPerBlock(loadData)
  const { isMobile } = useMatchBreakpoints()

  const {
    data: { cakeSupply, burnedBalance, circulatingSupply } = {
      cakeSupply: 0,
      burnedBalance: 0,
      circulatingSupply: 0,
    },
  } = useQuery(
    ['cakeDataRow'],
    async () => {
      const [totalSupply, burned, totalLockedAmount] = await publicClient({ chainId: ChainId.BSC }).multicall({
        contracts: [
          { abi: erc20ABI, address: bscTokens.cake.address, functionName: 'totalSupply' },
          {
            abi: erc20ABI,
            address: bscTokens.cake.address,
            functionName: 'balanceOf',
            args: ['0x000000000000000000000000000000000000dEaD'],
          },
          {
            abi: cakeVaultV2ABI,
            address: cakeVaultAddress,
            functionName: 'totalLockedAmount',
          },
        ],
        allowFailure: false,
      })
      const totalBurned = planetFinanceBurnedTokensWei + burned
      const circulating = totalSupply - (totalBurned + totalLockedAmount)

      return {
        cakeSupply: totalSupply && burned ? +formatBigInt(totalSupply - totalBurned) : 0,
        burnedBalance: burned ? +formatBigInt(totalBurned) : 0,
        circulatingSupply: circulating ? +formatBigInt(circulating) : 0,
      }
    },
    {
      enabled: Boolean(loadData),
      refetchInterval: SLOW_INTERVAL,
    },
  )
  const cakePriceBusd = useCakePrice()
  const mcap = cakePriceBusd.times(circulatingSupply)
  const mcapString = formatLocalisedCompactNumber(mcap.toNumber(), isMobile)

  useEffect(() => {
    if (isIntersecting) {
      setLoadData(true)
    }
  }, [isIntersecting])

  return (
    <>
      <MainSixthContainer>
        <div style={{ position: 'absolute', top: '-100%', left: '0' }} className="absolute top-[-100%] left-0">
          <img src="Images/fifthtopleft.png" alt="img" />
        </div>
        <div style={{ position: 'absolute', top: '5%', left: '35%' }} className="absolute top-[-5%] left-[35%]">
          <img src="Images/fifthtopleftbubble.png" alt="img" />
        </div>
        <div style={{ position: 'absolute', top: '5rem', left: '60%' }} className="absolute top-20 left-[60%]">
          <img src="Images/fifthbottombubble.png" alt="img" />
        </div>
        <div style={{ position: 'absolute', top: '0', left: '70%' }} className="absolute top-0 left-[70%]">
          <img src="Images/fifthrightbubble.png" alt="img" />
        </div>
        <SixthHeaderWhite>
          Hades <SixthHeaderBlue>Figures</SixthHeaderBlue>{' '}
        </SixthHeaderWhite>
        <FigureBoxContainer>
          <FigureBox>
            <StyledColumn>
              {circulatingSupply ? (
                <Balance
                  decimals={0}
                  lineHeight="1.1"
                  fontSize="24px"
                  bold
                  value={circulatingSupply}
                  color="secondary"
                />
              ) : (
                <Skeleton height={24} width={126} my="4px" />
              )}

              <Text style={{ marginTop: '1rem', color: 'white' }} fontSize={isMobile ? '14px' : '18px'}>
                {t('Circulating Supply')}
              </Text>
            </StyledColumn>
          </FigureBox>
          <FigureBox>
            <StyledColumn noMobileBorder>
              {cakeSupply ? (
                <Balance color="secondary" decimals={0} lineHeight="1.1" fontSize="24px" bold value={cakeSupply} />
              ) : (
                <>
                  <div ref={observerRef} />
                  <Skeleton height={24} width={126} my="4px" />
                </>
              )}
              <Text style={{ marginTop: '1rem', color: 'white' }} fontSize={isMobile ? '14px' : '18px'}>
                {t('Total supply')}
              </Text>
            </StyledColumn>
          </FigureBox>
          <FigureBox>
            <StyledColumn>
              {mcap?.gt(0) && mcapString ? (
                <FigureHead>{t('$%marketCap%', { marketCap: mcapString })}</FigureHead>
              ) : (
                <Skeleton height={24} width={126} my="4px" />
              )}

              <Text style={{ marginTop: '1rem', color: 'white' }} fontSize={isMobile ? '14px' : '18px'}>
                {t('Market cap')}
              </Text>
            </StyledColumn>
          </FigureBox>
          <FigureBox>
            <StyledColumn>
              {burnedBalance ? (
                <Balance color="secondary" decimals={0} lineHeight="1.1" fontSize="24px" bold value={burnedBalance} />
              ) : (
                <Skeleton height={24} width={126} my="4px" />
              )}
              <Text style={{ marginTop: '1rem', color: 'white' }} fontSize={isMobile ? '14px' : '18px'}>
                {t('Token Burn')}
              </Text>
            </StyledColumn>
          </FigureBox>
          <FigureBox>
            <StyledColumn>
              {emissionsPerBlock ? (
                <FigureHead>
                  {t('%cakeEmissions%/block', { cakeEmissions: formatNumber(emissionsPerBlock) })}
                </FigureHead>
              ) : (
                <Skeleton height={24} width={126} my="4px" />
              )}
              <Text style={{ marginTop: '1rem', color: 'white' }} fontSize={isMobile ? '14px' : '18px'}>
                {t('Current emissions')}
              </Text>
            </StyledColumn>
          </FigureBox>

          {/* <StyledColumn>
            <Text color="text" bold fontSize={isMobile ? '14px' : undefined}>
              {t('Circulating Supply')}
            </Text>
            {circulatingSupply ? (
              <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={circulatingSupply} color="secondary" />
            ) : (
              <Skeleton height={24} width={126} my="4px" />
            )}
          </StyledColumn> */}
          {/* <StyledColumn noMobileBorder>
            <Text bold fontSize={isMobile ? '14px' : undefined}>
              {t('Total supply')}
            </Text>
            {cakeSupply ? (
              <Balance color="secondary" decimals={0} lineHeight="1.1" fontSize="24px" bold value={cakeSupply} />
            ) : (
              <>
                <div ref={observerRef} />
                <Skeleton height={24} width={126} my="4px" />
              </>
            )}
          </StyledColumn> */}
          {/* <StyledColumn>
            <Text bold fontSize={isMobile ? '14px' : undefined}>
              {t('Market cap')}
            </Text>
            {mcap?.gt(0) && mcapString ? (
              <Heading color="secondary" scale="lg">
                {t('$%marketCap%', { marketCap: mcapString })}
              </Heading>
            ) : (
              <Skeleton height={24} width={126} my="4px" />
            )}
          </StyledColumn> */}
          {/* <StyledColumn>
            <Text bold fontSize={isMobile ? '14px' : undefined}>
              {t('Token Burn')}
            </Text>
            {burnedBalance ? (
              <Balance color="secondary" decimals={0} lineHeight="1.1" fontSize="24px" bold value={burnedBalance} />
            ) : (
              <Skeleton height={24} width={126} my="4px" />
            )}
          </StyledColumn> */}
          {/* <StyledColumn>
            <Text bold>{t('Current emissions')}</Text>

            {emissionsPerBlock ? (
              <Heading color="secondary" scale="lg">
                {t('%cakeEmissions%/block', { cakeEmissions: formatNumber(emissionsPerBlock) })}
              </Heading>
            ) : (
              <Skeleton height={24} width={126} my="4px" />
            )}
          </StyledColumn> */}
        </FigureBoxContainer>
        {/* <StyledWrapper mb={isMobile ? '30px' : '50px'}>
          <StyledColumn>
            <Text color="text" bold fontSize={isMobile ? '14px' : undefined}>
              {t('Circulating Supply')}
            </Text>
            {circulatingSupply ? (
              <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={circulatingSupply} color="secondary" />
            ) : (
              <Skeleton height={24} width={126} my="4px" />
            )}
          </StyledColumn>
          <StyledColumn noMobileBorder>
            <Text bold fontSize={isMobile ? '14px' : undefined}>
              {t('Total supply')}
            </Text>
            {cakeSupply ? (
              <Balance color="secondary" decimals={0} lineHeight="1.1" fontSize="24px" bold value={cakeSupply} />
            ) : (
              <>
                <div ref={observerRef} />
                <Skeleton height={24} width={126} my="4px" />
              </>
            )}
          </StyledColumn>
          <StyledColumn>
            <Text bold fontSize={isMobile ? '14px' : undefined}>
              {t('Market cap')}
            </Text>
            {mcap?.gt(0) && mcapString ? (
              <Heading color="secondary" scale="lg">
                {t('$%marketCap%', { marketCap: mcapString })}
              </Heading>
            ) : (
              <Skeleton height={24} width={126} my="4px" />
            )}
          </StyledColumn>
          <StyledColumn>
            <Text bold fontSize={isMobile ? '14px' : undefined}>
              {t('Token Burn')}
            </Text>
            {burnedBalance ? (
              <Balance color="secondary" decimals={0} lineHeight="1.1" fontSize="24px" bold value={burnedBalance} />
            ) : (
              <Skeleton height={24} width={126} my="4px" />
            )}
          </StyledColumn>
          <StyledColumn>
            <Text bold>{t('Current emissions')}</Text>

            {emissionsPerBlock ? (
              <Heading color="secondary" scale="lg">
                {t('%cakeEmissions%/block', { cakeEmissions: formatNumber(emissionsPerBlock) })}
              </Heading>
            ) : (
              <Skeleton height={24} width={126} my="4px" />
            )}
          </StyledColumn>
        </StyledWrapper> */}
      </MainSixthContainer>
    </>
  )
}

export default CakeDataRow
