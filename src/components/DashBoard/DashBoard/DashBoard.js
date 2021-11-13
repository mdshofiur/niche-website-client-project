import  React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch,Route,useRouteMatch,Link} from "react-router-dom";
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import MyOrders from '../MyOrders/MyOrders';
import Home from '../../Home/Home';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import AddAProduct from '../Admin/AddAProduct/AddAProduct';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import useAuth from '../../../Hook/useAuth';
import {NavLink} from 'react-router-dom'

const drawerWidth = 230;

function DashBoard(props) {
   
  const {user,userSignOut,admin} =useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{marginLeft:'20px',paddingRight:'10px', }}>
      <Toolbar />
      
      <div><Link className="btn btn-danger  my-2" to='/home'> <Button color="inherit">Back Home </Button></Link></div>
     {admin? <Box style={{width: '130%'}}>
     <Link className="btn btn-primary my-2" to={`${url}/ManageAllOrders`}> <Button color="inherit">Manage All Orders</Button></Link>
     <Link className="btn btn-primary" to={`${url}/MakeAdmin`}> <Button color="inherit">Make Admin</Button></Link>
     <Link className="btn btn-primary my-2" to={`${url}/AddAProduct`}> <Button color="inherit">Add Product</Button></Link>
     <Link className="btn btn-primary" to={`${url}/ManageProducts`}> <Button color="inherit">Manage Products</Button></Link>
    </Box> : <Box> <div><Link className="btn btn-primary" to={`${url}/myOrders`}> <Button color="inherit">My Orders</Button></Link></div>
      <div> <Link className="btn btn-primary my-2" to={`${url}/review`}> <Button color="inherit">Review</Button></Link></div>
     <div> <Link className="btn btn-primary" to={`${url}/pay`}> <Button color="inherit">Pay</Button></Link></div></Box>}



    {user.email && <NavLink className="btn btn-danger mt-2" to="/home"><Button onClick={userSignOut} variant="secondary">Login Out</Button>
            </NavLink>}
    </div>

    
   

  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
  

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>

        <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path={`${path}/myorders`}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
        <Route path={`${path}/pay`}>
        <Pay></Pay>
        </Route>

        <Route path={`${path}/ManageAllOrders`}>
        <ManageAllOrders></ManageAllOrders>
        </Route>
        <Route path={`${path}/MakeAdmin`}>
        <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/AddAProduct`}>
        <AddAProduct></AddAProduct>
        </Route>
        <Route path={`${path}/ManageProducts`}>
        <ManageProducts></ManageProducts>
        </Route>
        </Switch>

        </Typography>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;