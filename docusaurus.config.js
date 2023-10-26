/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MirrorWarp Documentation',
  url: 'https://docs.mirrorwarp.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'MirrorWarp',
  projectName: 'docs',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'MirrorWarp Documentation',
      items: [
        {
          href: '/packager/',
          label: 'Packager',
          position: 'left'
        },
        {
          href: '/development/',
          label: 'Development',
          position: 'left'
        },
        {
          href: 'https://mirrorwarp.org/',
          label: 'MirrorWarp',
          position: 'right'
        },
        {
          href: 'https://github.com/MirrorWarp',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      // This is all supposed to be public
      appId: 'HORQ9E5CCA',
      apiKey: 'c3873ce4208edb896a31bb3e7c2cbdad',
      indexName: 'mirrorwarp'
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require('./code-themes/light'),
      darkTheme: require('./code-themes/dark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/MirrorWarp/docs/edit/master/',
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
