import React from 'react';
import { Skeleton, Switch, Card, Badge, Progress, message, Modal } from 'antd';
import { EditOutlined, SettingOutlined, BellOutlined, DeleteOutlined, EyeOutlined, StopOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import './LoanCard';

const { Meta } = Card;

class LoanCard extends React.Component {
  
  showConfirm = () => {
    const { confirm } = Modal;
    confirm({
      title: 'Are you sure you want to delete this Loan???',
      icon: <ExclamationCircleOutlined />,
      content: 'Please make sure before deleting, the data for this loan will not be stored anywhere if you delete...',
      onOk() {
        console.log('OK....');
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  }
  notificationChanged = (checked) => {
    message.loading({ content: 'Loading...', key: 'notifincation' });
    setTimeout(() => {
      message.warn({
        content: checked ? 'Notifications are enabled for your loan': 'Notifications are disabled for your loan', 
        onClick: () => {
          console.log('Notification Clicked!');
        },
        icon: checked ? <BellOutlined/> : <StopOutlined />,
        key: 'notifincation'
      });
    }, 1000);
  }
  render() {
    const { loading } = this.props;
    return (
      <div className="loan-card">
        <Card
          hoverable
          cover={
            this.props.loanDetails.coverImage ? <img
              alt="example"
              src={this.props.loanDetails.coverImage}
            /> : null
          }
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <EyeOutlined />,
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <DeleteOutlined onClick={this.showConfirm} />
          ]}
        >
          <Skeleton loading={loading} avatar active>
            <Switch
              style={{ position: 'absolute', right: 25 }}
              checkedChildren={<BellOutlined twoToneColor="#eb2f96"/>}
              unCheckedChildren={<StopOutlined />}
              defaultChecked
              loading={this.props.loading}
              onChange={this.notificationChanged}
            />
            <Meta
              style={{textAlign: 'left'}}
              title={this.props.loanDetails.name}
              description={
                <div>
                  Loan Balance: ₹{(this.props.loanDetails.loanAmount - this.props.loanDetails.paidAmount).toLocaleString()}
                  <br/>
                  Status: <Badge 
                    status={this.props.loanDetails.status === 'In Progress' ? 'processing': 'success'} 
                    text={this.props.loanDetails.status} 
                  />
                </div>
              }
            />
          </Skeleton>
          <Progress
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            percent={+((this.props.loanDetails.paidAmount/this.props.loanDetails.loanAmount) * 100).toFixed(2)}
            size="small" 
          />
        </Card>
      </div>
    );
  }
}

export default LoanCard;