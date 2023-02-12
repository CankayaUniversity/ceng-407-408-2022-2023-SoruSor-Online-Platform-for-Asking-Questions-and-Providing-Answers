import React from "react";
import { Avatar } from "@mui/material";

function QuestionBox() {
  return (
    <div className="QuestionBox">
      <div className="QuestionBoxInfo">
        <Avatar />
      </div>
      <div className="QuestionBoxSoruSor">
        <p>What Do You Want to Ask or Share?</p>
      </div>
    </div>
  );
}

export default QuestionBox;
