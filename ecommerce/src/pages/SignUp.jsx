import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Spinner } from "@material-tailwind/react";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });
  const history = useHistory();

  useEffect(() => {
    getRoles(); // Fetch roles when the component mounts
  }, []);

  const getRoles = () => {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/roles")
      .then((response) => {
        const roles = response.data;
        console.log("Roles:", roles);
        setRoles(roles);
      })
      .catch((error) => {
        console.error("Error fetching roles:", error);
      });
  };

  const onSubmit = (data) => {
    setLoading(true);

    let userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role === "admin" ? 0 : 2,
    };

    if (data.role.toLowerCase() === "store") {
      userData = {
        ...userData,
        role_id: 1,
        store: {
          name: data.storeName,
          phone: data.storePhone,
          tax_no: data.storeTaxNumber,
          bank_account: data.storeIBAN,
        },
      };
    }

    axios
  .post("https://workintech-fe-ecommerce.onrender.com/signup", userData)
  .then((response) => {
    if (response.data && response.data.message === "User created. Check your email for activation instructions.") {
      // Redirect to the previous page with a success message
      setTimeout(() => {
        // Redirect to the previous page after the delay
        history.goBack();
      }, 3000); 
      setSuccessMessage("You need to click link in email to activate your account!");

      setTimeout(() => {
        setSuccessMessage(null);
      }, 8000);
    } else {
      // Handle other responses, e.g., display an error message
      setErrorMessage(response.data.message);
      console.error("Error signing up:", response.data.message);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  })
  .catch((error) => {
    console.error("Error signing up:", error);
    setErrorMessage("An error occurred during signup.");

        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      })
  .finally(() => {
    setLoading(false);
  });
  };

  return (
    <>

        <div className="flex my-20 max-w-screen-2xl mx-auto justify-center">
          <div className="max-w-md w-full flex flex-col gap-10">
            <div className="text-center">
              <h2 className=" text-3xl font-bold text-darkText">
                {" "}
                Welcome!
              </h2>
              <p className="text-sm  text-darkText">
                Please create your account to sign up
              </p>
            </div>
            <form
              className=" flex flex-col gap-8 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="name"
                  className="ml-1 text-sm font-bold text-lighterDark tracking-wide"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  className=" bg-white w-full text-base px-4 py-2 border-2 border-priceGray rounded-md focus:outline-none focus:border-navBlue"
                  type="text"
                  placeholder="Enter your full name"
                  {...register("name", {
                    required: { value: true, message: "Full name is required" },
                    minLength: {
                      value: 3,
                      message: "You must enter at least 3 characters",
                    },
                    maxLength: {
                      value: 35,
                      message: "You can enter up to 35 characters.",
                    },
                  })}
                />
                {errors["name"] && (
                  <p
                    role="alert"
                    className="ml-1 mt-1 text-sm font-bold text-red-600 tracking-wide"
                  >
                    {errors["name"]?.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="ml-1 text-sm font-bold text-lighterDark tracking-wide"
                >
                  Email
                </label>
                <input
                  autoComplete="true"
                  id="email"
                  className=" bg-white w-full text-base px-4 py-2 border-2 border-priceGray rounded-md focus:outline-none focus:border-navBlue"
                  type="email"
                  placeholder="Enter your mail"
                  {...register("email", {
                    required: { value: true, message: "Email is required" },
                    minLength: {
                      value: 15,
                      message: "Email must be at least 15 characters long.",
                    },
                    maxLength: {
                      value: 100,
                      message: "Email can not be longer than 100 characters.",
                    },
                    pattern: {
                      value:
                        /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Invalid email",
                    },
                  })}
                />
                {errors["email"] && (
                  <p
                    role="alert"
                    className="ml-1 mt-1 text-sm font-bold text-red-600 tracking-wide"
                  >
                    {errors["email"]?.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="ml-1 text-sm font-bold text-lighterDark tracking-wide"
                >
                  Password
                </label>
                <input
                  id="password"
                  className="bg-white w-full content-center text-base px-4 py-2 border-2 border-priceGray rounded-md focus:outline-none focus:border-navBlue"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: { value: true, message: "Password is required" },
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long.",
                    },
                    maxLength: {
                      value: 30,
                      message: "Password cannot be longer than 30 characters.",
                    },
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-]).+$/,
                      message:
                        "Password must contain at least one number, one lower case letter, one upper case letter and a special character.",
                    },
                  })}
                />
                {errors["password"] && (
                  <p
                    role="alert"
                    className="ml-1 mt-1 text-sm font-bold text-red-600 tracking-wide"
                  >
                    {errors["password"]?.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="passwordConfirmation"
                  className="ml-1 text-sm font-bold text-lighterDark tracking-wide"
                >
                  Password Confirmation
                </label>
                <input
                  id="passwordConfirmation"
                  className="bg-white w-full content-center text-base px-4 py-2 border-2 border-priceGray rounded-md focus:outline-none focus:border-navBlue"
                  type="password"
                  placeholder="Enter your password"
                  {...register("passwordConfirmation", {
                    validate: (fieldValue) => {
                      return (
                        watch("password") === fieldValue ||
                        "Password does not match."
                      );
                    },
                  })}
                />
                {errors["passwordConfirmation"] && (
                  <p
                    role="alert"
                    className=" text-sm font-bold text-red-600 tracking-wide"
                  >
                    {errors["passwordConfirmation"]?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="role"
                  className="ml-1 text-sm font-bold text-lighterDark tracking-wide"
                >
                  Role
                </label>
                <select
                  id="role"
                  value={watch("role") || "customer"}
                  {...register("role")}
                  className="bg-white w-1/2 content-center text-base px-4 py-2 border-2 border-priceGray rounded-md focus:outline-none focus:border-navBlue"
                >
                  <option
                    key={3}
                    value={"customer"}
                    defaultValue={"customer"}
                    className="bg-white"
                  >
                    Customer
                  </option>
                  {roles &&
                    roles.map(
                      (role) =>
                        role.code !== "customer" && (
                          <option
                            key={role.id}
                            value={role.code}
                            className="bg-white"
                          >
                            {role.code.charAt(0).toUpperCase() +
                              role.code.slice(1)}
                          </option>
                        )
                    )}
                </select>

              </div>
              <div>
                <button
                  type="submit"
                  disabled={!isValid || loading }
                  className={`w-full flex justify-center text-2xl p-3 rounded-full tracking-wide font-semibold cursor-pointer relative ${
                    !isValid || loading ? 'bg-gray-300 text-gray-500' : 'bg-navBlue text-white'
                  }`}
                >
                   Sign up
          {loading && (
            <Spinner
              color="white"
              size="small"
              className=""
            />
          )}
                </button>
              </div>
            </form>
          </div>
        </div>


    <div>
        {successMessage && (
        <div className="mt-4 p-4 bg-green-500 text-white rounded">
          {successMessage}
        </div>
      )}

{errorMessage && (
        <div className="mt-4 p-4 bg-red-500 text-white rounded">
          {errorMessage}
        </div>
      )}
    </div>

    </>

  );
};

export default SignUp;
