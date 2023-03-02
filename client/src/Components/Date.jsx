import React, { useState, useEffect } from 'react';

function MyComponent(props) {
  const [differenceInDays, setDifferenceInDays] = useState(null);


useEffect(() => {
const createdAtDate = new Date(props.props.createdAt);
const now = new Date();
const differenceInMs = now.getTime() - createdAtDate.getTime();
const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
setDifferenceInDays(differenceInDays);
}, [props.createdAt]);

  return (
    <div>
      {differenceInDays !== null && (
        <p> {differenceInDays} d</p>
      )}
    </div>
  );
}

export default MyComponent