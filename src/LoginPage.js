import { useState } from "react";
import { useAuth } from "./auth";

function LoginPage() {
  const [username, setUsername] = useState("");
  const { auth } = useAuth();
  const onSubmit = (e) => {
    e.preventDefault();
    auth.login({username})
    console.log("Login");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={onSubmit}>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          id="username"
          required
          autoFocus
          autoComplete="off"
          minLength="3"
          maxLength="20"
          pattern="[a-zA-Z0-9]+"
          title="Only letters and numbers"
          placeholder="username"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export { LoginPage };
