import { ChangeEvent, SyntheticEvent, useContext, useState } from "react";
import { IsLoading, LoggedIn } from "../../pages/_app";
import { TextButton } from "../../styles/clickables";
import { TextInput } from "../../styles/text";
import { readSets } from "../../utils/crud/set";
import { useQueryString } from "../../utils/queryString";

const LoginForm = () => {
  const [setName, changeSetName] = useState("");
  const setQueryString = useQueryString("set")[1];

  const { setLoggedIn } = useContext(LoggedIn);
  const { setLoading } = useContext(IsLoading);

  const handleSubmit = (e: SyntheticEvent) => {
    setLoading(true);
    e.preventDefault();
    const usedSetName = setName.toLowerCase();
    readSets().then((data) => {
      if (data.includes(usedSetName)) {
        setQueryString(usedSetName);
        setLoggedIn(usedSetName);
      } else {
        alert("Invalid Login");
      }
    });
    changeSetName("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeSetName(e.target.value);
  };

  return (
    <div className="set-login-form">
      <h1>Log in to see a Set</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="inputs">
          <TextInput
            placeholder="Set Name"
            value={setName}
            type="text"
            onChange={(e) => handleChange(e)}
          />
          <TextButton type="submit">Log In</TextButton>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
