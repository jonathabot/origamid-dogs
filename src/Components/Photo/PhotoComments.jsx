import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

const PhotoComments = () => {
  const { login } = useContext(UserContext);
  return <div>{login && <PhotoCommentsForm />}</div>;
};

export default PhotoComments;
