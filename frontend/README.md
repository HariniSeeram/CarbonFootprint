# CarbonTrack - Carbon Footprint Monitoring System

CarbonTrack is a web-based Carbon Footprint Monitoring System developed as part of the Infosys Virtual Internship 7.0 project.

## Member 1 Module

This module contains the Landing Page and User Registration frontend.

## Features

- Professional Landing Page
- Responsive User Interface
- React Router Navigation
- Multi-Step User Registration
- Personal Details Collection
- Address Details Collection
- Government ID Selection
- Government ID Document Upload
- Client-Side Form Validation
- File Type and File Size Validation
- Previous and Next Navigation
- Registration Success Screen

## Registration Flow

Personal Details
→ Address Details
→ Government ID Details
→ Document Upload
→ Registration Submission

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Vite
- React Router

## Run the Project

Install dependencies:

npm install

Start the development server:

npm run dev

The frontend will run at:

http://localhost:5173

## Backend Integration

The frontend is prepared for integration with the Spring Boot backend.

Create a `.env` file with:

VITE_API_BASE_URL=http://localhost:8080

The exact registration API endpoint and request structure must match the Spring Boot backend implementation.

## Registration Data

The registration frontend currently collects:

### Personal Details

- First Name
- Last Name
- Email
- Mobile Number
- Password

### Address Details

- Address Line
- City
- State
- PIN Code
- Country

### Government ID Details

- Government ID Type
- Government ID Number
- Government ID Document

## Team Integration

The backend team should confirm:

- Registration API endpoint
- HTTP method
- Request field names
- Multipart request structure
- Uploaded document field name
- API response format