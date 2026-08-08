import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { registerUser } from "../services/api";

function Register() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",

    dob: "",
    age: "",
    gender: "",

    addressLine: "",
    city: "",
    state: "",
    pinCode: "",
    country: "India",

    governmentIdType: "",
    governmentIdNumber: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

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
     STEP 1 VALIDATION
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

    if (!formData.dob) {
      alert("Please enter your date of birth.");
      return;
    }

    const ageNum = parseInt(formData.age, 10);
    if (isNaN(ageNum) || ageNum <= 0) {
      alert("Please enter a valid age.");
      return;
    }

    if (!formData.gender) {
      alert("Please select your gender.");
      return;
    }

    setCurrentStep(2);
  };

  /* =========================================
     STEP 2 VALIDATION
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
     STEP 3 VALIDATION
  ========================================= */

  const handleIdNext = (event) => {
    event.preventDefault();

    if (!formData.governmentIdType) {
      alert("Please select a Government ID type.");
      return;
    }


    handleSubmitRegistration(event);
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

  const handleBackToId = () => {
    setCurrentStep(3);
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
      alert(
        "Please upload only JPG, JPEG, PNG or PDF files."
      );

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
     FINAL SUBMISSION
  ========================================= */

  const handleSubmitRegistration = async (event) => {
    event.preventDefault();

    if (!idDocument) {
      alert("Please upload your Government ID document.");
      return;
    }

    if (!declarationAccepted) {
      alert(
        "Please accept the declaration before submitting."
      );
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const requestObj = {
        firstName: formData.firstName,
        middleName: "",
        lastName: formData.lastName,
        email: formData.email,
        mobile: formData.mobileNumber,
        alternateMobile: "",
        dob: formData.dob,
        age: parseInt(formData.age, 10),
        gender: formData.gender,
        houseNumber: "",
        street: formData.addressLine,
        area: "",
        landmark: "",
        city: formData.city,
        state: formData.state,
        country: formData.country,
        pinCode: formData.pinCode,
        documentType: formData.governmentIdType === "DRIVING_LICENCE" ? "DRIVING_LICENSE" : formData.governmentIdType,
        documentNumber: "",
      };

      const payload = new FormData();
      payload.append("firstName", requestObj.firstName);
      payload.append("middleName", requestObj.middleName);
      payload.append("lastName", requestObj.lastName);
      payload.append("email", requestObj.email);
      payload.append("mobile", requestObj.mobile);
      payload.append("alternateMobile", requestObj.alternateMobile);
      payload.append("dob", requestObj.dob);
      payload.append("age", requestObj.age);
      payload.append("gender", requestObj.gender);
      payload.append("houseNumber", requestObj.houseNumber);
      payload.append("street", requestObj.street);
      payload.append("area", requestObj.area);
      payload.append("landmark", requestObj.landmark);
      payload.append("city", requestObj.city);
      payload.append("state", requestObj.state);
      payload.append("country", requestObj.country);
      payload.append("pinCode", requestObj.pinCode);
      payload.append("documentType", requestObj.documentType);
      payload.append("documentNumber", requestObj.documentNumber);
      payload.append("document", idDocument);

      await registerUser(payload);
      setRegistrationComplete(true);
    } catch (err) {
      setError(err.message || "An error occurred during registration. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="registration-page">

      {/* =====================================
          LEFT SIDE
      ===================================== */}

      <div className="registration-left">

        <Link to="/" className="registration-logo">

          <span>🌿</span>

          <div>
            <strong>CarbonTrack</strong>
            <small>
              Carbon Footprint Monitoring
            </small>
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


      {/* =====================================
          RIGHT SIDE
      ===================================== */}

      <div className="registration-right">

        <div className="registration-form-wrapper">


          {/* =================================
              SUCCESS SCREEN
          ================================= */}

          {registrationComplete ? (

            <div className="registration-success">

              <div className="registration-success-icon">
                ✓
              </div>

              <p className="registration-step-text">
                REGISTRATION SUBMITTED
              </p>

              <h2>
                Registration Successful!
              </h2>

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

              {/* =================================
                  HEADING
              ================================= */}

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

              {error && (
                <div
                  className="registration-error-message"
                  style={{
                    color: "#dc2626",
                    background: "#fef2f2",
                    border: "1px solid #fee2e2",
                    padding: "12px",
                    borderRadius: "8px",
                    marginBottom: "20px",
                    fontSize: "14px",
                  }}
                >
                  ⚠️ {error}
                </div>
              )}


              {/* =================================
                  PROGRESS BAR
              ================================= */}

              <div className="registration-progress">

                <div
                  className={`progress-step ${currentStep >= 1 ? "active" : ""
                    }`}
                >

                  <div className="step-circle">
                    {currentStep > 1 ? "✓" : "1"}
                  </div>

                  <span>Personal</span>

                </div>


                <div className="step-line"></div>


                <div
                  className={`progress-step ${currentStep >= 2 ? "active" : ""
                    }`}
                >

                  <div className="step-circle">
                    {currentStep > 2 ? "✓" : "2"}
                  </div>

                  <span>Address</span>

                </div>


                <div className="step-line"></div>


                <div
                  className={`progress-step ${currentStep >= 3 ? "active" : ""
                    }`}
                >

                  <div className="step-circle">
                    {currentStep === 3 ? "3" : currentStep > 3 ? "✓" : "3"}
                  </div>

                  <span>Upload ID</span>

                </div>

              </div>


              {/* =================================
                  STEP 1
              ================================= */}

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


                  <div className="registration-form-row">

                    <div className="registration-form-group">

                      <label htmlFor="dob">
                        Date of Birth <span>*</span>
                      </label>

                      <input
                        id="dob"
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    <div className="registration-form-group">

                      <label htmlFor="age">
                        Age <span>*</span>
                      </label>

                      <input
                        id="age"
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter age"
                        min="1"
                        required
                      />

                    </div>

                  </div>


                  <div className="registration-form-group">

                    <label htmlFor="gender">
                      Gender <span>*</span>
                    </label>

                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHER">Other</option>
                    </select>

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


              {/* =================================
                  STEP 2
              ================================= */}

              {currentStep === 2 && (

                <form onSubmit={handleAddressNext}>

                  <div className="registration-section-title">

                    <div>
                      <span>02</span>
                    </div>

                    <div>
                      <h3>Address Details</h3>

                      <p>
                        Enter your current residential
                        address.
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


              {/* =================================
                  STEP 3
              ================================= */}

              {currentStep === 3 && (

                <form onSubmit={handleIdNext}>

                  <div className="registration-section-title">

                    <div>
                      <span>03</span>
                    </div>

                    <div>
                      <h3>
                        Government ID Details
                      </h3>

                      <p>
                        Provide your government-issued
                        identification details.
                      </p>
                    </div>

                  </div>


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

<div className="document-upload-box">

  <div className="upload-icon">📄</div>

  <h4>Upload Government ID</h4>

  <p>JPG, PNG or PDF (Max 5 MB)</p>

  <input
    id="governmentDocument"
    type="file"
    className="document-file-input"
    accept=".jpg,.jpeg,.png,.pdf"
    onChange={handleFileChange}
  />

  <label
    htmlFor="governmentDocument"
    className="choose-file-button"
  >
    Choose File
  </label>

</div>

{idDocument && (
  <div className="selected-file-box">
    <div className="selected-file-icon">✓</div>

    <div>
      <strong>{idDocument.name}</strong>
      <p>{(idDocument.size / 1024).toFixed(1)} KB</p>
    </div>
  </div>
)}

<label className="registration-declaration">

<input
type="checkbox"
checked={declarationAccepted}
onChange={(e)=>setDeclarationAccepted(e.target.checked)}
/>

<span>

I declare that all information provided is true.

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
  disabled={submitting}
>
  {submitting ? "Submitting..." : "Submit Registration"}
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
