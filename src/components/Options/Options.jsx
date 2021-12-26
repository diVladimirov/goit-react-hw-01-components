import React from "react";
import PropTypes from "prop-types";
import styles from "./Options.module.css";
import "./Options.css";
export const Options = ({ options }) => {
  return (
    <>
      {options.map((option) => (
        <div className="container" key={option.id}>
          <span className={styles.options__span} style={{ background: "red" }}>
            {option.name}
          </span>
          <span className={styles.options__span} style={{ background: "blue" }}>
            {option.type}
          </span>
          <span
            className={styles.options__span}
            style={{ background: "green" }}
          >
            {option.id}
          </span>
        </div>
      ))}
    </>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
