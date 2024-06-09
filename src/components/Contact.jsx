import { Grid } from "@mui/material";
import React from "react";
import { SolarMapArrowUpLinear } from "../content/content";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact_form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                placeholder="First Name"
                className="contact_input"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                placeholder="Last Name"
                className="contact_input"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="contact_input"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="contact_input"
              />
            </Grid>
            <Grid item sm={12}>
              <textarea
                type="text"
                placeholder="Message"
                className="contact_input"
              />
            </Grid>
          </Grid>
          <div className="contact_btn">
            <button className="btn_send">
              <SolarMapArrowUpLinear className="btn_icon_send"/>
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
