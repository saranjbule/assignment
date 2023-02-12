import { Outlet, useNavigate } from "react-router-dom";

export default function Component1() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("./component2")}>Component 1</button>
      <Outlet />
    </>
  );
}
