import React, { useState } from 'react';
import { Layout, Menu, } from 'antd';
import RegionInfo from './components/RegionInfo';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import FormInput from './components/FormInput';
import Mapcomponents from './components/Mapcomponents';
const { Header, Content, Footer, Sider } = Layout;


const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}

      >
        <div className="logo" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', paddingTop: "10px" }}>
            MAP UP
          </h2>
        </div>
        {
          collapsed === false && (
            <FormInput />
          )
        }
      </Sider>
      <Layout>
        <Header style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: "flex-end"
        }}>
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
            <Menu.Item key="login" icon={<UserOutlined />}>
              Login
            </Menu.Item>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ display: 'flex', width: "100%", justifyContent: "space-around" }}>
          <div style={{ width: "50%" }}>
            <Mapcomponents />
          </div>
          <RegionInfo />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            position: 'sticky',
            bottom: 0,
            zIndex: 1000,
            fontweight: "700",
          }}
        >
          <h3>
            © 2021 Copyright: Ashutosh Kewat MAPUP
          </h3>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
