import React, { Component } from 'react'
import LoanCard from '../LoanCard/LoanCard'

export default class LoanTable extends Component {
  render() {
    const loanDetails = {
      name: 'HDFC Bank',
      loanAmount: 1002554,
      paidAmount: 150000,
      emi: 16101,
      notifications: true,
      status: 'In Progress',
      coverImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }
    return (
      <div>
        <LoanCard loanDetails={loanDetails} loading={false}/>
      </div>
    )
  }
}
