import React from 'react';
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const propTypes = {
    listText: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.string,
        text: PropTypes.string,
        action: PropTypes.string
    })),
}
const defaultProps = {
    onChange: () => { }
}

const ListLogs = (props) => {
    return (
        <div>
            <List >
                {props.listText.map((i, index) =>
                    <ListItem key={index}>{i.time} : {i.action} "{i.text}" </ListItem>)}
            </List>
        </div>
    );
};

ListLogs.propTypes = propTypes;
ListLogs.defaultProps = defaultProps;


export default ListLogs;