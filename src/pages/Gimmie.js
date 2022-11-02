import {
  ArticleSection,
  FAQLi,
  GreenSpan,
  HomePageH1,
  WhiteP,
} from "../components/StyledComponents";
import { GIMMIE_TEXT_CONSTS } from "./PageFiles/GimmieTextConsts";

export const Gimmie = () => {
  const { FAQ } = GIMMIE_TEXT_CONSTS;
  return (
    <ArticleSection>
      <article>
        <HomePageH1>{GIMMIE_TEXT_CONSTS.TITLE}</HomePageH1>
        <WhiteP>{GIMMIE_TEXT_CONSTS.ARTICLE_FIRST}</WhiteP>
        <WhiteP>{GIMMIE_TEXT_CONSTS.ARTICLE_SECOND}</WhiteP>
        <h2>{FAQ.HEADER}</h2>
        <ul>
          <FAQLi>{FAQ.Q_1}</FAQLi>
          <WhiteP>{FAQ.A_1}</WhiteP>
          <FAQLi>{FAQ.Q_2}</FAQLi>
          <WhiteP>{FAQ.A_2}</WhiteP>
          <FAQLi>{FAQ.Q_3}</FAQLi>
          <WhiteP>{FAQ.A_3}</WhiteP>
          <FAQLi>{FAQ.Q_4}</FAQLi>
          <WhiteP>{FAQ.A_4}</WhiteP>
          <FAQLi>{FAQ.Q_5}</FAQLi>
          <WhiteP>
            {FAQ.A_5}
            <GreenSpan>{FAQ.A_5_SPAN}</GreenSpan>
          </WhiteP>
        </ul>
      </article>
    </ArticleSection>
  );
};
