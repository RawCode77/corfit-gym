import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Programs & Training Help</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor assumenda,
        itaque nesciunt alias voluptatum nobis blanditiis eos officiis aperiam earum eum vel
        quas odio optio, distinctio ab sunt unde incidunt ipsum omnis amet magnam accusantium
        aut! Excepturi, cupiditate iusto!
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />

    </div>
  );
}

export default HelpLayout;
