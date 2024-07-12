import { useState } from "react";
import FormExample from "./components/Form";
import Hero from "./components/Hero";
import LoginExample from "./components/Login";

const App = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <div className="container mx-auto px-4">
      {/* <Hero /> */}
      <img class="rounded w-36 h-36" src={user?.avatar} alt="Extra large avatar"></img>
      <h3>{user?.name}</h3>
      {!isSuccess && <FormExample setIsSuccess={setIsSuccess} />}
      {isSuccess && <LoginExample setIsSuccess={setIsSuccess} setUser={setUser}  />}
    </div>
  );
};

export default App;

// REDUX - Zustand - MobX - Redux Toolkit - Recoil - /(vue)/
// Provider
// Reducers
// State - Store
// Actions
// Dispatch