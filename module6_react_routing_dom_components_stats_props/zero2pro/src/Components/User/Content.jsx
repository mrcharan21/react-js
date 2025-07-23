import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

export default function Content() {
  return (
    <>
    <MDBContainer>
        <MDBRow>
            <div className='col-md-6 banner-txt p-3 mt-3'>
                <h1>India's Only Btech With A Job After First Year +{''} <br />
                <span className='text-primary'>Certifications Included</span>
                </h1>
                <h2>With over 79 years of legacy</h2>
                <ul className='list-item mt-4'>
                    <li>Get a job after the first year</li>
                    <li>Get a B.Tech degree</li>
                    <li>Get 10+ certifications</li>
                    <li>Get a chance to work with top companies</li>
                </ul>
                <button className='btn btn-primary mt-4 p-3 rounded-3'>Enquire Now</button><br />
                <h4 className='mt-4 text-danger'>Call : 9347905266</h4>
            </div>
            <div className='col-md-6 p-3 mt-3'>
                <img src="https://images.clickfunnels.com/cdn-cgi/image/width=1000,fit=scale-down,f=auto,q=100/https://statics.myclickfunnels.com/workspace/vnBgwv/image/13250020/file/178353fe8944bf7d99036a9acf44e325.png" alt="Image of slider" className='img-fluid rounded-3' />
            </div>  
        </MDBRow>
    </MDBContainer>

    <section className='w-100 text-center mt-5 py-5  bg-light'>
  <h1 className='text-primary p-3'>Milestones Achieved</h1>
  <h5 className='text-dark mt-3 px-3'>
    We ensure you learn the best, from the best through innovative methods and exceptional thought leadership.
    Learn from passionate instructors with expertise who believe in practical teaching methodologies.
    Explore our courses like cloud computing courses, cyber security courses, and many more IT training courses with 100% job placements below…
    </h5>
    </section>

    <MDBContainer className='mt-5'>
        <MDBRow>
     <div className='col-md-5 p-3 mt-5'>
                <h2 className='text-primary'>A Institute That Makes You{''} <br /></h2>
                <h1>an Expert</h1>
                <p className='text-dark p-2 '>Zero2pro has garnered praise from millions because of its solid curriculum and highly efficient instructors. One-on-one attention helps students clear their doubts and become confident day by day. Our outstanding personalised career support consultation aided numerous students in landing their dream jobs quickly.
                <p className='text-danger font-bold fs-5'>
                    Enjoy an Excellent career with India’s One & Only Trusted Digital Skills Institute
                </p>
                
                <button className='btn btn-danger p-3 rounded-3 fs-6 border-solid'>Know More</button>
            </p>
        </div>
        <div className='col-md-7 p-3 mt-2'>
            <img src="https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/136042/file/17192e566c798ac17412f4870ba4461e.png" alt="image" className='img-fluid' />
            <p className=''>We ensure you learn the best, from the best through innovative methods and exceptional thought leadership. Learn from passionate instructors with expertise who believe in practical teaching methodologies. Explore our courses below…</p>
        </div>
        </MDBRow>
    </MDBContainer>

        <div className='mt-5 container '>
            <h1 className='text-primary text-center'>Our Courses</h1>
            <p className='text-center'>Set the foundation for an excellent career with Zero2pro professional courses</p>
            <p className='mt-3 '>At Jetking, we understand the importance of keeping up with the ever-changing technology landscape. Our courses are designed to provide our students with &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a comprehensive understanding of the latest technologies and equip them with the skills they need to excel in their careers. <br />
            <p className='mt-1'>Our courses are taught by experienced trainers who are experts in their respective fields. They provide hands-on training to students and ensure that they &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;understand the concepts thoroughly. Our trainers are committed to providing the best learning experience to our students.</p>
            </p>
        </div>
    </>
  )
}
