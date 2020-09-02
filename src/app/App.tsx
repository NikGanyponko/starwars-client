import React from 'react'
import './App.less'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import { Header } from '../components'
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
                  <Route path='/starships'>
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
