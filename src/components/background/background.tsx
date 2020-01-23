import React, { useContext } from 'react';
import ThemeContext from 'contexts/themes/ThemeContext';

const Background: React.FC = () => {
  const style = useContext(ThemeContext).theme;

  return (
    <div className="background">
      <style>
        {`
          body {
            width: 100wh;
            height: 200vh;
            color: #fff;
            background: linear-gradient(
              -45deg,
              ${style.bgcolor1},
              ${style.bgcolor2},
              ${style.bgcolor3},
              ${style.bgcolor4}
            );
            background-size: 400% 400%;
            -webkit-animation: Gradient 15s ease infinite;
            -moz-animation: Gradient 15s ease infinite;
            animation: Gradient 15s ease infinite;
          }

          @-webkit-keyframes Gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @-moz-keyframes Gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes Gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Background;
