import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import "./input.scss";

const Search = ({ value, type, label, placeholder, helperText, styles, onChange }) => {
  return (
    <div className="input-component">
      <TextField
        fullWidth
        margin="normal"
        value={value}
        type={type}
        label={label}
        placeholder={placeholder}
        helperText={helperText}
        style={{ ...styles }}
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};

Search.defaultProps = {
  value: "",
  type: "text",
  label: "",
  placeholder: "",
  helperText: "",
  styles: {},
  onChange: () => {},
};

Search.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  styles: PropTypes.object,
  onChange: PropTypes.func,
};

export default Search;
