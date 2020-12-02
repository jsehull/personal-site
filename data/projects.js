// used with RecentWork component (examples on pages / and /work)
// URLS can be external OR internal
// tags are short, optional bold text

export const personal = [
  {
    id: '1',
    name: 'nextjs-site-starter',
    description: '🛠 A personal project starter using Next.js',
    thumbnail:
      'https://raw.githubusercontent.com/jsehull/nextjs-site-starter/master/public/images/github-preview.png',
    codeURL: 'https://github.com/jsehull/nextjs-site-starter',
    siteURL: 'https://nextjs-site-starter-3595a3.netlify.app/'
  },
  {
    id: '2',
    name: 'cra-ecommerce',
    description:
      '🛒 React Router, React Hooks (useState, useEffect, useContext), PropTypes',
    thumbnail:
      'https://raw.githubusercontent.com/jsehull/cra-ecommerce/master/github-preview.png',
    codeURL: 'https://github.com/jsehull/cra-ecommerce',
    siteURL: 'https://cra-ecommerce-0a759b.netlify.app/'
  },
  {
    id: '3',
    name: 'speed-typing',
    description:
      '⌨ CRA + React hooks (useState, useEffect, useRef, useContext)',
    thumbnail:
      'https://raw.githubusercontent.com/jsehull/speed-typing/master/src/github-preview.png',
    codeURL: 'https://github.com/jsehull/speed-typing',
    siteURL: 'https://speed-typing-5a2501.netlify.app/'
  },
  {
    id: '4',
    name: 'disco-tussle',
    description: '🕹 vanilla JS, memory game, turn logic',
    thumbnail:
      'https://raw.githubusercontent.com/jsehull/disco-tussle/master/images/github-preview.png',
    codeURL: 'https://github.com/jsehull/disco-tussle',
    siteURL: 'https://disco-tussle.netlify.app/'
  }
]

export const oss = [
  {
    id: '1',
    name: 'Epic React - Kent C. Dodds',
    tags: '📝 documentation',
    description:
      'update README to include fix from issue #27 (Issue #27: Windows: git-sh-setup: file not found)',
    thumbnail: '/images/site/epic-react.png',
    codeURL: 'https://github.com/kentcdodds/react-fundamentals/pull/34'
  },
  {
    id: '2',
    name: 'Netlify CMS',
    tags: '🐛 bug',
    description: 'fix(docs): re-add contributor style guide',
    thumbnail: '/images/site/netlify-cms.png',
    codeURL: 'https://github.com/netlify/netlify-cms/pull/4610'
  }
]

export const professional = [
  {
    id: '1',
    name: 'God in Your Garden',
    tags: '📡 Remote, React, Next.js, Emotion',
    description:
      "Static website created for book release of independent author. Design is original and inspired by the publisher's cover art materials. Several meetings with client to update content or pivot from initial goals.",
    thumbnail: '/images/site/giyg.png',
    siteURL: 'https://godinyourgarden.com/'
  },
  {
    id: '2',
    name: 'Total Mortgage Services',
    tags: 'Fullstack (JavaScript, Laravel, MySQL, Sass)',
    description:
      'Primary front-end builder for new company website. Known for attention to detail with designs and layouts. Partnered with marketing on smaller projects.',
    thumbnail: '/images/site/tms.png',
    siteURL: 'https://www.totalmortgage.com/'
  },
  {
    id: '3',
    name: 'DUCTZ of Mid Michigan',
    tags: '📡 Remote, JavaScript, Sass, HTML',
    description:
      'Built modern website. Substantially increased sales after going from a rather bloated and sterile look, to a clear and effective user experience. Authored new content and removed corporate doublespeak.',
    thumbnail: '/images/site/ductz.png',
    siteURL: '',
    siteInactive: 'Active Summer 2016 - Fall 2020'
  }
]
