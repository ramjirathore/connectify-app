import React from 'react'
import { makeStyles, Avatar } from '@material-ui/core';
import {Chat, DataUsage, MoreVert} from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    head: {
        background: '#2a2f32', 
        height: '2.5em',
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    icons : {
        display: 'flex',
        flex: 0.3,
        justifyContent: 'space-between',
    }
}))

const Header = ({props}) => {
    const classes = useStyles();
    return (
        <div className={classes.head}>
            <Avatar src="/broken-image.jpg" />
            <div className={classes.icons}>
                <DataUsage style={{color: 'white', cursor: 'pointer'}} />
                <Chat style={{color: 'white', cursor: 'pointer'}}/>
                <MoreVert style={{color: 'white', cursor: 'pointer'}}/>
            </div>
        </div>
    )
}

export default Header;
