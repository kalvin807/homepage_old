import React, { Component } from 'react';
import ThemesContext from 'contexts/themes/themesContext';

class Background extends Component {
  render() {
    const state = this.context;
    return (
      <div className="background">
        <style jsx="true">
          {`
            body {
              width: 100wh;
              height: 200vh;
              color: #fff;
              background: linear-gradient(
                -45deg,
                ${state.theme.bgcolor1},
                ${state.theme.bgcolor2},
                ${state.theme.bgcolor3},
                ${state.theme.bgcolor4}
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
  }
}
Background.contextType = ThemesContext;
export default Background;
