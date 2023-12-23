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
    <div className="mx-8">
      <h1 className="font-bold text-2xl mt-4 mx-2">Login Page</h1>
      <hr className="my-2"/>
      <form onSubmit={onSubmit} className="flex flex-col w-72">
        <label className="font-semibold text-lg">Username: </label>
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
          className="border border-gray-300 rounded-md p-2 text-lg"
        />

        <button type="submit" className="font-bold text-lg bg-red-100 p-2 mt-4 rounded-md">Login</button>
      </form>
    </div>
  );
}
export { LoginPage };
