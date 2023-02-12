import { Outlet, useNavigate } from "react-router-dom";

export default function Component2() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("./component3")}>Component 2</button>
      <Outlet />
    </>
  );
}
