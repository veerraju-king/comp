import React, { useState } from 'react';

// Component 1
const Greeting = ({ name }) => (
  <div className="bg-blue-500 text-white p-4 rounded mb-4">
    <h1 className="text-xl">Hello, {name}!</h1>
  </div>
);

// Component 2
const Counter = ({ count, onClick }) => (
  <div className="bg-green-500 text-white p-4 rounded mb-4 text-center">
    <p className="text-2xl mb-2">{count}</p>
    <button onClick={onClick} className="bg-green-700 px-4 py-2 rounded">
      Click Me
    </button>
  </div>
);

// Component 3
const UserInfo = ({ user }) => (
  <div className="bg-purple-500 text-white p-4 rounded mb-4">
    <p>Name: {user.name}</p>
    <p>Age: {user.age}</p>
  </div>
);

// Component 4
const MessageBox = ({ message }) => (
  <div className="bg-red-500 text-white p-4 rounded">
    <p>{message}</p>
  </div>
);

// Main App
function App() {
  const [count, setCount] = useState(0);
  const user = { name: 'John', age: 25 };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Greeting name={user.name} />
      <Counter count={count} onClick={() => setCount(count + 1)} />
      <UserInfo user={user} />
      <MessageBox message="This is a simple React app!" />
    </div>
  );
}

export default App;