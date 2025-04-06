import { useState } from "react";

const Workshop3 = () => {
  const [user, setUser] = useState({
    nameState: "phtasak",
    emailState: "dekmail1596@gmail.com",
    telephoneState: "0856433591",
  });
  return (
    <>
      <p>Name : {user.nameState}</p>
      <p>Email : {user.emailState}</p>
      <p>Telephone : {user.telephoneState}</p>
      <button
        onClick={() =>
          setUser({
            ...user,
            nameState:'22'
          })
        }
      >Set New User</button>
    </>
  );
};
export default Workshop3;
