import React, { useContext } from "react";
import { DisplayedSong } from "../../pages/index";
import { LoggedIn } from "../../pages/_app";
import { TextButton } from "../../styles/clickables";
import { useQueryString } from "../../utils/queryString";

const logoutButton = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedIn);
  const { setDisplayedSong, setSongList } = useContext(DisplayedSong);
  const setQueryString = useQueryString("set")[1];

  const handleClick = () => {
    if (!confirm("Would you like to logout?")) {
      return;
    }
    setDisplayedSong(undefined);
    setLoggedIn("");
    setQueryString("");
    setSongList([]);
  };

  return (
    <div className="logout-button">
      <TextButton
        onClick={() => handleClick()}
        style={{ textTransform: "capitalize" }}
      >
        Log Out from {loggedIn}
      </TextButton>
    </div>
  );
};

export default logoutButton;
