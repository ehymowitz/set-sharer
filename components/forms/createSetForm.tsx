import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import { LoggedIn } from "../../pages/_app";
import { TextButton } from "../../styles/clickables";
import { TextInput } from "../../styles/text";
import { createSet } from "../../utils/crud/set";
import { useQueryString } from "../../utils/queryString";

const CreateSetForm = () => {
  const [setName, changeSetName] = useState("");
  const setQueryString = useQueryString("set")[1];
  const { setLoggedIn } = useContext(LoggedIn);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const usedSetName = setName.toLowerCase();
    await createSet({ name: usedSetName });
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
          <TextInput
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
