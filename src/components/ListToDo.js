import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';


const SORT_TYPES = {
    DEFAULT: { value: "DEFAULT", ranking: 0 },
    ASC: { value: "ASC", ranking: 1 },
    DESC: { value: "DESC", ranking: 2 }
}

const propTypes = {
    allText: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
    sortType: PropTypes.oneOf([SORT_TYPES.DEFAULT, SORT_TYPES.ASC, SORT_TYPES.DESC])
}
const defaultProps = {
    allText: [],
    sortType: SORT_TYPES.ASC,
    onClick: () => { }
}


class ListToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortType: this.props.sortType,
        }
    }
    handleDelete = (e) => {
        e.preventDefault()
        this.props.onDelete(e.target.value)

    }
    handleCount = (sortType) => {
        const nextSort = sortType.ranking + 1;
        const target = Object.keys(SORT_TYPES).find(key => SORT_TYPES[key].ranking === nextSort) || SORT_TYPES.DEFAULT.value
        this.setState({ sortType: SORT_TYPES[target] })
        console.log(sortType)
    }
    sortData = (type, allText) => {
        const data = [...allText]

        if (type.value === SORT_TYPES.DEFAULT.value) {
            return allText;
        } else if (type.value === SORT_TYPES.ASC.value) {
            return data.sort()
        } else if (type.value === SORT_TYPES.DESC.value) {
            return data.sort((value1, value2) => `${value2}`.localeCompare(`${value1}`))
        }
    }
    render() {
        const { allText } = this.props;
        const { sortType } = this.state;

        return (
            <div>
                <List>
                    <Button variant="contained" onClick={() => this.handleCount(sortType)}>Sort {sortType.value}</Button>
                    {this.sortData(sortType, allText).map((text, index) =>
                        <ListItem key={index}>{text}  <Button variant="contained" value={text} onClick={this.handleDelete}>Delete</Button></ListItem>)}
                </List>
            </div>
        );
    }
}

ListToDo.propTypes = propTypes;
ListToDo.defaultProps = defaultProps;

export default ListToDo;
export {
    SORT_TYPES
}
// import React from 'react';

// const ListToDo = (props) => {
//     const handleDelete = (e) => {
//         e.preventDefault()
//         props.onClick(e.target.value)

//     }
//     const sortAes = (e) => {
//         e.preventDefault()
//         props.allText.sort()
//     }

//     return (
//         <div>
//             {/* <div class="dropdown">
//                 <button class="dropbtn">Dropdown</button>
//                 <div class="dropdown-content"> */}
//             <button onClick={sortAes}>Sort Aescending</button>
//             {/* <a onClick={sortDesc}>Sort Descending</a>
//                     <a onClick={Unsort}>Unsort</a> */}
//             {/* </div>
//             </div > */}
//             <ul>
//                 {props.allText.map((text, index) =>
//                     <li key={index}>{text}<button value={text} onClick={handleDelete}>Delete</button></li>)}
//             </ul>
//         </div >
//     );
// };

// export default ListToDo;