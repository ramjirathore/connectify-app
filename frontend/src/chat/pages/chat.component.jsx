import {makeStyles} from '@material-ui/core';
import HeaderChat from './headerChat.component';


const useStyles = makeStyles(() => ({
    chatContainer: {
        flex: 0.7,
    }
}));

const Chat = (props) => {
    const classes = useStyles();
	return( <div className={classes.chatContainer}>
        <HeaderChat/>
      I'm chat
    </div>);
};

export default Chat;
