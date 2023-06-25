// import { Component } from "react";
import css from "../Filter/Filter.module.css";
// import PropTypes from 'prop-types';

export const Filter =({onChange }) => {  

  // render() {
    return (<div className={css.box}>
      <form name="search" className={css.form}>
        <label className={css.label}>
          Find contacts by name
          <input 
            className={css.input}
            type="text"
            onChange={evt => onChange(evt.currentTarget.value)}
          //   value={Filter.props.filter}
          >
          </input>
        </label>
      </form>
    </div>);
  }
// }

// const onInput = (evt) => {
//   const filterValue = evt.currentTarget.value.trim();
//   console.log(filterValue);
//   this.props.onFilterInput(filterValue);
// }

// Filter.propTypes = {
//   onFilterInput: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// }