import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch default data correctly
  useEffect(() => {
    axios
      .get("http://localhost:5001/users")
      .then((res) => {
        if(!res.data[0].name) {
          setName(" ");
        }
      })
      .catch((err) => setError(err.message));
  }, []); // <<< IMPORTANT: only run once

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post("http://localhost:5001/users", {
        name,
        email,
      });

      setName("");
      setEmail("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px"  }}>
      <h2>Add New User</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} >
        <div style={{ marginBottom: "10px" }}>
          <label>Name: </label><br />
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email: </label><br />
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading} style={{ marginTop: "10px" , padding: "5px 10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px" , marginLeft: "50px" }}>
          {loading ? "Adding..." : "Add User"}
        </button>
      </form>
    </div>
  );
}
