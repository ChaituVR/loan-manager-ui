import React from 'react';
import { Modal, Button, Icon } from 'antd';
import CreateCustomerForm from './AddLoan.form';

export default class CrateCustomer extends React.Component {
  state = {
    ModalText: 'Content of the modal',
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
          <Icon type="use" />
          Add new Loan
        </Button>
        <Modal
          title="Create Customer"
          visible={visible}
          onOk={this.handleCreate}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <CreateCustomerForm wrappedComponentRef={this.saveFormRef}/>
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}
