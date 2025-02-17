import React, { useEffect, useRef, useState } from 'react'
import signUpImg from "../../assets/images/kyc/signup.avif"
import { useNavigate } from 'react-router-dom';
function Signup() {
    const [formData, setFormData] = useState({
        fullName: "",
        country: "",
        email: "",
        contactNumber: "",
        password: "",
        confirmPassword: "",
        referralId: "",
        position: "",
        notRobot: false,
        termsAccepted: false,
    });

    const [formErrors, setFormErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate();



    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    useEffect(() => {
        validateForm();
    }, [formData]);

    const validateForm = () => {
        const errors = {};

        if (!formData.fullName.trim()) {
            errors.fullName = "Full Name is required.";
        } else if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
            errors.fullName = "Invalid Full Name. Only alphabets and spaces are allowed.";
        }

        // Validate email
        if (!formData.email.trim()) {
            errors.email = "Email is required.";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            errors.email = "Invalid Email Address.";
        }

        // Validate contactNumber
        if (!formData.contactNumber.trim()) {
            errors.contactNumber = "Contact Number is required.";
        } else if (!/^[0-9]{10}$/.test(formData.contactNumber)) {
            errors.contactNumber = "Invalid Contact Number. Must be 10 digits.";
        }

        // Validate password
        if (!formData.password.trim()) {
            errors.password = "Password is required.";
        } else if (formData.password.length < 6) {
            errors.password = "Password must be at least 6 characters long.";
        }

        // Validate confirmPassword
        if (!formData.confirmPassword.trim()) {
            errors.confirmPassword = "Confirm Password is required.";
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match.";
        }

        // Validate country selection
        if (!formData.country.trim()) {
            errors.country = "Country is required.";
        }
        if (!formData.referralId.trim()) {
            errors.referralId = "Referral ID is required.";
        }



        /* // Validate termsAccepted checkbox
        if (!formData.termsAccepted) {
            errors.termsAccepted = "You must accept the Terms and Conditions.";
        } */

        setFormErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();

        if (isFormValid) {
            alert("Form submitted successfully!");
            navigate(`/loginPage`)
        } else {
            const firstErrorField = Object.keys(formErrors)[0];
            document.getElementsByName(firstErrorField)[0]?.focus();
        }
    };
    return (
        <>
            <div className="authincation">
                <div className="container-fluid m-5 p-5 border border-2 border-info " style={{ boxSizing: "border-box" }}>
                    <div className="row  align-items-center  align-items-stretch">
                        <div className="col-md-6 col-xl-6">
                            <div className='text-dark'>
                                <h1 style={{ fontFamily: "fantasy" }}>Sign up now</h1>
                            </div>
                            <form onSubmit={handleSubmit}>

                                <div className="row">
                                    <div className="col-xl-6 col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">Full Name</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                className="form-control"
                                                placeholder="Full Name"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                            />
                                            {formErrors.fullName && (
                                                <small className="form-text text-danger">
                                                    {formErrors.fullName}
                                                </small>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">Select Country</label>
                                            <select
                                                name="country"
                                                className="form-select"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select country--</option>
                                                <option value="India">India</option>
                                                <option value="USA">USA</option>
                                                <option value="UK">UK</option>
                                            </select>
                                            {formErrors.country && (
                                                <small className="form-text text-danger">
                                                    {formErrors.country}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-md-12">
                                        <div className="mb-2">
                                            <label className="form-label">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                            {formErrors.email && (
                                                <small className="form-text text-danger">
                                                    {formErrors.email}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">Contact Number</label>
                                            <input
                                                type="number"
                                                name="contactNumber"
                                                className="form-control"
                                                placeholder="Contact Number"
                                                value={formData.contactNumber}
                                                onChange={handleInputChange}
                                            />
                                            {formErrors.contactNumber && (
                                                <small className="form-text text-danger">
                                                    {formErrors.contactNumber}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                placeholder="Password"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                            />
                                            {formErrors.password && (
                                                <small className="form-text text-danger">
                                                    {formErrors.password}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">Confirm Password</label>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                className="form-control"
                                                placeholder="Confirm Password"
                                                value={formData.confirmPassword}
                                                onChange={handleInputChange}
                                            />
                                            {formErrors.confirmPassword && (
                                                <small className="form-text text-danger">
                                                    {formErrors.confirmPassword}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">Referral ID</label>
                                            <input
                                                type="text"
                                                name="referralId"
                                                className="form-control"
                                                placeholder="Referral ID"
                                                value={formData.referralId}
                                                onChange={handleInputChange}
                                            />
                                            {formErrors.referralId && (
                                                <small className="form-text text-danger">
                                                    {formErrors.referralId}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">Select Position</label>
                                            <select
                                                name="position"
                                                className="form-select"
                                                value={formData.position}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select position--</option>
                                                <option value="Admin">Left</option>
                                                <option value="User">Right</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6">
                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="notRobot"
                                            id="notRobotCheck"
                                            checked={formData.notRobot}
                                            onChange={handleInputChange}
                                        />
                                        <label className="form-check-label" htmlFor="notRobotCheck">
                                            I'm not a robot
                                        </label>
                                        {/* {formErrors.notRobot && (
                                                <small className="form-text text-danger">
                                                    {formErrors.notRobot}
                                                </small>
                                            )} */}
                                    </div>

                                </div>
                                <div className="col-xl-6 col-md-6">
                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="termsAccepted"
                                            id="termsCheck"
                                            checked={formData.termsAccepted}
                                            onChange={handleInputChange}
                                        />
                                        <label className="form-check-label" htmlFor="termsCheck">
                                            I agree with the website’s <a href="/">Terms and Conditions</a>
                                        </label>
                                        {/* {formErrors.termsAccepted && (
                                                <small className="form-text text-danger">
                                                    {formErrors.termsAccepted}
                                                </small>
                                            )} */}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={!isFormValid}
                                >
                                    REGISTER NOW
                                </button>
                            </form>

                            <p className="mt-2 text-center">
                                Already a member? <a href="/loginPage">Sign in</a>
                            </p>
                        </div>
                        <div className="col-md-6 col-xl-6 d-flex flex-column align-items-center justify-content-center text-center">
                            <p className="text-dark font-weight-b">
                                <b>To keep connected with us, please sign up with your personal
                                    information by email address and password.</b>
                            </p>
                            <div className="card">

                                <img
                                    src={signUpImg}
                                    alt="AIBOT Logo"
                                    className="img-fluid mb-2 h-100 rounded"
                                />
                                <p className="text-secondary">Don't Influenced by human emotions</p>
                                <h2 className="bg-dark w-100 rounded text-white  mb-2">
                                    <b>AIBOT</b>
                                </h2>
                            </div>
                        </div>


                    </div >
                </div >
            </div>
        </>
    )
}

export default Signup
