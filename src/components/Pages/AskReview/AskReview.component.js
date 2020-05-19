import React from 'react';
import AskReviewSteps from '../../Modules/AskReviewSteps/AskReviewSteps.component';

export default class AskReview extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return <div>
      <h2>Ask Review</h2>
      <AskReviewSteps />
    </div>;
  }
}