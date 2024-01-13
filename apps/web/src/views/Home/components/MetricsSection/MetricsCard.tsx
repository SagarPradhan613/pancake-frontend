import { styled } from 'styled-components'
import { Box, Text, lightColors, useMatchBreakpoints, BoxProps } from '@pancakeswap/uikit'
import CountUp from 'react-countup'
import useTheme from 'hooks/useTheme'

export const Divider = styled.div`
  height: 45px;
  width: 1px;
  background-color: ${lightColors.inputSecondary};
`
const Count = styled.div`
  font-size: 30px;
  color: white;
`
interface MetricsCardProps extends BoxProps {
  title: string
  value: number
  description: string
  prefix?: string
}

export const MetricsCard: React.FC<MetricsCardProps> = ({ title, value, description, prefix, ...rest }) => {
  const { theme } = useTheme()
  const { isMobile } = useMatchBreakpoints()
  return (
    <Box {...rest}>
      <Text
        lineHeight="110%"
        textAlign="center"
        fontWeight={600}
        fontSize={isMobile ? '32px' : '40px'}
        color={theme.colors.secondary}
      >
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <CountUp
            start={0}
            preserveValue
            delay={0}
            end={value}
            decimalPlaces={3}
            decimals={0}
            duration={1}
            prefix={prefix ?? ''}
            separator=","
          >
            {/* {({ countUpRef }) => <span ref={countUpRef} />} */}

            {({ countUpRef }) => (
              <Text style={{ fontSize: '30px', color: 'white' }}>
                <span ref={countUpRef} />
              </Text>
            )}
          </CountUp>
          <Text
            style={{ marginLeft: '0.5rem', color: 'white' }}
            fontSize={isMobile ? '16px' : '30px'}
            textAlign="center"
            fontWeight={600}
            lineHeight="120%"
          >
            {title}
          </Text>
        </div>
      </Text>
      <Text
        fontSize={isMobile ? '14px' : '16px'}
        textAlign="center"
        fontWeight={600}
        lineHeight="120%"
        color="white"
        style={{ marginTop: '1rem' }}
      >
        {description}
      </Text>
    </Box>
  )
}
