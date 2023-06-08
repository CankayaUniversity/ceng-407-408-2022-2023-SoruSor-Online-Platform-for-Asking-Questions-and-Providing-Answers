import React from "react"; // Importing the React library
import WidgetContent from "./WidgetContent"; // Importing the WidgetContent component
import "./css/Widget.css"; // Importing the Widget CSS file

function Widget() {
  // Defining the Widget component
  return (
    <div className="widget">
      <div className="widgetHeader"> Hot Communities</div>
      <div className="widgetContents">
        <WidgetContent />
      </div>
    </div>
  );
}

export default Widget; // Exporting the Widget component as a default export
