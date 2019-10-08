import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import ListLogs from './ListLogs'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'


const LOG_TYPES = {
    All: { value: "All", ranking: 0 },
    Added: { value: "Added", ranking: 1 },
    Deleted: { value: "Deleted", ranking: 2 }
}

const propTypes = {
    allLog: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.string,
        text: PropTypes.string,
        action: PropTypes.string
    })),
}
const defaultProps = {
    allLog: [],
}

const UserLog = (props) => {
    const [logType, setLogType] = useState(LOG_TYPES.All);

    useEffect(() => {
        console.log("Effect")
    })

    const handleType = (e) => {
        setLogType(LOG_TYPES[e.target.value])
    }

    const filterLog = (logs, logtype) => {
        const data = [...logs]
        if (logtype.value === LOG_TYPES.All.value) {
            return logs
        } else {
            return data.filter((item) => item.action === logtype.value)
        }
    }

    return (
        <div>
            <Select
                value={logType.value}
                onChange={handleType}
            >
                <MenuItem value={LOG_TYPES.All.value}>All</MenuItem>
                <MenuItem value={LOG_TYPES.Added.value}>Added</MenuItem>
                <MenuItem value={LOG_TYPES.Deleted.value}>Deleted</MenuItem>
            </Select>
            <ListLogs listText={filterLog(props.allLogs, logType)} />
        </div>
    )
}


UserLog.propTypes = propTypes
UserLog.defaultProps = defaultProps
export default UserLog;