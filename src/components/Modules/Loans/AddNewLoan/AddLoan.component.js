import React from 'react';
import { Modal, Button } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import CreateCustomerForm from './AddLoan.form';
import './AddLoan.scss';

export default class AddLoan extends React.Component {
  state = {
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  // handleCreate = () => {
  //   this.setState({
  //     ModalText: 'The modal will be closed aftesr two seconds',
  //     confirmLoading: true,
  //   });
  //   setTimeout(() => {
  //     this.setState({
  //       visible: false,
  //       confirmLoading: false,
  //     });
  //   }, 2000);
  // };
  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          <AppstoreAddOutlined />
          Add new Loan
        </Button>
        <Modal
          title="Add a new Loan"
          visible={visible}
          onOk={this.handleCreate}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <CreateCustomerForm wrappedComponentRef={this.saveFormRef}/>
        </Modal>
      </div>
    );
  }
}
