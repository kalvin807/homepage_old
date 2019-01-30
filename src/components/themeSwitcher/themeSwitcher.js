import React, { Component } from 'react';

const themes = {
    day: {
        day: true,
        bgcolor1: '#4ea9da',
        bgcolor2: '#EE7752',
        bgcolor3: '#E73C7E',
        bgcolor4: '#23A6D5',
        highlightcolor: '#FFFFFF',
        textcolor: '#FFFFFF',
        navAlpha: 'rgba(253,253,255,0.2)'
      },
    night: {
        day: false,
        bgcolor1: '#4ea9da',
        bgcolor2: '#EE7752',
        bgcolor3: '#E73C7E',
        bgcolor4: '#23A6D5',
        highlightcolor: '#000000',
        textcolor: '#000000',
        navAlpha: 'rgba(253,253,255,0.2)'
      }
    };

export const ThemeContext = React.createContext({
    theme: themes.day,
    toggleTheme: () => {},
});

class ThemeSwitcher extends Component {
    constructor(props){
        super(props);

        this.toggleTheme = () =>{
            this.setState(state =>({
                theme:
                    state.theme === themes.night
                    ?themes.day
                    :themes.night,
            }));
        };

        this.state = {
            theme: themes.day,
            toggleTheme: this.toggleTheme,
        };

    }
    
    render(){
        return(
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export { ThemeSwitcher };

export default ThemeContext.Consumer;