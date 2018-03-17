/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/test-site/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'React Canvas' /* title for your website */,
  tagline: 'Build canvas apps and 2d games with React',
  url: 'http: //react-canvas.com' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'react-canvas',
  headerLinks: [
    {doc: 'gettingstarted', label: 'Docs'},
    {href: 'https://github.com/chenzhuo1992/easycanvas', label: 'EasyCanvas', external: true},
    {href: 'https://github.com/xiaofuzi/react-canvas-website', label: 'Github', external: true},
    // {blog: true, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  // headerIcon: 'img/docusaurus.svg',
  // footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#025268',
    secondaryColor: '#005068',
  },
  /* custom fonts for website */
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    'Yangxiaofu@163.com',
  organizationName: 'xiaofuzi', // or set an env variable ORGANIZATION_NAME
  projectName: 'react-canvas-website', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/xiaofuzi/react-canvas-website',
  /* On page navigation for the current documentation page */
  // onPageNav: 'separate',
};

module.exports = siteConfig;
