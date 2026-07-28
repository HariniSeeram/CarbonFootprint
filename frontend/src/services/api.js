const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:8080";

export const registerUser = async (registrationData) => {
  const response = await fetch(
    `${API_BASE_URL}/api/register`,
    {
      method: "POST",
      body: registrationData,
    }
  );

  if (!response.ok) {
    const errorMessage = await response.text();

    throw new Error(
      errorMessage || "Registration failed."
    );
  }

  return response.json();
};

export default API_BASE_URL;