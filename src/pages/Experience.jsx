import React from "react";
import {
  Paper,
  Box,
  Typography,
  Grid,
  Container,
  Divider,
} from "@mui/material";

const Experience = () => {
  return (
    <Paper sx={{ width: "100%", p: 3 }}>
      <Container maxWidth="xl" id="experience">
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{
                textTransform: "uppercase",
                textDecoration: "underline",
                textUnderlineOffset: 6,
              }}>
              Work Experience
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="body1"
              component="h4"
              gutterBottom
              sx={{ textTransform: "uppercase" }}>
              CrossControl AB
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              sx={{ textTransform: "uppercase" }}>
              IPC-610A, LEAN, 5S, Soldering, Programming, Inspection
            </Typography>
            <Typography variant="body2" component="div">
              Experienced in Soldering, inspection, machine programming, rework,
              test systems and more. Working on a wide range of projects, I have
              honed my skills over the years in many different electronics
              processes. <br />
              <Divider sx={{ my: 1 }} />
              Lead Programmer for AOI, SMT and Selective Soldering, mostly
              working with Yamaha machines but also Mirtec, Universal, MyData
              and Pillarhouse.
              <Divider sx={{ my: 1 }} />
              Also experienced in manual processes, such as soldering, mounting,
              reworking and testing.
              <Divider sx={{ my: 1 }} />
              Also been a part of introducing new products in production,
              finding complications and working them out with developers.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="body1"
              component="h4"
              gutterBottom
              sx={{ textTransform: "uppercase" }}>
              Core-EMT A/S
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              sx={{ textTransform: "uppercase" }}>
              Service Engineer/Manager, Sales Advisor, Customer Service
            </Typography>
            <Typography variant="body2" component="div">
              Recruited as Service Engineer, but worked my way up to Manager.
              Responsible for the planning of customer implementations and
              regular service work.
              <Divider sx={{ my: 1 }} />
              Worked close with customers and suppliers to solve any issues that
              would appear in their processes, and helping to find solutions for
              problems in their production.
              <Divider sx={{ my: 1 }} />
              Also worked with the development teams with our suppliers to solve
              and implement new functions for customers.
              <Divider sx={{ my: 1 }} />
              Regularly travelling around europe to work with a wide variety of
              customers and processes to make things run as smooth as possible.
              <Divider sx={{ my: 1 }} />
              As sales advisor I was tasked with calculating troughput of
              customer products and optimize their setups for the components on
              their boards.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="body1"
              component="h4"
              gutterBottom
              sx={{ textTransform: "uppercase" }}>
              Tronex A/S
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              sx={{ textTransform: "uppercase" }}>
              Production Technican
            </Typography>
            <Typography variant="body2" component="div">
              Tasked with ensuring the production of high quality products and
              implementing new machines and software in production.
              <Divider sx={{ my: 1 }} />
              Responsible for implementing new software to track assets in the
              factory together with the intervals for verification and
              calibration. Set up servers and software and digitalized the old
              system.
              <Divider sx={{ my: 1 }} />
              Also worked together with our team of technicians to implement a
              new solution for printing labels. This involved setting up
              servers, creating new label templates and integrating the solution
              into our ERP system.
              <Divider sx={{ my: 1 }} />
              Together with our team, responsible for the quality assurance of
              our products and processes, making sure everything going out to
              customers is up to our high standards.
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{
                textTransform: "uppercase",
                textDecoration: "underline",
                textUnderlineOffset: 6,
              }}>
              Personal Experience
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              component="h4"
              gutterBottom
              sx={{ textTransform: "uppercase" }}>
              Web Development
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              sx={{ textTransform: "uppercase" }}>
              HTML, CSS, Javascript, React, NodeJs etc...
            </Typography>
            <Typography variant="body2" component="div">
              Started to learn web development in the late 90's from books, and
              have created a lot of personal and public websites ever since.
              <Divider sx={{ my: 1 }} />
              It all started with a school project at the age of 12 where I made
              a presentation for the class in the form of a website. Created a
              simple website with only HTML available to me where I presented
              the biography of Calvin Broadus (a.k.a Snoop Dogg)
              <Divider sx={{ my: 1 }} />
              Over the years I have created a wide variety of websites, and have
              always tried to keep up with trends reading many online blogs on
              web development.
              <Divider sx={{ my: 1 }} />
              In 2023, I started to learn ReactJs and created a Full Stack
              application for reporting defects in a production environment. The
              project is still in development, and I am very happy with the
              progress I have made in such a short time. I plan to one day be
              able to offer this to customers of my own, customizing and setting
              it up for them.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              component="h4"
              gutterBottom
              sx={{ textTransform: "uppercase" }}>
              Hobbies
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              sx={{ textTransform: "uppercase" }}>
              Woodworking, electronics, cycling, programming
            </Typography>
            <Typography variant="body2" component="div">
              I have a lot of hobbies, but I have always been interested in
              programming and electronics. From our first computer in 1994 until
              now. Disassembling old electronics together with my father and
              trying to fix them is some of my best memories.
              <Divider sx={{ my: 1 }} />
              Cycling has always been my primary mode of transport even after I
              got my driving license. Fixing my own bikes when they broke down
              has also been something that has kept me busy from time to time.
              Now I ride for excerise when I get the chance with my carbon
              framed racing bike.
              <Divider sx={{ my: 1 }} />
              Woodworking is one of my favorite hobbies and I wish I had the
              space to continue making things. Over a period of about 10 years,
              from 2009 I helped my old neighbour who owned his own sawmill.
              Creating with wood is soothing for me and tickles my creative
              side.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Experience;
