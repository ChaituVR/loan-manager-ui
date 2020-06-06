import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, InputNumber, Checkbox } from 'antd';

const AddLoanForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="add-loan-form">
      <div className="input-container">
        Loan Name:
        <Input 
          type="text" 
          placeholder="Ex: JPMorgan, Wells Fargo etc" 
          name="loanName" 
          ref={register({required: true})} 
        />
      </div>
      <div className="input-container">
        Amount you have to pay back: 
        <InputNumber
          placeholder="Ex: $1000"
          name="totalAmount"
          ref={register({required: true, max: 9999999999999, min: 0})}   
        />
      </div>
      <div className="input-container">
        <Checkbox
          name="includedInterest" 
          ref={register}
        >
          Above amount includes interest amount
        </Checkbox>
      </div>
      <div className="input-container">
        <Checkbox 
          name="emi" 
          ref={register}
        >
          This is a Monthly Payable Loan (EMI)
        </Checkbox>
      </div>
      <input type="submit" />
    </form>
  );
}

export default AddLoanForm;