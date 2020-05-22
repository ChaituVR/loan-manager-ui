import React from 'react';
import { Form, Input, Button } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

let id = 0;

class DynamicFieldSet extends React.Component {
  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       const { keys, names } = values;
  //       console.log('Received values of form: ', values);
  //       console.log('Merged values:', keys.map(key => names[key]));
  //     }
  //   });
  // };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18, offset: 2 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <Form.Item
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        label={index === 0 ? 'Passengers' : ''}
        required={false}
        key={k}
      >
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: 'Please input passenger\'s name or delete this field.',
            },
          ],
        })(<Input placeholder="passenger name" style={{ width: '60%', marginRight: 8 }} />)}
        {keys.length > 1 ? (
          <DeleteOutlined
            className="dynamic-delete-button"
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Loan Name" {...formItemLayout}>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input placeholder="Give your loan a name to easily identify" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Name">
          {
            getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input your name',
                },
              ],
            })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        {formItems}
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <PlusOutlined /> Add field
          </Button>
        </Form.Item>
        {/* <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type="primary" htmlType="submit">
              Submit
          </Button>
        </Form.Item> */}
      </Form>
    );
  }
}

const AddLoanForm = Form.create({ name: 'dynamic_form_item' })(DynamicFieldSet);
export default AddLoanForm;