
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 496, hash: 'a82230c45237a618cae0b67a84b5f60b91b3922f3d7c7c8912964ce5c3e47e70', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: '6bc3fd1d560bbba4ea5b0365896bb986384d9fd5e65edc51dbecf40c67a48f28', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20842, hash: 'ca353e28990b2a4183781cfa1e4c74ecd8e5191b7c2a1d817894813b565c5430', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
