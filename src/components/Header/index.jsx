
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import Search from '../Search'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FaClipboard, FaRegHeart, FaRegUser } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';

import { HiOutlineShoppingBag } from "react-icons/hi";
import Navigation from './Navigation';
import { CartContext } from '../../createContext/index';
import Button from '@mui/material/Button';

import { FiUser, FiUserCheck } from "react-icons/fi";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { IoIosLogOut, IoMdHeartEmpty } from 'react-icons/io';
import { BsClipboard2Check } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -4,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));
const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { setOpenCartPanel, isLoggedIn, setIsLoggedIn } = useContext(CartContext);
    return (
        <div>
            <header className='bg-white'>
                <div className=' bg-[#dad9d4]  top-strip py-3 border-gray-200'>
                    <div className='container'>
                        <div className='flex items-center justify-between'>
                            <div className='col1 w-[50%]'>
                                <p className='text-[12px] font-[500]'>Get up to 50% for new User, limited time only</p>
                            </div>

                            <div className='col2 flex items-center justify-end'>
                                <ul className='flex items-center gap-3'>
                                    <li className='list-none'>
                                        <Link to="/" className='hover:!text-[white] text-[13px] link font-[500] transition'>Help center</Link>
                                    </li>

                                    <li className='list-none'>
                                        <Link to="/" className='hover:!text-[white] text-[13px] link font-[500] transition'>Order Tracking</Link>
                                    </li>


                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='header py-4 border-b-[1px]  border-gray-200'>
                    <div className='container flex items-center justify-between'>
                        <div className='col1 w-[30%]'>
                            <Link to="/">
                                <img src='/logo1.PNG' className='w-[180px]' />
                            </Link>
                        </div>

                        <div className='col2 w-[40%]'>
                            <Search />
                        </div>

                        <div className='col3 w-[30%] flex items-center pl-5 '>

                            <ul className='flex items-center justify-end gap-3 w-full'>

                                {
                                    isLoggedIn === false ?
                                        <li>
                                            <Link to={"/login"}>
                                                <Tooltip title="Login/Register" placement="bottom">
                                                    <IconButton aria-label="account">
                                                        <StyledBadge color="secondary">
                                                            <FiUser />
                                                        </StyledBadge>
                                                    </IconButton>
                                                </Tooltip>
                                            </Link>
                                        </li>
                                        :

                                        <>
                                            <div className='myAccountWrap flex items-center gap-3'>
                                                <Button className='!text-[rgba(0,0,0,0.54)] !rounded-full !p-0 !min-w-[0]' onClick={handleClick} >
                                                    <Tooltip title="My Account" placement="bottom">
                                                        <IconButton aria-label="account">
                                                            <StyledBadge color="secondary" overlap='circular'>
                                                                < FiUserCheck />
                                                            </StyledBadge>
                                                        </IconButton>
                                                    </Tooltip>
                                                </Button>


                                            </div>
                                            <Menu
                                                anchorEl={anchorEl}
                                                id="account-menu"
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                slotProps={{
                                                    paper: {
                                                        elevation: 0,
                                                        sx: {
                                                            overflow: 'visible',
                                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                            mt: 1.5,
                                                            '& .MuiAvatar-root': {
                                                                width: 32,
                                                                height: 32,
                                                                ml: -0.5,
                                                                mr: 1,
                                                            },
                                                            '&::before': {
                                                                content: '""',
                                                                display: 'block',
                                                                position: 'absolute',
                                                                top: 0,
                                                                right: 14,
                                                                width: 10,
                                                                height: 10,
                                                                bgcolor: 'background.paper',
                                                                transform: 'translateY(-50%) rotate(45deg)',
                                                                zIndex: 0,
                                                            },
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >
                                                <Link to="/my-account" className='w-full block'>
                                                    <MenuItem onClick={handleClose} className='flex gap-2'>
                                                        <LuUserRound className='text-[18px]' /> <span className='text-[14px]'>My Account</span>
                                                    </MenuItem>
                                                </Link>

                                                <Link to="/my-list" className='w-full block'>
                                                    <MenuItem onClick={handleClose} className='flex gap-2'>
                                                        < IoMdHeartEmpty className='text-[18px]' /> <span className='text-[14px]'>My List</span>
                                                    </MenuItem>
                                                </Link>

                                                <Link to="/my-orders" className='w-full block'>
                                                    <MenuItem onClick={handleClose} className='flex gap-2'>
                                                        <BsClipboard2Check className='text-[18px]' /> <span className='text-[14px]'>Orders</span>
                                                    </MenuItem>
                                                </Link>

                                                <MenuItem onClick={handleClose} className='flex gap-2'>
                                                    < IoIosLogOut className='text-[18px]' /><span className='text-[14px]'> LogOut</span>
                                                </MenuItem>


                                            </Menu>
                                        </>
                                }



                                <li>
                                     <Link to="/my-list" className='w-full block'>
                                    <Tooltip title="Wishlist" placement="bottom">
                                        <IconButton aria-label="cart" >
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <FaRegHeart />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                    </Link>
                                </li>

                                <li>
                                    <Tooltip title="bag" placement="bottom">
                                        <IconButton aria-label="bag" onClick={() => setOpenCartPanel(true)}>
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <HiOutlineShoppingBag />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </li>



                            </ul>
                        </div>
                    </div>
                </div>

                <Navigation />

            </header>
        </div>
    )
}

export default Header
