import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles(() => ({
    chatContainer: {
        flex: 0.7,
    }
}));

const Chat = () => {
    const classes = useStyles();
	return( <div className={classes.chatContainer}>
        I'm chat
    </div>);
};

export default Chat;
