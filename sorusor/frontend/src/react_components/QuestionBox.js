import React from "react";
import { Avatar } from "@mui/material";
import "./css/QuestionBox.css";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";

function QuestionBox() {
  const user = useSelector(selectUser);
  return (
    <div className="QuestionBox">
      <div className="QuestionBoxInfo">
        <Avatar src={user?.photo} />
      </div>
      <div className="QuestionBoxSoruSor">
        <h5>What Do You Want to Ask or Share?</h5>
      </div>
    </div>
  );
}

export default QuestionBox;
