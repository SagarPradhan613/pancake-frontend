import { useMemo } from "react";
import CountUp from "react-countup";
import { styled } from "styled-components";
import { Text, TextProps } from "../Text";

const BalanceHead = styled.div`
  color: #fff;
  font-family: Raleway;

  font-style: normal;
  font-weight: 700;
  line-height: 115%; /* 46px */

  @media only screen and (max-width: 767px) {
    font-size: 40px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    font-size: 40px;
  }

  @media only screen and (min-width: 1080px) {
    font-size: 40px;
  }
`;

export interface BalanceProps extends TextProps {
  value: number;
  decimals?: number;
  unit?: string;
  isDisabled?: boolean;
  prefix?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  strikeThrough?: boolean;
  startFromValue?: boolean;
}

const Balance: React.FC<React.PropsWithChildren<BalanceProps>> = ({
  value,
  color = "text",
  decimals = 3,
  isDisabled = false,
  unit,
  prefix,
  onClick,
  strikeThrough,
  startFromValue = false,
  ...props
}) => {
  const prefixProp = useMemo(() => (prefix ? { prefix } : {}), [prefix]);
  const suffixProp = useMemo(() => (unit ? { suffix: unit } : {}), [unit]);
  const showDecimals = useMemo(() => value % 1 !== 0, [value]);

  return (
    <CountUp
      start={startFromValue ? value : 0}
      preserveValue
      delay={0}
      end={value}
      {...prefixProp}
      {...suffixProp}
      decimals={showDecimals ? decimals : 0}
      duration={1}
      separator=","
    >
      {({ countUpRef }) => (
        <Text
          style={{ color: "white", fontSize: "40px" }}
          // color={isDisabled ? "textDisabled" : color}
          // style={strikeThrough ? { textDecoration: "line-through" } : undefined}
          onClick={onClick}
          {...props}
        >
          <span ref={countUpRef} />
        </Text>
      )}
    </CountUp>
  );
};

export default Balance;
