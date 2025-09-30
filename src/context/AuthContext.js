import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [forgotToken, setForgotToken] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // useEffect(() => {
  //   const storedToken = Cookies.get('auth_token');
  //   if (storedToken) {
  //     setToken(storedToken);
  //     axiosApiClient.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
  //     getUser();
  //     router.push('/dashboard');
  //   } else {
  //     setLoading(false);
  //   }
  // }, []);

  const getUser = async () => {
    try {
      const { data } = await axiosApiClient.get("/user");
      setUser(data);
    } catch (err) {
      setUser(null);
      console.error("Error fetching user:", err);
      Cookies.remove("auth_token");
      delete axiosApiClient.defaults.headers.common["Authorization"];
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await axiosApiClient.post("/auth/login", credentials);
      if (response?.data?.success) {
        setForgotToken(null);
        setForgotEmail(null);
        const token = response.data.data.token;
        Cookies.set("auth_token", token, { expires: 7 });
        axiosApiClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
        setToken(token);
        await getUser();
      } else {
        return { error: response?.data?.message };
      }
    } catch (error) {
      console.error("Login failed:", error);
      return error;
    }
  };

  const register = async (form) => {
    try {
      const { data } = await axiosApiClient.post("/auth/register", form);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const validationErrors = error.response.data.errors;

        // Optionally throw a custom error with just the validation messages
        throw {
          type: "validation",
          errors: validationErrors,
        };
      } else {
        console.error("Registration failed:", error);
        throw error; // rethrow other errors
      }
    }
  };

  const forgotPassword = async (form) => {
    try {
      const response = await axiosApiClient.post("/auth/forgot-password", form);

      if (response?.data?.success) {
        const token = response.data.data.token;
        const email = response.data.data.email;
        setForgotToken(token);
        setForgotEmail(email);
      }

      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const validationErrors = error.response.data.message;
        console.error("forgot Password Validation Errors:", validationErrors);

        // Optionally throw a custom error with just the validation messages
        throw {
          type: "validation",
          errors: validationErrors,
        };
      } else {
        console.error("forgot Password failed:", error);
        throw error; // rethrow other errors
      }
    }
  };

  const verifyForgotOtp = async (form) => {
    try {
      const response = await axiosApiClient.post(
        "/auth/verify-forgot-otp",
        form
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const validationErrors = error.response.data.message;
        console.error("forgot Password Validation Errors:", validationErrors);

        // Optionally throw a custom error with just the validation messages
        throw {
          type: "validation",
          errors: validationErrors,
        };
      } else {
        console.error("forgot Password failed:", error);
        throw error; // rethrow other errors
      }
    }
  };

  const resetPassword = async (form) => {
    try {
      const response = await axiosApiClient.post("/auth/reset-password", form);
      setForgotToken(null);
      setForgotEmail(null);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const validationErrors = error.response.data.message;
        console.error("forgot Password Validation Errors:", validationErrors);

        throw {
          type: "validation",
          errors: validationErrors,
        };
      } else {
        console.error("forgot Password failed:", error);
        throw error; // rethrow other errors
      }
    }
  };

  const logout = async () => {
    try {
      await axiosApiClient.post("/auth/logout");
    } catch (error) {
      console.warn("Logout API failed or was already expired.", error);
    } finally {
      Cookies.remove("auth_token");
      delete axiosApiClient.defaults.headers.common["Authorization"];
      setUser(null);
      setToken(null);
      router.push("/");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        forgotPassword,
        verifyForgotOtp,
        resetPassword,
        setForgotToken,
        setForgotEmail,
        loading,
        token,
        forgotEmail,
        forgotToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
