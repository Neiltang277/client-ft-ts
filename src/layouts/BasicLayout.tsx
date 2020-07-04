import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb  } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { Icon } from '@ant-design/compatible';
import {
CodeSandboxOutlined,
  } from '@ant-design/icons';
import './BasicLayout.scss';
import CustomMenu from './../app/config/menu';
const { Header, Content, Footer } = Layout;

const { SubMenu } = Menu;

interface BasicLayoutProps {
}

const BasicLayout: React.FC<BasicLayoutProps> = (props: any) => {
 
  const {
    children
  } = props;

  const userMenu = () => {
    const list = CustomMenu.map((item:any, idx: any)=> <Menu.Item key={idx}><Link to={`/${item.path}`}>{item.name}</Link></Menu.Item>)
   
  return <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>{list}</Menu>
  };

    return (
      <Layout className="layout">
    <Header>
      <div className="logo">
      </div>
     {userMenu()}
    </Header>
    <Content style={{ padding: '0 50px' }}>
      {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-layout-content">
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    );
  
}

const mapStateToProps = (state:any) => ({
});

const mapDispatchToProps = ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasicLayout);