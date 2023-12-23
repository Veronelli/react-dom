import React from "react";
import { AuthRoute, useAuth } from "./auth";

function ProfilePage() {
  const { auth } = useAuth();
  return (
    <>
    <div className="mx-8">
        <h1 className="font-bold text-2xl mt-4 mx-2">Profile Page</h1>
        <hr className="my-4" />

        <h3 className="text-center text-3xl font-bold">WELCOME!</h3>
        <table>
          <tr>
            <td>
              <p className="text-xl">
                <b>Username:</b>
              </p>
            </td>
            <td>
              <p>
                <p className="text-xl">{auth.user?.toUpperCase()}</p>
              </p>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export { ProfilePage };
