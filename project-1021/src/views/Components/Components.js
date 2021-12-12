import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import { grayColor } from "assets/jss/material-kit-react.js";
import logo from './../../assets/img/logo.webp';
import tshirt from './../../assets/img/tshirt.webp';
import { Phone } from "@material-ui/icons";


const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="PROJECT 1021"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
          fontWeight:"boldq"
        }}
        {...rest}
      />
      <Parallax>
        <div className={classes.container}>
        <video width="100%" height="90%" controls style={{position:"absolute", left:"0", right:"0", margin:"0 auto", top:"0"}}>
        <source src="movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 style={{color:"white", fontWeight:"800", textAlign:"center"}}>WELCOME TO<br/> PROJECT 1021</h1>
                <p style={{textAlign:"center"}}>ARTIST INCUBATOR-RETAIL SHOP-CREATIVE SPACE</p>
               
              </div>
            </GridItem>
          
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
      <GridContainer>        
      <GridItem xs={12} md={6} spacing={0} >
        <div style={{padding:"50px"}}>
          <h1>WHO WE ARE</h1>
          <h2>ARTISTS AND ENTREPRENEURS</h2>

          <p>Located in the heart of Chicago, PROJECT 1021 is a Locally Owned Artist Incubator /Retail Shop in Pilsen that provides Proper Services for Artist and Small Businesses.  Founded During the 2020 Pandemic, By Local Artist Carlos Rodriguez (Charlie Glitch ) and Like minded entrepreneurs Camilo Rodriguez, Walter Rodriguez and Xavier Hernandez, a creative space and home for all artist was built.</p>

          <p>We do everything in house and DIY!  Custom Clothing to Website Development, Music Production and Dj Classes to Marketing and Graphic Design.  For Artists By Artists!</p>
        </div>
      </GridItem>
        <GridItem xs={12} md={6}>
          <div style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"center",width:"100%", height:"100%", background:"#000"}}>
          <img style={{width:"35%", height:"auto"}} src={logo}></img>
          </div>
          </GridItem>

          <GridItem xs={12} md={6} style={{background:`url(${tshirt})`, backgroundSize:"contain"}}>
          
          {/* <img style={{width:"100%", height:"auto"}} src={tshirt}></img> */}
          <div style={{position:"absolute", width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", color: "white"}}>
            <h2>Come Visit</h2>
            <p style={{fontWeight:"800"}}>1021 W 18th St, Chicago, IL 60608</p>
            <a href="#">Directions</a>
          </div>
          </GridItem>
          <GridItem xs={12} md={6}>
          <div style={{display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center",width:"100%", height:"auto", background:"#FFF", padding:"50px"}}>

          
          <h2>INSTORE HOURS</h2>
          <p>Wednesday - Saturday :: 3pm - 9pm</p>
          <p>Sunday-Tuesday :: Appointment Only</p>
          <div>
          <a href="" style={{display:"flex", alignItems:"center", marginBottom:"20px"}}><Phone></Phone>&nbsp;(312) 609-9970</a>
          </div>
          </div>
          </GridItem>
        </GridContainer>
      
        {/* <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload /> */}
      </div>
      <Footer />
    </div>
  );
}
