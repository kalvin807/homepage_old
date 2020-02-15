import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ItemConfig {
  title: string;
  desc: {
    [lang: string]: string;
  };
  icon?: Array<JSX.Element>;
  link?: object;
}

interface ItemsConfig {
  [name: string]: ItemConfig;
}

export interface ItemInterface {
  name: string;
  render: JSX.Element;
}

export const getitemlist = (lang: number): Array<ItemInterface> => {
  const itemsConfig: ItemsConfig = {
    cbcPage: {
      title: 'Boardgame Club Homepage',
      desc: {
        0: 'My first attempt to work on webpage. Created it by using Bootstrap.',
      },
      icon: [
        <FontAwesomeIcon icon={['fab', 'html5']} />,
        <FontAwesomeIcon icon={['fab', 'css3-alt']} />,
        <FontAwesomeIcon icon={['fab', 'js-square']} />,
      ],
      link: { link: 'http://www.chesssoc.hkusu.hku.hk/' },
    },
    personalPage: {
      title: 'My page(Here!)',
      desc: {
        0: 'My intro page made with react/typescript.:)',
      },
      icon: [
        <FontAwesomeIcon icon={['fab', 'js-square']} />,
        <FontAwesomeIcon icon={['fab', 'react']} />,
        <FontAwesomeIcon icon={['fab', 'html5']} />,
        <FontAwesomeIcon icon={['fab', 'css3-alt']} />,
      ],
      link: { github: 'https://github.com/kalvin807/homepage' },
    },
    minecraftServer: {
      title: 'Minecraft Server',
      desc: {
        0: `A small minecraft server for friends. Hosted on AWS EC2. Paired with a simple serverless login page,
             so that server only self-start when needed and self-closing when idle! Saved me tons of money.`,
      },
      icon: [
        <FontAwesomeIcon icon={['fab', 'aws']} />,
        <FontAwesomeIcon icon={['fab', 'linux']} />,
        <FontAwesomeIcon icon={['fab', 'centos']} />,
      ],
      link: {
        link: 'https://kal-mcserver-login.herokuapp.com/',
        github:
          'https://github.com/kalvin807/Simple-on-demand-minecraft-server-login-app',
      },
    },
  };

  const makeItem = (
    itemName: string,
    itemConfig: ItemConfig,
    lang: number
  ): ItemInterface => {
    const link =
      typeof itemConfig.link === 'object'
        ? Object.entries(itemConfig.link).map(
            ([k, v]): JSX.Element => makeItemLink(k, v)
          )
        : null;
    return {
      name: itemName,
      render: (
        <div className="portfolio-item">
          <div className="portfolio-item__title">{itemConfig.title}</div>
          <div className="portfolio-item__desc">
            {lang in itemConfig.desc
              ? itemConfig.desc[lang]
              : itemConfig.desc[0]}
          </div>
          <div className="portfolio-item__icon">{itemConfig.icon}</div>
          <div className="portfolio-item__links">{link}</div>
        </div>
      ),
    };
  };
  const makeItemLink = (key: string, link: string): JSX.Element => {
    console.log(key, link);
    return (
      <a target="_blank" rel="noopener noreferrer" href={link}>
        {key.toUpperCase()}
      </a>
    );
  };

  return Object.entries(itemsConfig).map(([k, v]) => makeItem(k, v, lang));
};
