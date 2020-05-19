import React from 'react';
import { PageHeader, Button, Dropdown, Icon, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from '../../config';
import { Logo } from '../Common/Image';

const Header = (props) => {
  const signedInName = props.user.displayName ? 
    props.user.displayName : 
    props.user.phoneNumber;
  const menu = (
    <Menu>
      <Menu.Item key="0">
        Signed in as <b>{signedInName}</b>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <Link to={routes.myAccount}>
          <Icon type="user" />
          <span style={{ marginLeft: 10 }}>My Account</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={routes.settings}>
          <Icon type="setting" />
          <span style={{ marginLeft: 10 }}>Settings</span>      
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={routes.help}>
          <Icon type="question-circle" />
          <span style={{ marginLeft: 10 }}>Help</span>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4" onClick={props.handleLogout}>
        <Icon type="logout" />
        <span style={{ marginLeft: 10 }}>Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (<div>
    <PageHeader
      style={{
        borderBottom: '1px solid rgb(235, 237, 240)',
        padding: '5px 10px',
      }}
      title={
        <>
          <Button 
            type="link"
            size="large" 
            onClick={props.toggleCollapsed}
            style={{ color: 'black' }}
          >
            <Icon type="menu" />
          </Button>
          <Link to="/dashboard">
            <Logo type="logo-main-white-background" style={{ width: '100%', maxWidth: 150}}/>
          </Link>
        </>
      }
      subTitle=""
      extra={[
        <Dropdown 
          overlay={menu}
          trigger={['click']}
          key="header-dropdown"
        >
          <Button size="large">
            <Avatar 
              style={{ 
                backgroundColor: '#7265e6', 
                verticalAlign: 'middle',
                margin: 0,
              }} 
              src={props.user.photoURL}
              size="medium"
              icon="user"
            />
            <Icon size="medium" type="caret-down" style={{ marginTop: 8 }} />
          </Button>
        </Dropdown>,
      ]}
    />
  </div>);
};

export default Header;


