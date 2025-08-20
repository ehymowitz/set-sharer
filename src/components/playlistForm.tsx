import { ChangeEvent, useState } from "react";

interface PlayListFormProps {
  onSubmit: (name: string) => void;
}

const PlayListForm = ({ onSubmit }: PlayListFormProps) => {
  const [playListName, setPlaylistName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlaylistName(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(playListName);
        setPlaylistName("");
      }}
    >
      <div>
        <input
          placeholder="Set Name"
          value={playListName}
          type="text"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Log In</button>
      </div>
    </form>
  );
};

export default PlayListForm;
