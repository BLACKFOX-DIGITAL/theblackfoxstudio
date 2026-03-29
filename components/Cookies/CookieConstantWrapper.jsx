"use client";
import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

const CookieConstantWrapper = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="I agree"
      cookieName="bfbd"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

export default CookieConstantWrapper;
