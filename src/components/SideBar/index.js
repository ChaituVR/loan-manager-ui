import React, { Component } from 'react';
import { DollarCircleOutlined, DashboardOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from '../../config';
const { Sider, Content } = Layout;

export default class SideBar extends Component {
  render() {
    return (
      <Layout>
        <Sider 
          className="sidebar-container" 
          trigger={null} 
          theme={'light'} 
          collapsible 
          collapsed={this.props.collapsed}
        >
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="dashboard">
              <Link to={routes.dashboard}>
                <DashboardOutlined />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="loans">
              <Link to={routes.loans}>
                <DollarCircleOutlined />
                <span>My Loans</span>
              </Link>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="appstore">
              <AppstoreOutlined />
              <span>Others</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content
            className="content-container"
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
