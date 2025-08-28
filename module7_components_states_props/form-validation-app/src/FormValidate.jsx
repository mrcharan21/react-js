import React,{useState} from 'react';
import Swal from 'sweetalert2';


export default function FormValidate() {
    // Form data state
    const[data,setData]=useState({
        fName:"",
        lName:"",
        Email: "",
        PhoneNumber: "",
        Password:"",
        confirmPassword: "",
    });
    // Form validation errors
    const[errors, setErrors] = useState({});
    // Show password state
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

        const togglePassword = () => setShowPassword((prev) => !prev);
        const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

    // Validate form fields
    const validate=()=>{
        const newErrors ={};
        if(!data.fName){
            newErrors.fName ="First name is required";
        }else if (!/^[A-Za-z]+$/.test(data.fName)) {
            newErrors.fName ="First name must contain only letters"
        }
        if(!data.lName){
            newErrors.lName = "Last name is required";
        }else if (!/^[A-Za-z]+$/.test(data.lName)) {
            newErrors.lName ="Last name must contain only letters"
        }
        if(!data.Email){
            newErrors.Email = "Email is required";
        }else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(data.Email)) {
            newErrors.Email = "Email is invalid";
        }
        if(!data.PhoneNumber){
            newErrors.PhoneNumber = "Phone number is required";
        }else if (!/^\d{10}$/.test(data.PhoneNumber)) {
            newErrors.PhoneNumber = "Phone number must be 10 digits";
        }
        if(!data.Password){
            newErrors.Password = "Password is required";
        }else if (data.Password.length < 6) {
            newErrors.Password = "Password must be at least 6 characters";
        }
        if(!data.confirmPassword){
            newErrors.confirmPassword = "Confirm password is required";
        }else if (data.confirmPassword !== data.Password) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        return newErrors;
    }
    // Handle input changes
    const handleChange =(e)=>{
        setData({...data,[e.target.name]: e.target.value});
    };
    // Handle form submission
    const handleSubmit = (e)=>{
        e.preventDefault();
        const validationErrors = validate();

            // Check for validation errors
        if(Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }else{
            Swal.fire({
                title: 'Success!',
                text: 'Form submitted successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }
        console.log(data);
        // This is for resetting the form
        setData({
            fName: "",
            lName: "",
            Email: "",
            PhoneNumber: "",
            Password: "",
            confirmPassword: "",
        });
        setErrors({});  //clear error message 
    };



  return (
    <>
        <div className='form-container p-5 bg-transparent rounded-4 d-flex flex-column justify-content-center border border-white mx-auto my-5'
        style={{ width: "500px" }}>
            <form className="d-flex flex-column gap-5" onSubmit={handleSubmit}>
                <h2 className="text-center"><b>Form Handeling App</b></h2>
                <div className="form-group">
                    <i className="bi bi-person-fill"></i>
                    <input type="text"name='fName' value={data.fName} className='form-control ps-5'
                    onChange={handleChange} placeholder='Enter your First Name'  />
                </div>
                {errors.fName && (
            <span className="text-danger fw-bold">{errors.fName}</span>
          )}
                <div className="form-group">
                    <i className="bi bi-person-fill"></i>
                    <input type="text" name="lName" value={data.lName} className='form-control ps-5' onChange={handleChange} placeholder='Enter your last Name ' />
                </div>
                {errors.lName && (
            <span className="text-danger fw-bold">{errors.lName}</span>
          )}
                <div className="form-group">
                    <i className="bi bi-envelope-fill"></i>
                    <input type="Email" name='Email' value={data.Email} className='form-control ps-5' onChange={handleChange} placeholder='Enter your Email' />
                </div>
                {errors.Email && (
            <span className="text-danger fw-bold">{errors.Email}</span>
          )}
                <div className="form-group">
                    <i className="bi bi-telephone-fill"></i>
                    <input type="text" name='PhoneNumber' value={data.PhoneNumber} className='form-control ps-5' onChange={handleChange} placeholder='Enter your phone Number'  />
                </div>
                {errors.PhoneNumber && (
            <span className="text-danger fw-bold">{errors.PhoneNumber}</span>
          )}
            <div className="form-group">
                <i className="bi bi-lock-fill"></i>
                <input type={showPassword ? "text" : "password"} name='Password' value={data.Password}
                    className='form-control ps-5' onChange={handleChange} placeholder='Password'/>
                <span className='password-toggle' onClick={togglePassword}>
                    {showPassword ? "🙈" : "👁️"}
                </span>
                </div>
                {errors.Password && (
            <span className="text-danger fw-bold">{errors.Password}</span>
          )}

                <div className="form-group">
                <i className="bi bi-lock-fill"></i>
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    name='confirmPassword'
                    value={data.confirmPassword}
                    className='form-control ps-5'
                    onChange={handleChange}
                    placeholder='Confirm password'
                />
                <span className='password-toggle' onClick={toggleConfirmPassword} style={{cursor: 'pointer'}}>
                    {showConfirmPassword ? "🙈" : "👁️"}
                </span>
                </div>
                {errors.confirmPassword && (
            <span className="text-danger fw-bold">{errors.confirmPassword}</span>
          )}


                <input type="submit" value='submit' className='btn btn-danger p-2' />
            </form>
        </div>
    </>
  )
}
