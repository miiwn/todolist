import React from 'react';
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core';


const propTypes = {
    onChange: PropTypes.func
}
const defaultProps = {
    onChange: () => { }
}

const Search = (props) => {
    // const handleProps = (e) => {
    //     this.props.onChange(e.target.value)
    // }

    return (
        <div>
            <TextField type="text" onChange={(e) => props.onChange(e.target.value)} placeholder="Search"></TextField>
        </div>
    );
};

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;


export default Search;

// class Search extends Component {
//     handleProps = (e) => {
//         this.props.onChange(e.target.value)
//     }

//     render() {
//         return (
//             <div>
//             </div>
//         );
//     }
// }

// export default Search;   