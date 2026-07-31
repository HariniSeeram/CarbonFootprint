import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Register() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",

    addressLine: "",
    city: "",
    state: "",
    pinCode: "",
    country: "India",

    governmentIdType: "",
  });

  const [idDocument, setIdDocument] = useState(null);

  const [declarationAccepted, setDeclarationAccepted] =
    useState(false);

  const [registrationComplete, setRegistrationComplete] =
    useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  /* =========================================
     STEP 1 - PERSONAL DETAILS
  ========================================= */

  const handlePersonalNext = (event) => {
    event.preventDefault();

    const namePattern = /^[A-Za-z ]{2,}$/;

    if (!namePattern.test(formData.firstName.trim())) {
      alert("Please enter a valid first name.");
      return;
    }

    if (!namePattern.test(formData.lastName.trim())) {
      alert("Please enter a valid last name.");
      return;
    }

    const mobilePattern = /^[6-9][0-9]{9}$/;

    if (!mobilePattern.test(formData.mobileNumber)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password must match.");
      return;
    }

    setCurrentStep(2);
  };

  /* =========================================
     STEP 2 - ADDRESS
  ========================================= */

  const handleAddressNext = (event) => {
    event.preventDefault();

    if (
      !formData.addressLine.trim() ||
      !formData.city.trim() ||
      !formData.state.trim()
    ) {
      alert("Please complete all address details.");
      return;
    }

    if (formData.country === "India") {
      const pinCodePattern = /^[1-9][0-9]{5}$/;

      if (!pinCodePattern.test(formData.pinCode)) {
        alert("Please enter a valid 6-digit PIN code.");
        return;
      }
    }

    setCurrentStep(3);
  };

  /* =========================================
     PREVIOUS BUTTONS
  ========================================= */

  const handleBackToPersonal = () => {
    setCurrentStep(1);
  };

  const handleBackToAddress = () => {
    setCurrentStep(2);
  };

  /* =========================================
     FILE VALIDATION
  ========================================= */

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "application/pdf",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload only JPG, JPEG, PNG or PDF files.");

      event.target.value = "";
      setIdDocument(null);
      return;
    }

    const maximumSize = 5 * 1024 * 1024;

    if (file.size > maximumSize) {
      alert("File size must be less than 5 MB.");

      event.target.value = "";
      setIdDocument(null);
      return;
    }

    setIdDocument(file);
  };

  /* =========================================
     FINAL SUBMISSION - STEP 3
  ========================================= */

  const handleSubmitRegistration = (event) => {
    event.preventDefault();

    if (!formData.governmentIdType) {
      alert("Please select a Government ID type.");
      return;
    }

    if (!idDocument) {
      alert("Please upload your Government ID document.");
      return;
    }

    if (!declarationAccepted) {
      alert("Please accept the declaration before submitting.");
      return;
    }

    /*
      TEMPORARY FRONTEND SUBMISSION.

      This will later be replaced by the Spring Boot
      registration API call after the backend team
      confirms the API contract.
    */

    console.log("Registration Data:", formData);
    console.log("Government ID Document:", idDocument);

    setRegistrationComplete(true);
  };

  return (
    <div className="registration-page">

      {/* ================= LEFT SIDE ================= */}

      <div className="registration-left">

        <Link to="/" className="registration-logo">
          <span>🌿</span>

          <div>
            <strong>CarbonTrack</strong>
            <small>Carbon Footprint Monitoring</small>
          </div>
        </Link>

        <div className="registration-left-content">

          <p className="registration-small-title">
            JOIN THE MOVEMENT
          </p>

          <h1>
            Your journey towards a
            <span> greener future </span>
            starts here.
          </h1>

          <p>
            Create your CarbonTrack account to understand
            your environmental impact and develop more
            sustainable habits.
          </p>

          <div className="registration-benefits">

            <div>
              <span>✓</span>
              Track your everyday activities
            </div>

            <div>
              <span>✓</span>
              Understand your carbon footprint
            </div>

            <div>
              <span>✓</span>
              Receive sustainability insights
            </div>

          </div>

        </div>

        <p className="registration-left-footer">
          Small choices. Meaningful impact.
        </p>

      </div>

      {/* ================= RIGHT SIDE ================= */}

      <div className="registration-right">

        <div className="registration-form-wrapper">

          {registrationComplete ? (

            /* ================= SUCCESS ================= */

            <div className="registration-success">

              <div className="registration-success-icon">
                ✓
              </div>

              <p className="registration-step-text">
                REGISTRATION SUBMITTED
              </p>

              <h2>Registration Successful!</h2>

              <p>
                Your CarbonTrack registration has been
                submitted successfully.
              </p>

              <p className="registration-success-info">
                Your account will become available after
                administrator verification and approval.
              </p>

              <Link
                to="/"
                className="registration-next-btn registration-home-button"
              >
                Return to Home
              </Link>

            </div>

          ) : (

            <>
              {/* ================= HEADING ================= */}

              <div className="registration-heading">

                <p className="registration-step-text">
                  ACCOUNT REGISTRATION
                </p>

                <h2>Create Your Account</h2>

                <p>
                  Complete the following steps to submit
                  your CarbonTrack registration.
                </p>

              </div>

              {/* ================= 3-STEP PROGRESS ================= */}

              <div className="registration-progress">

                <div
                  className={`progress-step ${
                    currentStep >= 1 ? "active" : ""
                  }`}
                >
                  <div className="step-circle">
                    {currentStep > 1 ? "✓" : "1"}
                  </div>

                  <span>Personal</span>
                </div>

                <div className="step-line"></div>

                <div
                  className={`progress-step ${
                    currentStep >= 2 ? "active" : ""
                  }`}
                >
                  <div className="step-circle">
                    {currentStep > 2 ? "✓" : "2"}
                  </div>

                  <span>Address</span>
                </div>

                <div className="step-line"></div>

                <div
                  className={`progress-step ${
                    currentStep >= 3 ? "active" : ""
                  }`}
                >
                  <div className="step-circle">
                    3
                  </div>

                  <span>ID Details</span>
                </div>

              </div>

              {/* =================================================
                  STEP 1 - PERSONAL DETAILS
              ================================================= */}

              {currentStep === 1 && (

                <form onSubmit={handlePersonalNext}>

                  <div className="registration-section-title">

                    <div>
                      <span>01</span>
                    </div>

                    <div>
                      <h3>Personal Details</h3>
                      <p>
                        Enter your basic account information.
                      </p>
                    </div>

                  </div>

                  {/* FIRST + LAST NAME */}

                  <div className="registration-form-row">

                    <div className="registration-form-group">

                      <label htmlFor="firstName">
                        First Name <span>*</span>
                      </label>

                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        required
                      />

                    </div>

                    <div className="registration-form-group">

                      <label htmlFor="lastName">
                        Last Name <span>*</span>
                      </label>

                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        required
                      />

                    </div>

                  </div>

                  {/* EMAIL + MOBILE - SAME ROW */}

                  <div className="registration-form-row">

                    <div className="registration-form-group">

                      <label htmlFor="email">
                        Email Address <span>*</span>
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        required
                      />

                    </div>

                    <div className="registration-form-group">

                      <label htmlFor="mobileNumber">
                        Mobile Number <span>*</span>
                      </label>

                      <input
                        id="mobileNumber"
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Enter 10-digit mobile number"
                        maxLength="10"
                        required
                      />

                    </div>

                  </div>

                  {/* PASSWORD + CONFIRM PASSWORD */}

                  <div className="registration-form-row">

                    <div className="registration-form-group">

                      <label htmlFor="password">
                        Password <span>*</span>
                      </label>

                      <input
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Minimum 8 characters"
                        required
                      />

                    </div>

                    <div className="registration-form-group">

                      <label htmlFor="confirmPassword">
                        Confirm Password <span>*</span>
                      </label>

                      <input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Re-enter password"
                        required
                      />

                    </div>

                  </div>

                  <div className="registration-form-actions">

                    <Link
                      to="/"
                      className="registration-back-home"
                    >
                      ← Back to Home
                    </Link>

                    <button
                      type="submit"
                      className="registration-next-btn"
                    >
                      Continue to Address
                      <span>→</span>
                    </button>

                  </div>

                </form>

              )}

              {/* =================================================
                  STEP 2 - ADDRESS
              ================================================= */}

              {currentStep === 2 && (

                <form onSubmit={handleAddressNext}>

                  <div className="registration-section-title">

                    <div>
                      <span>02</span>
                    </div>

                    <div>
                      <h3>Address Details</h3>

                      <p>
                        Enter your current residential address.
                      </p>
                    </div>

                  </div>

                  <div className="registration-form-group">

                    <label htmlFor="addressLine">
                      Address Line <span>*</span>
                    </label>

                    <input
                      id="addressLine"
                      type="text"
                      name="addressLine"
                      value={formData.addressLine}
                      onChange={handleChange}
                      placeholder="House number, street or area"
                      required
                    />

                  </div>

                  <div className="registration-form-row">

                    <div className="registration-form-group">

                      <label htmlFor="city">
                        City <span>*</span>
                      </label>

                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                        required
                      />

                    </div>

                    <div className="registration-form-group">

                      <label htmlFor="state">
                        State <span>*</span>
                      </label>

                      <input
                        id="state"
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Enter state"
                        required
                      />

                    </div>

                  </div>

                  <div className="registration-form-row">

                    <div className="registration-form-group">

                      <label htmlFor="pinCode">
                        PIN Code <span>*</span>
                      </label>

                      <input
                        id="pinCode"
                        type="text"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        placeholder="6-digit PIN code"
                        maxLength="6"
                        required
                      />

                    </div>

                    <div className="registration-form-group">

                      <label htmlFor="country">
                        Country <span>*</span>
                      </label>

                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >

                        <option value="India">
                          India
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>

                    </div>

                  </div>

                  <div className="registration-form-actions">

                    <button
                      type="button"
                      className="registration-back-home"
                      onClick={handleBackToPersonal}
                    >
                      ← Previous
                    </button>

                    <button
                      type="submit"
                      className="registration-next-btn"
                    >
                      Continue to ID Details
                      <span>→</span>
                    </button>

                  </div>

                </form>

              )}

              {/* =================================================
                  STEP 3 - ID DETAILS + DOCUMENT UPLOAD
              ================================================= */}

              {currentStep === 3 && (

                <form onSubmit={handleSubmitRegistration}>

                  <div className="registration-section-title">

                    <div>
                      <span>03</span>
                    </div>

                    <div>
                      <h3>Government ID Details</h3>

                      <p>
                        Select and upload your government-issued
                        identification document.
                      </p>
                    </div>

                  </div>

                  {/* ID TYPE */}

                  <div className="registration-form-group">

                    <label htmlFor="governmentIdType">
                      Government ID Type <span>*</span>
                    </label>

                    <select
                      id="governmentIdType"
                      name="governmentIdType"
                      value={formData.governmentIdType}
                      onChange={handleChange}
                      required
                    >

                      <option value="">
                        Select Government ID
                      </option>

                      <option value="AADHAAR">
                        Aadhaar Card
                      </option>

                      <option value="PAN">
                        PAN Card
                      </option>

                      <option value="VOTER_ID">
                        Voter ID
                      </option>

                      <option value="DRIVING_LICENCE">
                        Driving Licence
                      </option>

                      <option value="PASSPORT">
                        Passport
                      </option>

                    </select>

                  </div>

                  <div className="registration-id-note">

                    <span>🔒</span>

                    <p>
                      Your identification document is collected
                      only for registration verification.
                    </p>

                  </div>

                  {/* DOCUMENT UPLOAD */}

                  <div className="registration-form-group">

                    <label htmlFor="idDocument">
                      Government ID Document
                      <span> *</span>
                    </label>

                    <div className="document-upload-box">

                      <div className="upload-icon">
                        ↑
                      </div>

                      <h4>
                        Upload identification document
                      </h4>

                      <p>
                        JPG, JPEG, PNG or PDF
                      </p>

                      <p>
                        Maximum size: 5 MB
                      </p>

                      <label
                        htmlFor="idDocument"
                        className="choose-file-button"
                      >
                        Choose File
                      </label>

                      <input
                        id="idDocument"
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={handleFileChange}
                        className="document-file-input"
                      />

                    </div>

                  </div>

                  {/* SELECTED FILE */}

                  {idDocument && (

                    <div className="selected-file-box">

                      <div className="selected-file-icon">
                        ✓
                      </div>

                      <div>

                        <strong>
                          {idDocument.name}
                        </strong>

                        <p>
                          {(
                            idDocument.size /
                            1024 /
                            1024
                          ).toFixed(2)}{" "}
                          MB
                        </p>

                      </div>

                    </div>

                  )}

                  {/* DECLARATION */}

                  <label className="registration-declaration">

                    <input
                      type="checkbox"
                      checked={declarationAccepted}
                      onChange={(event) =>
                        setDeclarationAccepted(
                          event.target.checked
                        )
                      }
                    />

                    <span>
                      I confirm that the information and
                      document provided are correct and
                      belong to me.
                    </span>

                  </label>

                  <div className="registration-form-actions">

                    <button
                      type="button"
                      className="registration-back-home"
                      onClick={handleBackToAddress}
                    >
                      ← Previous
                    </button>

                    <button
                      type="submit"
                      className="registration-next-btn"
                    >
                      Submit Registration
                      <span>✓</span>
                    </button>

                  </div>

                </form>

              )}

            </>

          )}

        </div>

      </div>

    </div>
  );
}

export default Register;