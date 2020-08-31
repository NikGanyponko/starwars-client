import React from 'react'
import './App.less'

import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import { Layout, Typography } from 'antd'

import Header from '../components/header'

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
                <div className='sider'>123231</div>
                <Content className='content' />
              </div>
            </Layout>
          </Layout>
        </div>
      </div>
    </Router>
  )
}

export default App
