import React from 'react';
// import { action } from '@storybook/addon-actions';
import AddLoan from './AddLoan.component';
import AddLoanForm from './AddLoan.form';

export default {
  title: 'Add Loan',
  component: AddLoan,
};

export const Default = () => (
  <AddLoan />
);

export const Form = () => (
  <AddLoanForm />
)
