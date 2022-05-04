import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = props => {
  // console.log(props) //props being passed down from react router dom
  return (<div>StreamEdit</div>);
};

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps) // same as above
  return { stream: null };
};

export default connect(mapStateToProps)(StreamEdit);