
import Select from "react-select";
function Filter({ filterTodos, setSelectedOption }) {
  const options = [
    { value: "All", label: "All" },
    { value: "Complete", label: "Complete" },
    { value: "incomplete", label: "incomplete" },
  ];

  const selectHandler = (e) => {
    console.log(e.value);
    setSelectedOption(e.value);
    filterTodos(e.value);
  };
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      width: "200px",
      backgroundColor: "#78716c",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "#d6d3d1",
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: "#78716c",
    }),

    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "#d6d3d1" : "#78716c",
        backgroundColor: isFocused ? "#d6d3d1" : "#78716c",
        color: isFocused ? "#78716c" : "#d6d3d1",
        cursor: isDisabled ? "not-allowed" : "pointer",
      };
    },
  };

  return (
    <Select
      styles={colourStyles}
      onChange={selectHandler}
      options={options}
      defaultValue={options[0]}
    />
  );
}

export default Filter;