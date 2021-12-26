import "./App.css";
// import React from "react";
import AppsExtension from "./AppsExtension.jsx";
import PropTypes from "prop-types";
import { Options } from "../Options";

const carArray = [
  {
    name: "dodge",
    type: "pony",
    id: 1,
  },
  {
    name: "dodge",
    type: "pony",
    id: 2,
  },
  {
    name: "dodge",
    type: "pony",
    id: 3,
  },
  {
    name: "dodge",
    type: "pony",
    id: 4,
  },
];

export function App({ title }) {
  return (
    <div className="App">
      <h1>hi</h1>
      {title && <AppsExtension textprop={title} />}
      {carArray.length > 0 ? (
        <Options options={carArray} />
      ) : (
        <AppsExtension textprop={"no cars"} />
      )}
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>hi</h1>
//       </div>
//     );
//   }
// }

// export default App;
