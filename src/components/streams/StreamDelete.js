import React from 'react';
import Modal from '../modal';

const StreamDelete = () => {
  const actions = (
    <>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );

  return (
    <div>
      StreamDelete
      <Modal 
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;