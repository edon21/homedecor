import React, { useState } from 'react'
import ProductItem from '../../components/ProductItem'
import { IoGridSharp } from "react-icons/io5";
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItemListview from '../../components/ProductItemListview';
const Mirror = () => {
  const [itemView, setItemView] = useState('grid');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className=' p-20 !bg-white-500'>
      <div className='heading text-3xl text-center p-10 mb-8'>
        <h1>Mirrors</h1>
      </div>

      <div className=' p-2 w-full  mb-3 rounded-md flex item-center justify-between'>
        <div className='col1 flex items-center !gap-2'>


          <Button className='!w-[40px] !h-[40px] !min-w-[40px] !text-2xl !rounded-full !text-[#000]'
            onClick={() => setItemView('list')} >
            <IoIosMenu className='text-[rgba(0,0,0,0.7)]' />
          </Button>

          <Button className='!w-[40px] !h-[40px] !min-w-[40px] !text-2xl !rounded-full !text-[#000]'
            onClick={() => setItemView('grid')}
          >
            <IoGridSharp className='text-[rgba(0,0,0,0.7)]' />
          </Button>

        </div>

        <div className='col2 ml-auto flex items-center justify-end gap-3 pr-4'>
          <span className='text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]'>
            Sort By : </span>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className='!bg-white !text-[12px] !text-[#000] !capitalize !border-1 !border-[#000]'
          >
            Sales, highest to lowest
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                'aria-labelledby': 'basic-button',
              },
            }}
          >
            <MenuItem onClick={handleClose} className='!text-[12px] !text-[#000] !capitalize'>Sales, highest to lowest</MenuItem>
            <MenuItem onClick={handleClose} className='!text-[12px] !text-[#000] !capitalize'>Name, A to Z</MenuItem>
            <MenuItem onClick={handleClose} className='!text-[12px] !text-[#000] !capitalize'>Name, Z to A</MenuItem>
            <MenuItem onClick={handleClose} className='!text-[12px] !text-[#000] !capitalize'>Price, low to high</MenuItem>
            <MenuItem onClick={handleClose} className='!text-[12px] !text-[#000] !capitalize'>Price, high to low</MenuItem>

          </Menu>

        </div>
      </div>

      <div className={`grid ${itemView==='grid' ? 'grid-cols-4 md:grid-cols-4 gap-7':'grid-cols-1 md:grid-cols-1'} gap-4 `}>
        {
          itemView === 'grid' ?
            <>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </>
  
            :
            <>
              <ProductItemListview />
              <ProductItemListview />
              <ProductItemListview />
              <ProductItemListview />
              <ProductItemListview />
              <ProductItemListview />
              <ProductItemListview />
              <ProductItemListview />
              <ProductItemListview />
              <ProductItemListview />
              <ProductItemListview />
              <ProductItemListview />

            </>
            
        }

      </div>
    </div>
  )
}

export default Mirror
