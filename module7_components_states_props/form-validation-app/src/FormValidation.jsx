import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function FeedbackApp() {
  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    subject: '',
    comment: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!data.fname.trim())   errs.fname = 'Please enter your first name';
    if (!data.lname.trim())   errs.lname = 'Please enter your last name';

    if (!data.email.trim()) errs.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = 'Please enter a valid email';

    if (!data.phone.trim()) errs.phone = 'Please enter your phone';
    else if (!/^\d{10}$/.test(data.phone.replace(/\D/g, '')))
      errs.phone = 'Please enter a 10-digit phone number';

    if (!data.subject.trim()) errs.subject = 'Please enter your subject';
    if (!data.comment.trim()) errs.comment = 'Please enter your comment';

    return errs;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    // Clear this field’s error as the user types
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length === 0) {
      Swal.fire({
        icon: 'success', 
        title: 'Thank you!',
        text: 'Your feedback has been submitted.',
      });
      // Reset the form without reloading
      setData({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        subject: '',
        comment: '',
      });
      setErrors({});
    } else {
      setErrors(v);
    }
  };

  return (
    <>
      <Container className="feedback-container w-50 mx-auto mt-5">
        <h1>Provide your valuable feedback</h1>
        <hr />
        <Row>
          <form onSubmit={handleSubmit} noValidate>
            <Row>
              <div className="form-group p-3">
                <input
                  type="text"
                  name="fname"
                  value={data.fname}
                  onChange={onChange}
                  placeholder="Enter First Name *"
                  className="form-control p-2"
                  aria-invalid={!!errors.fname}
                />
                {errors.fname && <p style={{ color: 'red' }}>{errors.fname}</p>}
              </div>

              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="lname"
                  value={data.lname}
                  onChange={onChange}
                  placeholder="Enter Last Name *"
                  className="form-control ms-3 p-2"
                  aria-invalid={!!errors.lname}
                />
                {errors.lname && <p style={{ color: 'red' }}>{errors.lname}</p>}
              </div>
            </Row>

            <div className="form-group mt-3">
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={onChange}
                placeholder="Enter Email *"
                className="form-control p-2"
                aria-invalid={!!errors.email}
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>

            <div className="form-group mt-3">
              <input
                type="tel"
                name="phone"
                value={data.phone}
                onChange={onChange}
                placeholder="Enter Phone *"
                className="form-control p-2"
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
            </div>

            <div className="form-group mt-3">
              <input
                type="text"
                name="subject"
                value={data.subject}
                onChange={onChange}
                placeholder="Enter Subject *"
                className="form-control p-2"
                aria-invalid={!!errors.subject}
              />
              {errors.subject && <p style={{ color: 'red' }}>{errors.subject}</p>}
            </div>

            <div className="form-group mt-3">
              <textarea
                name="comment"
                value={data.comment}
                onChange={onChange}
                placeholder="Enter Comment *"
                className="form-control p-2"
                rows={4}
                aria-invalid={!!errors.comment}
              />
              {errors.comment && <p style={{ color: 'red' }}>{errors.comment}</p>}
            </div>

            <div className="form-group mt-3">
              <input
                type="submit"
                className="btn btn-lg btn-dark text-white p-2"
                value="Send"

              />
            </div>
          </form>
        </Row>
      </Container>
    </>
  );
}
