import React, { useState } from "react";
import ModuleCheckoutSummary from "~/components/shared/forms/modules/ModuleCheckoutSummary";

const FormCheckout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState(1);
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [createAccount, setCreateAccount] = useState(false);

  return (
    <form className="ps-form--checkout">
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.currentTarget.value)}
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
                    value={lastname}
                    onChange={(e) => setLastname(e.currentTarget.value)}
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
                    value={company}
                    onChange={(e) => setCompany(e.currentTarget.value)}
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
                    value={country}
                    onChange={(e) => setCountry(e.currentTarget.value)}
                  >
                    <option value="1">USA</option>
                    <option value="2">England</option>
                    <option value="3">Japan</option>
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
                    value={street}
                    onChange={(e) => setStreet(e.currentTarget.value)}
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
                    value={zip}
                    onChange={(e) => setZip(e.currentTarget.value)}
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
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
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
                    value={phone}
                    onChange={(e) => setPhone(e.currentTarget.value)}
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
                  <label>Order notes (optional)</label>
                  <textarea
                    className="form-control"
                    rows="6"
                    value={notes}
                    onChange={(e) => setNotes(e.currentTarget.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ps-form__orders">
            <h3>Your order</h3>
            <ModuleCheckoutSummary email={email} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormCheckout;
