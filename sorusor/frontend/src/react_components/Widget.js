import React from "react";
import WidgetContent from "./WidgetContent";
import "./css/Widget.css";

function Widget() {
  return (
    <div className="widget">
      <div className="widgetHeader">Hot Communities</div>
      <div className="widgetContents">
        <WidgetContent />
      </div>
    </div>
  );
}

export default Widget;
