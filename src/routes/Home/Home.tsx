import * as Styled from "./Home.styles";
//import { Footer } from "../footer/Footer"; //

export const Home = () => {
  return (
    <Styled.Wrapper>
      <Styled.WrapperContent>
        <Styled.Nav>
          <Styled.LogoWhite src="src/assets/logo-white.png" />
          <ul>
            <li>Let's feel better</li>
            <li>Support</li>
            <li>About us</li>
            <li>
              <Styled.Button>Log out</Styled.Button>
            </li>
          </ul>
        </Styled.Nav>
        <Styled.TextUnderLogo>Let your stress drop</Styled.TextUnderLogo>
        <Styled.Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
          facilis officia velit facere libero reprehenderit! Perspiciatis saepe
          illum repellat labore? Deleniti atque ex qui? Consequatur obcaecati
          repellat quod tempore perspiciatis.
        </Styled.Paragraph>
        <Styled.WrapperButtons>
          <Styled.Button>START</Styled.Button>
          <Styled.Button>JOURNAL</Styled.Button>
        </Styled.WrapperButtons>
      </Styled.WrapperContent>
    </Styled.Wrapper>
  );
};
