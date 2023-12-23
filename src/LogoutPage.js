import { useAuth } from "./auth";

function LogoutPage() {
  const { auth } = useAuth();
  const onSubmit = (e) => {
    e.preventDefault();
    auth.logout();
    console.log("logout");
  };

  return (
    <div className="mx-8">
      <h1 className="font-bold text-2xl mt-4 mx-2">Logout</h1>
      <hr className="my-4" />
      <form onSubmit={onSubmit}>
        <p className="text-xl">Do you want to logout</p>
        <button type="submit" className="py-1 px-3 bg-red-200 text-red-800 font-bold rounded-md">Logout</button>
      </form>
    </div>
  );
}
export { LogoutPage };
