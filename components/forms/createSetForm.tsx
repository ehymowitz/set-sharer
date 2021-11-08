import React, {
  useState,
  useContext,
  SyntheticEvent,
  ChangeEvent,
} from "react";
import { createSet } from "../../utils/crud";
import { LoggedIn } from "../../pages/_app";
import { useQueryString } from "../../utils/queryString";
import { TextButton } from "../../styles/clickables";

const CreateSetForm = () => {
  const [setName, changeSetName] = useState("");
  const setQueryString = useQueryString("set")[1];
  const { setLoggedIn } = useContext(LoggedIn);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const usedSetName = setName.toLowerCase();
    createSet({ name: usedSetName });
    setLoggedIn(usedSetName);
    setQueryString(usedSetName);
    changeSetName("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeSetName(e.target.value);
  };

  return (
    <div className="create-set-form">
      <h1>Create a Set</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="inputs">
          <input
            placeholder="Set Name"
            type="text"
            value={setName}
            onChange={(e) => handleChange(e)}
          />
          <TextButton type="submit">Create Set</TextButton>
        </div>
      </form>
    </div>
  );
};

export default CreateSetForm;
