import React from 'react';

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
  );
};

// If there is no message value, it will use the default values
Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
