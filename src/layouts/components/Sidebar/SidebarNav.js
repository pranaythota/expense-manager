import React ,{forwardRef} from 'react'
import { NavLink as RouterLink } from 'react-router-dom';
import { List, ListItem, Button, Hidden } from '@material-ui/core';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import InputIcon from '@material-ui/icons/Input'


const styles = theme =>({
     root:{},
     icon: {
        color: theme.palette.icon,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1)
      },
      button:{
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        fontWeight: theme.typography.fontWeightMedium
      },
      active:{
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        '& $icon': {
        color: theme.palette.primary.main
        }
      }

})

const CustomRouterLink = forwardRef((props, ref) => (
    
    <div
      ref={ref}
      style={{ flexGrow: 1 }}
    >
      <RouterLink {...props} />
    </div>
  ));

class SidebarNav extends React.Component{
    

    render(){
        const { pages , className , classes, ...rest } = this.props;
        return (
            <List {...rest} className = {clsx(classes.root,className)}>
                {pages.map(page => (
                    <ListItem 
                    className ={classes.item} 
                    key={page.title}
                    disableGutters >
                        <Button 
                        activeClassName = {classes.active}
                        className ={ classes.button}
                        component ={CustomRouterLink}
                        to = {page.href}>
                            <div className = {classes.icon}>{page.icon}</div>
                            {page.title}
                        </Button>
                    </ListItem>
                ))}
                <Hidden lgUp>
                    <ListItem className = {classes.item} 
                    disableGutters>
                        <Button className ={ classes.button}>
                            <div className ={classes.icon}>
                                <InputIcon></InputIcon>
                            </div>
                            {'Logout'}
                        </Button>
                    </ListItem>
                </Hidden>
            </List>
        );
    }
}

export default withStyles(styles)(SidebarNav)