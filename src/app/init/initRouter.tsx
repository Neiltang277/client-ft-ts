import React from 'react';
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import routes from './../config/routes';
import loadable from '@loadable/component';

const formatRoutes = (components: any) => {
  const componentNames: any = [];
  const componentSecondNames: any = [];
  let TempComponent: any;
  components.map((item: any, idx: any) => {
    // console.log(item);
    if (item.routes != undefined && item.routes.length > 0) {
      const t: any = formatRoutes(item.routes)

console.log(t);
      TempComponent = loadable(()=>import('./../../' + item.component))
      componentNames[idx] =
      <Route key={idx} exact={item.exact} path={item.path} render={()=>{
        return  <TempComponent >
        {
          t.map((item: any) =>(item))
        }
      </TempComponent>
      }}
       />
    } else {
      // console.log(item.component);
      console.log(22);
      componentNames[idx] = <Route key={idx} exact={item.exact} path={item.path} component={loadable(() => import('./../../' + item.component))}/>
    }
  })

  console.log('----');
  console.log(componentNames);
  console.log('----');

  return componentNames;

}


const Router = ({ history }: any) => (
  <ConnectedRouter history={history}>
    <Switch>
      {/* <Route path="/" render={() => formatRoutes(routes)} /> */}
      <Route path="/" render={() => {
        const t = formatRoutes(routes);
        console.log('-----')
        console.log(t);
        console.log('-----')
        return t
      }} />


    </Switch>
  </ConnectedRouter>
)

export default Router