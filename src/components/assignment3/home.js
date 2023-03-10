import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return(
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/component1">Component 1</Link>
          </li>
          <li>
            <Link to="/component2">Component 2</Link>
          </li>
          <li>
            <Link to="/component3">Component 3</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
