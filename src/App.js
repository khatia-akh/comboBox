import React from "react";
import "./App.css";
import ComboBox from "./ComboBox";

function App() {
  return (
    <div className="App">
      <div className="select-container">
        <ComboBox
          data={[
            { valueField: 1, textField: "Georgia" },
            { valueField: 2, textField: "France" },
            { valueField: 3, textField: "Spain" },
            { valueField: 4, textField: "Norway" },
            { valueField: 5, textField: "Germany" },
            { valueField: 6, textField: "Poland" },
            { valueField: 7, textField: "Italy" },
            { valueField: 8, textField: " United Kingdom*" },
            { valueField: 9, textField: "Bulgaria" },
            { valueField: 9, textField: " Ireland" },
            { valueField: 9, textField: "Croatia" },
            { valueField: 10, textField: "Serbia" }
          ]}
          placeholder={"Type to Search..."}
          onSelectedItemChange={(valueFiled, textField) => {
            console.log(valueFiled, textField);
          }}
          valueField={2}
          textField={"Two"}
          className="values"
        />
      </div>
    </div>
  );
}

export default App;
