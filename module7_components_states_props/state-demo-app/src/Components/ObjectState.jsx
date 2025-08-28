import React, { useState } from 'react'

export default function ObjectState() {
  const [user, setUser] = useState({ name: "charan", age: 23 });

  const update = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <>
      <h2>{user.name} - {user.age}</h2>

      {/* Birthday message when age = 24 */}
      {user.age === 24 && <p>🎉 Happy Birthday Charan! 🎂</p>}

      <button onClick={update}>Click</button>
    </>
  );
}
