import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="/"
            onClick={toggle}
          >
            HOME
          </SidebarLink>
          <SidebarLink
            to="/maintenance"
            onClick={toggle}
          >
            MAINTENANCE
          </SidebarLink>
          <SidebarLink
            to="/legacy"
            onClick={toggle}
          >
            LEGACY
          </SidebarLink>
          <SidebarLink
            to="/enhanced"
            onClick={toggle}
          >
            ENHANCED
          </SidebarLink>
          <SidebarLink
            to="/contactUs"
            onClick={toggle}
          >
            CONTACT US
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/helpdesk">HELPDESK</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
