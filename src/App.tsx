import "./App.css";

/**
 * App will handle all inbound traffic. It starts by checking if Auth0 is loading in which case it render a loader.
 * Otherwise it will do one of three things
 *  - if a user is logged in, it will redirect them to the first page of the dashboard
 * @returns
 */
export const App = () => {
  return <h1 className="text-blue-400">hello world</h1>;
};
