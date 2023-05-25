import { useSelector } from "react-redux";

const Showdata = () => {
  const user = useSelector((state) => state.user);
  const { username, email, passcode } = user || {};

  return (
    <div>
      Username: {username}
      <br />
      Email: {email}
      <br />
      Passcode: {passcode}
      <br />
    </div>
  );
};

export default Showdata;
