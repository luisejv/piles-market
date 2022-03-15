const { notification } = require("antd");

const modalWarning = (type) => {
  notification[type]({
    message: "Error!",
    description: "We need your email to continue with the checkout.",
  });
};

// function* setInfo({ info }) {
//     try {
//         const
//     }
// }
