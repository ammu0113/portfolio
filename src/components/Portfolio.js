import React, { useState, useEffect, useContext } from "react";
import { Col, Nav, NavItem, Row } from "reactstrap";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";

function Portfolio() {
  const { data } = useContext(AppContext);
  const [selctedItem, setSelctedItem] = useState({});
  const [header] = useState([
    { label: "About", link: "#" },
    { label: "Experience", link: "#" },
    { label: "Education", link: "#" },
    { label: "Skills", link: "#" },
    { label: "Projects", link: "#" },
    { label: "Contact Me", link: "#" },
  ]);
  return <Row noGutters></Row>;
}

export default Portfolio;
