import React from 'react';
// import { action } from '@storybook/addon-actions';
import LoanCard from './LoanCard';

export default {
  title: 'LoanCard',
  component: LoanCard,
};

const loanDetails={
  '_id': {
    '$oid': '5ecc0aa2aecf3a27a46faca4'
  },
  'name': 'HDFC Bank',
  'loanAmount': 1002554,
  'paidAmount': 150000,
  'emi': 16101,
  'notifications': true,
  'status': 'In Progress',
  'coverImage': 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
}

export const Default = () => (
  <LoanCard loanDetails={loanDetails}/>
);
