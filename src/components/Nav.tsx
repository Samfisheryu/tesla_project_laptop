import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Nav() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='http://localhost:3000/'>Tesla Failure Analysis Platform</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='http://localhost:3000/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='http://localhost:3000/components'>Components</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='http://localhost:3000/failure'>Failure</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='http://localhost:3000/mapping'>Mapping</MDBNavbarLink>
            </MDBNavbarItem>

            {/*<MDBNavbarItem>*/}
            {/*  <MDBDropdown>*/}
            {/*    <MDBDropdownToggle tag='a' className='nav-link'>*/}
            {/*      Dropdown*/}
            {/*    </MDBDropdownToggle>*/}
            {/*    /!*<MDBDropdownMenu>*!/*/}
            {/*    /!*  <MDBDropdownItem link>Action</MDBDropdownItem>*!/*/}
            {/*    /!*  <MDBDropdownItem link>Another action</MDBDropdownItem>*!/*/}
            {/*    /!*  <MDBDropdownItem link>Something else here</MDBDropdownItem>*!/*/}
            {/*    /!*</MDBDropdownMenu>*!/*/}
            {/*  </MDBDropdown>*/}
            {/*</MDBNavbarItem>*/}

            {/*<MDBNavbarItem>*/}
            {/*  <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>*/}
            {/*    Disabled*/}
            {/*  </MDBNavbarLink>*/}
            {/*</MDBNavbarItem>*/}
          </MDBNavbarNav>

          {/*<form className='d-flex input-group w-auto'>*/}
          {/*  <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />*/}
          {/*  <MDBBtn color='primary'>Search</MDBBtn>*/}
          {/*</form>*/}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}