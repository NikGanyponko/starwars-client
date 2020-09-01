import React from 'react'
import './App.less'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import Header from '../components/header'
import Planets from '../features/planets'
import People from '../features/people'
import Ships from '../features/ships'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <div className='app-container'>
          <Layout>
            <Header />
            <Layout>
              <div className='content-container'>
                <Switch>
                  <Route path='/planets/'>
                    <Planets />
                  </Route>
                  <Route path='/planets/:id'>
                    <Planets />
                  </Route>
                  <Route path='/people'>
                    <People />
                  </Route>
                  <Route path='/people/:id'>
                    <People />
                  </Route>
                  <Route path='/starships'>
                    <Ships />
                  </Route>
                  <Route path='/starships/:id'>
                    <Ships />
                  </Route>
                </Switch>
              </div>
            </Layout>
          </Layout>
        </div>
      </div>
    </Router>
  )
}

export default App
