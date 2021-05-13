import React, { useContext } from "react"; 
import { UserContext } from "../../auth/UserContext";

function Dashboard() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default Dashboard;
