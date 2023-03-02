import React from "react";
import { Avatar } from "@mui/material";
import "./css/QuestionBox.css";

function QuestionBox() {
  return (
    <div className="QuestionBox">
      <div className="QuestionBoxInfo">
        <Avatar />
      </div>
      <div className="QuestionBoxSoruSor">
        <h5>What Do You Want to Ask or Share?</h5>
      </div>
    </div>
  );
}

export default QuestionBox;
