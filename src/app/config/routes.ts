export default [{
  path: '/',
  exact: true,
  // component: 'views/spaces',
  component: 'layouts/BasicLayout',
  routes: [{
      
          name: 'space',
          path: '/',
          component: 'views/spaces'
      
  }]
}];