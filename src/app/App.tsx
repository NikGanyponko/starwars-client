import React from 'react'
import './App.less'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout, Typography } from 'antd'

import Header from '../components/header'
import Planets from '../features/planets'
import People from '../features/people'
import Ships from '../features/ships'

const { Content } = Layout
const { Text } = Typography

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='app-container'>
          <Layout>
            <Header />
            <Layout>
              <div className='content-container'>
                <Router>
                  <Switch>
                    <Route path='/planets' render={Planets} />
                    <Route path='/planets/:id' render={Planets} />
                    <Route path='/people' render={People} />
                    <Route path='/people/:id' render={People} />
                    <Route path='/starships' render={Ships} />
                    <Route path='/starships/:id' render={Ships} />
                  </Switch>
                </Router>
              </div>
            </Layout>
          </Layout>
        </div>
      </div>
    </Router>
  )
}

export default App
