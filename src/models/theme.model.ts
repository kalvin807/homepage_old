export interface Theme {
  name: string;
  bgcolor1: string;
  bgcolor2: string;
  bgcolor3: string;
  bgcolor4: string;
  itembgcolor: string;
  textcolor: string;
  navAlpha: string;
}

export interface Themes {
  day: Theme;
  night: Theme;
}
