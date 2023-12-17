import React from "react";
import { useAuth } from "./auth";

function ProfilePage() {
  const { auth } = useAuth();
  return (
    <>
      <h1>Profile Page</h1>

      <h3>Welcome</h3>
      <table>
        <tr>
          <td>
            <p>
              <b>Username:</b>
            </p>
          </td>
          <td>
            <p>
              <p>{auth.user.toUpperCase()}</p>
            </p>
          </td>
        </tr>
      </table>
    </>
  );
}

export { ProfilePage };
