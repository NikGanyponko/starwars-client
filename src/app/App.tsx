import React from 'react'
import './App.less'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import { Header, NoMatch, HelloPage } from '../components'
import { People, Planets, Ships } from '../features/'

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
                  <Route path='/planets'>
                    <Planets />
                  </Route>
                  <Route path='/people'>
                    <People />
                  </Route>
                  <Route path='/star-ships'>
                    <Ships />
                  </Route>
                  <Route>
                    <HelloPage />
                  </Route>
                  <Route path='*'>
                    <NoMatch />
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
