import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./search.scss";

const Search = ({ value, placeholder, styles, onChange }) => {
  return (
    <TextField
      className="search-component"
      value={value}
      placeholder={placeholder}
      style={{ ...styles }}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment>
            <IconButton>
              <SearchIcon style={{ fill: "#ffffff" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

Search.defaultProps = {
  value: "",
  placeholder: "",
  styles: {},
  onChange: () => {},
};

Search.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  styles: PropTypes.object,
  onChange: PropTypes.func,
};

export default Search;
