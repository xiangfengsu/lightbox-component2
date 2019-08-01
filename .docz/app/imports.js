export const imports = {
  'src/components/demo.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-demo" */ 'src/components/demo.mdx'
    ),
}
