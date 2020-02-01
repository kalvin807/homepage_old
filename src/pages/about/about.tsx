import React, { useContext } from 'react';
import ThemeContext from 'contexts/themes/ThemeContext';
import LanguageContext from 'contexts/languages/LanguageContext';
import NextPage from 'components/nextPage/nextPage';
import './style.scss';

const AboutPage: React.FC = () => {
  const theme = useContext(ThemeContext).theme;
  const language = useContext(LanguageContext).langCode;
  const languageTexts = [
    {
      intro:
        'Hello stranger, welcome to my page. This is my side project to practice react and typescript. Also, learn how to deal with CSS, it is magic. I record my other side projects and working experience here, so this gonna be my online CV too. If you want to hire me or talk more, feel free to reach me through the button at the homepage. :D',
      me: `As you saw on the homepage, I like board games. I find them interesting and exciting to play with. Please try "Sushi Go" if you have a chance, it is extremely fun and always leads to some good laugh. Playing boardgame is a nice way to have a pleasant moment with friends. I like programming too, as it gave me the power to create things freely. I aim to become a creator of something creative, that can give everyone a smile.`
    },
    {
      intro:
        '哈囉，歡迎嚟到我嗰個人page。依個page係我其中一個side project嚟比我練習用React同TypeScript寫網。我會係度記錄嘅其他project同工作經驗，所以你當依個係我嘅CV都得。如果你想請我或者想同我傾多啲，你可以係第一版嘅icon到連絡我。:D',
      tagline: '電腦科學三年級生 | 業餘Programmer | 桌遊愛好者'
    },
    {
      intro:
        'こんにちは、私のページへようこそ。 このページはReactとTypeScriptを練習に作るの個人プロジェクトです。私はここでプロジェクトと働く経験を記録するので、ここは私の履歴書です。私を雇うか、私とチャットしたい訪客は、ホームページのSNSをご利用ください。:D',
      tagline: 'コンピュータ科学三年生 | ギーク | ボードゲームファン'
    }
  ];
  const displayText = languageTexts[language];

  return (
    <div className="about-page">
      <div className="content-grid">
        <h1 style={{ color: theme.textcolor }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: theme.textcolor }}>
            <p>{displayText.intro}</p>
          </div>
        </div>
      </div>
      <NextPage pageSelector=".projects-page" />
    </div>
  );
};

export default AboutPage;
