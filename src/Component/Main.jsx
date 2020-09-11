import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  useLocation,
} from 'react-router-dom';

import LoginComp from './LoginComponent';
import App3 from './App3';
import "../../node_modules/antd/dist/antd.css"
import { Form, Button, PageHeader, Input, Row, Col, Menu } from 'antd';

import { HomeOutlined, VideoCameraAddOutlined, FileAddOutlined, SafetyOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Typography } from 'antd';
import '../css/App.css'

const Main = () => {

  const [data, setdata] = useState([]);

  const { Header, Footer, Sider, Content } = Layout;
  const { SubMenu } = Menu;
  const { Title, Text } = Typography;


  const [collapsed, setcollapsed] = useState(false);

  const onCollapse = () => {
    console.log(collapsed);
    if (collapsed === true) {
      setcollapsed(false);
    } else {
      setcollapsed(true);
    }
  }

  useEffect(() => {

    /*  fetch('http://localhost:5000/users')
     .then(res => res.json())
     // json형식으로 받아온 값을 setState를 이용해 값을 재설정해줌
     .then(users => setdata(users)); */



  }, []);

  return (
    <>
      <BrowserRouter>

        <Layout style={{ minHeight: '100vh' }}>

          <Header>
            <Text className="Logo">
              <Link to="/web_script/index.html" style={{
                color: "white"
              }}><SafetyOutlined />ThrowOrNot</Link>
            </Text>
            <Text className="subLogo">
              &nbsp; @Rude_zoo @hyowii
                    </Text>
            <Link to="/Login" className="LoginClick">Login</Link>

          </Header>



          <Layout>

            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>

            </Sider>
            <Layout>


              <Content className="Site-Content">

                <div className="site-layout-content">
                  <Switch>

                  </Switch>


                </div>

              </Content>
              <Footer style={
                {
                  textAlign: "center"
                }
              }>Web Design ©2020 Created by Rude zoo</Footer>
            </Layout>

          </Layout>

        </Layout>

      </BrowserRouter>
    </>


  );
}

export default Main;
