import React from 'react';
import { Drawer, Button } from 'antd';
import NormalLoginForm from '../Auth/Login/Login.component';
import { PlusOutlined } from '@ant-design/icons';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = { visible: false };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          <PlusOutlined /> Login 
        </Button>
        <Drawer
          title="Login to Dashboard"
          position="right"
          width="100%"
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <NormalLoginForm />
        </Drawer>
      </div>
    );
  }
}

export default Home;