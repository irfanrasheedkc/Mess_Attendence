import React, { useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  React.useEffect(() => {
    fetch('/api/userse')
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => setError(error.message))
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {data && data.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;