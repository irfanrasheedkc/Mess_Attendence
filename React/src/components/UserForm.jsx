import React, { useState } from 'react';

function UserForm() {
  const [userCode, setUserCode] = useState('');
  const [userDetails, setUserDetails] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const response = await fetch(`https://your-api-endpoint.com/users/${userCode}`);
    const response = await fetch(`/api/users/`+userCode);
    const data = await response.json();
    setUserDetails(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter user code"
        value={userCode}
        onChange={event => setUserCode(event.target.value)}
      />
      <button type="submit">Submit</button>
      {userDetails && (
        <div>
          <h2>User Details</h2>
          <p>Name: {userDetails.name}</p>
          <p>UserCode: {userDetails.usercode}</p>
          {/* etc */}
        </div>
      )}
    </form>
  );
}

export default UserForm;