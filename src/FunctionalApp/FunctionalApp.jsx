import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";

export const FunctionalApp = () => {
  const [user, setUser] = useState(null)
  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userData={user} />
      <FunctionalForm
        onSubmit={(user) => setUser(user)}
      />
    </>
  );
};
