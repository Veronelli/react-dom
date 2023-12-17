import { useAuth } from "./auth";

function LogoutPage() {
    const {auth} = useAuth()
  const onSubmit = (e) => {
    e.preventDefault();
    auth.logout()
    console.log("logout");
  };

  return (
    <div>
      <h1>Logout Page</h1>
      <form onSubmit={onSubmit}>
        <p>Do you want to logout</p>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
export { LogoutPage };
