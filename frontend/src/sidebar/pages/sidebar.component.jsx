import {makeStyles} from '@material-ui/core';
import Header from '../../shared/components/header.component';

const useStyles = makeStyles(() => ({
    sidebar: {
       flex:0.3,
        borderRight: "1px solid #323739"
    }
}));


const Sidebar = () => {
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            <Header />
            I'm SideBar
        </div>
    )
}

export default Sidebar;
