'use strict';

const fs = require('fs');

const globalObject = {
  globals: {
    siteTitle: 'Lognetics - A Perfect Blend of Creativity',
    description:
      'Futuristic Domain of creativity, a team of creative and innovative experts, we deliver the most advanced tools and solutions. We create Branded identities for companies, Virtual and Augmented Reality, alongside Holographic Computation in every technology on all platforms. The future begins today!',
    image: '/img/logo.png',
    date: new Date().getFullYear(),
  },
};

const data = JSON.stringify(globalObject);

fs.writeFileSync('_harp.json', data);
