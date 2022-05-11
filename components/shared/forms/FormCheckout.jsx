import React, { useState } from "react";
import ModuleCheckoutSummary from "~/components/shared/forms/modules/ModuleCheckoutSummary";

const FormCheckout = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [company, setCompany] = useState("");
  // const [country, setCountry] = useState("Peru");
  // const [street, setStreet] = useState("");
  // const [zip, setZip] = useState("");
  // const [city, setCity] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [notes, setNotes] = useState("");
  const [createAccount, setCreateAccount] = useState(false);

  const [information, setInformation] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "Peru",
    street: "",
    zip: "",
    city: "",
    email: "",
    phone: "",
    notes: "",
  });

  const changeInformation = (newValue, field) => {
    switch (field) {
      case "firstName": {
        setInformation((prev) => ({ ...prev, firstName: newValue }));
        break;
      }
      case "lastName": {
        setInformation((prev) => ({ ...prev, lastName: newValue }));
        break;
      }
      case "company": {
        setInformation((prev) => ({ ...prev, company: newValue }));
        break;
      }
      case "country": {
        setInformation((prev) => ({ ...prev, country: newValue }));
        break;
      }
      case "street": {
        setInformation((prev) => ({ ...prev, street: newValue }));
        break;
      }
      case "zip": {
        setInformation((prev) => ({ ...prev, zip: newValue }));
        break;
      }
      case "city": {
        setInformation((prev) => ({ ...prev, city: newValue }));
        break;
      }
      case "email": {
        setInformation((prev) => ({ ...prev, email: newValue }));
        break;
      }
      case "phone": {
        setInformation((prev) => ({ ...prev, phone: newValue }));
        break;
      }
      case "notes": {
        setInformation((prev) => ({ ...prev, notes: newValue }));
        break;
      }
    }
  };

  return (
    <form className="ps-form--checkout">
      {/* <pre>{JSON.stringify(information, null, 2)}</pre> */}
      <div className="row">
        <div className="col-md-6">
          <div className="ps-form__billings">
            <h4 className="ps-form__heading">Billings</h4>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    First Name <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    value={information.firstName}
                    // onChange={(e) => setFirstName(e.currentTarget.value)}
                    onChange={(e) =>
                      changeInformation(e.currentTarget.value, "firstName")
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Last Name <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    value={information.lastName}
                    // onChange={(e) => setLastname(e.currentTarget.value)}
                    onChange={(e) =>
                      changeInformation(e.currentTarget.value, "lastName")
                    }
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>Company Name (optional)</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    value={information.company}
                    // onChange={(e) => setCompany(e.currentTarget.value)}
                    onChange={(e) =>
                      changeInformation(e.currentTarget.value, "company")
                    }
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    Country <sup>*</sup>
                  </label>
                  <select
                    className="ps-select form-control"
                    value={information.country}
                    // onChange={(e) => setCountry(e.currentTarget.value)}
                    onChange={(e) =>
                      changeInformation(e.currentTarget.value, "country")
                    }
                  >
                    <option value="USA">USA</option>
                    <option value="Holanda">Holland</option>
                    <option value="Italia">Italy</option>
                    <option value="Peru">Perú</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    Street address <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="House number and street name"
                    value={information.street}
                    // onChange={(e) => setStreet(e.currentTarget.value)}
                    onChange={(e) =>
                      changeInformation(e.currentTarget.value, "street")
                    }
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>Postcode / ZIP (optional)</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Apartment, suite, unit etc. (optional)"
                    value={information.zip}
                    // onChange={(e) => setZip(e.currentTarget.value)}
                    onChange={(e) =>
                      changeInformation(e.currentTarget.value, "zip")
                    }
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    Town / City <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    value={information.city}
                    // onChange={(e) => setCity(e.currentTarget.value)}
                    onChange={(e) =>
                      changeInformation(e.currentTarget.value, "city")
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Email <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    value={information.email}
                    // onChange={(e) => setEmail(e.currentTarget.value)}
                    onChange={(e) =>
                      changeInformation(e.currentTarget.value, "email")
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Phone <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    value={information.phone}
                    // onChange={(e) => setPhone(e.currentTarget.value)}
                    onChange={(e) =>
                      changeInformation(e.currentTarget.value, "phone")
                    }
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group create-account">
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="createAccount"
                      name="createAccount"
                      value={createAccount}
                      onChange={(e) => setCreateAccount(e.currentTarget.value)}
                    />
                    <label htmlFor="createAccount">Create An account</label>
                  </div>
                </div>
              </div>
              {/* <div className="col-sm-12">
                <div className="form-group shipping">
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="shipping"
                      name="shipping"
                    />
                    <label htmlFor="shipping">
                      <strong>Shipping to different Address</strong>
                    </label>
                  </div>
                </div>
              </div> */}
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    Order notes {/* (Elegir talla si es un polo: M/L) */}
                  </label>
                  <textarea
                    className="form-control"
                    rows="6"
                    value={information.notes}
                    // onChange={(e) => setNotes(e.currentTarget.value)}
                    onChange={(e) =>
                      changeInformation(e.currentTarget.value, "notes")
                    }
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ps-form__orders">
            <h3>Your order</h3>
            <ModuleCheckoutSummary information={information} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormCheckout;
