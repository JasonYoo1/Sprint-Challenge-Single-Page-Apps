import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path='/characters' component={CharacterList} />
      <Route path='/location' component={LocationsList} />
      <Route path='/' exact component={WelcomePage} />
      {/* <Route path="/episodes" component={} /> */}
    </Switch>
  </div>

}
