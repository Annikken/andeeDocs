/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
/*const users = [
  {
    caption: 'User1',
    image: 'img/ann_logo40pt.png',
    infoLink: 'https://www.annikken.com/',
    pinned: true,
  },
];*/

const siteConfig = {
  title: 'Annikken Andee Documentation',
  tagline: 'This site documents all Andee Products',
  url: 'https://annikken.github.io',
  baseUrl: '/',
  organizationName: 'Annikken',
  projectName: 'annikken.github.io',
  headerLinks: [],
  //users,
  /* path to images for header/footer */
  headerIcon: 'img/ann_logo40pt.png',
  footerIcon: 'img/ann_logo40pt.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#16AEAC',//16AEAC
    secondaryColor: '#205C3B',
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  /* copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    'Annikken', */
  // organizationName: 'Annikken', // or set an env variable ORGANIZATION_NAME
  // projectName: 'AndeeDocs', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'arduino-light',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/Annikken/annikken.github.io',
  /* On page navigation for the current documentation page */
  // onPageNav: 'separate',
};

module.exports = siteConfig;
