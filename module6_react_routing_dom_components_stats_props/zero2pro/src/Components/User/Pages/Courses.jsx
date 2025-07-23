import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import Footer from "../Footer";
import Header from "../Header";

const courses = [
  
  {
    title: "BCA In Cloud Computing & Cyber Security",
    duration: "36 Months",
    mode: "Offline/Hybrid",
    image:
      "https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/vnBgwv/image/4762174/file/76f4bcab2ddd9f40a37ece708ba42851.jpg",
    brochure: "#",
  },
  {
    title: "BCA In Multimedia and Animation",
    duration: "36 Months",
    mode: "Offline/Hybrid",
    image:
      "https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/vnBgwv/image/13277201/file/95c1c7ce621c03f81e238e16d945023a.jpg",
    brochure: "#",
  },
  {
    title: "BCA In Data Science with AI",
    duration: "36 Months",
    mode: "Offline/Hybrid",
    image:
      "https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/vnBgwv/image/13277211/file/e96ba514eb81bee519531137a82c6df1.jpg",
    brochure: "#",
  },
  {
    title: "BBA in Business Analytics",
    duration: "36 Months",
    mode: "Offline/Hybrid",
    image:
      "https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/vnBgwv/image/4762174/file/76f4bcab2ddd9f40a37ece708ba42851.jpg",
    brochure: "#",
  },
  {
    title: "BBA in Digital Marketing",
    duration: "36 Months",
    mode: "Offline/Hybrid",
    image:
      "https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/vnBgwv/image/13277201/file/95c1c7ce621c03f81e238e16d945023a.jpg",
    brochure: "#",
  },
  {
    title: "BCom in Finance and Accounting",
    duration: "36 Months",
    mode: "Offline/Hybrid",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80",
    brochure: "#",
  },
  {
    title: "BCA in Game Development",
    duration: "36 Months",
    mode: "Offline/Hybrid",
    image:
      "https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/vnBgwv/image/13277201/file/95c1c7ce621c03f81e238e16d945023a.jpg",
    brochure: "#",
  },
];

export default function Courses() {
  return (
    <>
      
      
        <Header />

        <MDBContainer className="py-5 text-white">
          <h1 className="text-center text-warning fw-bold mb-4">Our Courses</h1>
          <h3 className="text-center mb-4 text-dark">Choose Your Path</h3>
          <p className="text-center mb-5 text-dark">
            Explore our diverse range of courses designed to equip you with the skills you need for a successful career.
          </p>

          <MDBRow>
            {courses.map((course, index) => (
              <MDBCol md="3" className="mb-4 custom-col-md-4" key={index}>
                <MDBCard className="h-100 shadow">
                  <MDBCardImage
                    src={course.image}
                    alt={course.title}
                    position="top"
                    style={{ height: 160, objectFit: "cover" }}
                  />
                  <MDBCardBody className="d-flex flex-column text-center">
                    <h5 className="fw-bold mb-3 text-danger">{course.title}</h5>
                    {!course.isIntroCard && (
                      <>
                        <ul className="text-muted text-start mb-3 ps-3">
                          <li>{course.duration}</li>
                          <li>{course.mode}</li>
                        </ul>
                        <MDBBtn color="danger" className="w-75 mb-2 mx-auto">
                          Enroll Now!
                        </MDBBtn>
                        <MDBBtn
                          color="danger"
                          className="w-100"
                          href={course.brochure}
                          target="_blank"
                        >
                          Download Brochure
                        </MDBBtn>
                      </>
                    )}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>

        <Footer />
    
    </>
  );
}
