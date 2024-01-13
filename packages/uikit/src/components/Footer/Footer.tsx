import { useIsMounted } from "@pancakeswap/hooks";
import React from "react";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../contexts";
import { Box, Flex } from "../Box";
import { Link } from "../Link";
import { StyledFooter, StyledList, StyledListItem, StyledText, StyledToolsContainer } from "./styles";

import { vars } from "../../css/vars.css";
import { Button } from "../Button";
import CakePrice from "../CakePrice/CakePrice";
import LangSelector from "../LangSelector/LangSelector";
import { ArrowForwardIcon } from "../Svg";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { FooterProps } from "./types";

const FooterSocialIcconCont = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;

  @media only screen and (max-width: 767px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
  }

  @media only screen and (min-width: 1080px) {
  }
`;

const FooterSocialIcons = styled.div`
  height: 26px;
  width: 26px;
  display: flex;
  align-items: center;
`;

const FooterFirstContainer = styled.div`
  @media only screen and (max-width: 767px) {
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
  }

  @media only screen and (min-width: 1080px) {
    width: 25%;
    margin-right: 2.5rem;
  }
`;

const FooterLogoContainer = styled.div`
  @media only screen and (max-width: 767px) {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
  }

  @media only screen and (min-width: 1080px) {
    width: 188px;
    height: 83px;
  }
`;

const FooterLeftPara = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const CenterFooterContainer = styled.div`
  @media only screen and (max-width: 767px) {
    margin-bottom: 1rem;
    margin-top: 0.8rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
  }

  @media only screen and (min-width: 1080px) {
    display: flex;
    align-items: center;
  }
`;
const CopyrightText = styled.p`
  opacity: 0.3;
`;
const MenuItem: React.FC<React.PropsWithChildren<FooterProps>> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  buyCakeLink,
  chainId,
  ...props
}) => {
  const isMounted = useIsMounted();
  const { isXl } = useMatchBreakpoints();
  return (
    <StyledFooter
      data-theme="dark"
      p={["40px 16px", null, "56px 40px 32px 40px"]}
      position="relative"
      {...props}
      justifyContent="center"
    >
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        {/* <StyledIconMobileContainer display={["block", null, "none"]}>
          <LogoWithTextIcon width="130px" />
        </StyledIconMobileContainer> */}
        <div>
          <Flex
            order={[2, null, 1]}
            flexDirection={["column", "column", "column", "column", "row", "row"]}
            justifyContent="space-between"
            alignItems="flex-start"
            mb={["42px", null, "36px"]}
          >
            <FooterFirstContainer>
              <FooterLogoContainer>
                <img src="images/footerlogo.png" style={{ height: "100%", width: "100%" }} alt="img" />
              </FooterLogoContainer>
              <FooterLeftPara>
                Lorem ipsum is a placeholder text commonly to the visual form of a document or a typeface. Lorem ipsum
                is a placeholder text commonly used to the visual form.
              </FooterLeftPara>

              {/* <div style={{ display: "flex", width: "100%", gap: "10px" }}>
              <img src="images/tg.png"></img>
              <img src="images/twitterfooter.png"></img>
              <img src="images/discordfooter.png"></img>
              <img src="images/redditfooter.png"></img>
              <img src="images/instafooter.png"></img>
              <img src="images/youtubefooter.png"></img>
            </div> */}

              <FooterSocialIcconCont>
                <FooterSocialIcons>
                  <img src="images/tg.png" alt="img" />
                </FooterSocialIcons>
                <FooterSocialIcons>
                  <img src="images/twitterfooter.png" alt="img" />
                </FooterSocialIcons>
                <FooterSocialIcons>
                  <img src="images/discordfooter.png" alt="img" />
                </FooterSocialIcons>
                <FooterSocialIcons>
                  <img src="images/redditfooter.png" alt="img" />
                </FooterSocialIcons>
                <FooterSocialIcons>
                  <img src="images/instafooter.png" alt="img" />
                </FooterSocialIcons>
                <FooterSocialIcons>
                  <img src="images/youtubefooter.png" alt="img" />
                </FooterSocialIcons>
              </FooterSocialIcconCont>
            </FooterFirstContainer>

            {/* <Box display={["none", null, "block"]}>{isXl ? <LogoIcon /> : <LogoWithTextIcon width="160px" />}</Box> */}
            {items?.map((item) => (
              <StyledList style={{ marginTop: "1rem" }} key={item.label}>
                <StyledListItem style={{ color: "black", fontWeight: "700" }}>{item.label}</StyledListItem>
                {item.items?.map(({ label, href, isHighlighted = false }) => (
                  <StyledListItem style={{ fontWeight: "500" }} key={label}>
                    {href ? (
                      <Link
                        style={{ fontWeight: "500" }}
                        data-theme="dark"
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        color={isHighlighted ? vars.colors.warning : "black"}
                        bold={false}
                      >
                        {label}
                      </Link>
                    ) : (
                      <StyledText>{label}</StyledText>
                    )}
                  </StyledListItem>
                ))}
              </StyledList>
            ))}
          </Flex>

          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#00D2FF",
              marginBottom: "2rem",
              marginTop: "5rem",
            }}
          />
        </div>

        {/* <StyledSocialLinks order={[2]} pb={["42px", null, "32px"]} mb={["0", null, "32px"]} /> */}

        <StyledToolsContainer data-theme="dark" flexDirection={["column", null, "row"]} justifyContent="space-between">
          <Flex alignItems="center">
            {isMounted && <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />}
            <LangSelector
              currentLang={currentLang}
              langs={langs}
              setLang={setLang}
              color="textSubtle"
              dropdownPosition="top-right"
            />
          </Flex>

          <CenterFooterContainer>
            <CopyrightText>@copyright 2023 , all rights received</CopyrightText>
          </CenterFooterContainer>

          <Flex mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
            <Box mr="20px">
              <CakePrice chainId={chainId} cakePriceUsd={cakePriceUsd} color="textSubtle" />
            </Box>

            <Button
              data-theme="dark"
              as="a"
              href={buyCakeLink}
              target="_blank"
              scale="sm"
              endIcon={<ArrowForwardIcon color="backgroundAlt" />}
            >
              {buyCakeLabel}
            </Button>
          </Flex>
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
