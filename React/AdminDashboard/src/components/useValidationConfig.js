import { useState } from "react";

const useValidationConfig = () => {
  const validateConfing = {
    id: [
      { required: true, message: "Enter product id " },
      { minLength: 3, message: "id should be atleast 3 char long " },
    ],
    category: [{ required: true, message: "select category" }],
    title: [
      { required: true, message: "Enter Your product title " },
      { minLength: 3, message: "title should be atleast 3 char long " },
    ],
    description: [
      { required: true, message: "Enter Your product description " },
      {
        minLengthLong: 10,
        message: "description should be atleast 10 char long ",
      },
    ],
    oldPrice: [{ required: true, message: "Enter your product price" }],
    rate: [{ required: true, message: "Discount if not enter 0" }],
    newPrice: [{ required: false }],
    image: [{ required: true, message: "img url is compulsory" }],
  };

  const [error, setError] = useState({});
  const validateForm = (formdata) => {
    const formErrors = {};
    Object.entries(formdata).forEach(([key, value]) => {
      validateConfing[key].some((rule) => {
        if (rule.required && !value) {
          formErrors[key] = rule.message;
          return true;
        }
        if (rule.minLength && !(value.length >= 3)) {
          formErrors[key] = rule.message;
          return true;
        }
        if (rule.minLengthLong && !(value.length >= 10)) {
          formErrors[key] = rule.message;
          return true;
        }
      });
    });
    setError(formErrors);
    // console.log(formErrors);
    return formErrors;
  };
  return [validateForm, error, setError];
};

export default useValidationConfig;
