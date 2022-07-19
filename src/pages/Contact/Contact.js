import React from "react";
import Helmet from "../../components/Helmet/Helmet";

import { FaRegAddressBook, FaUniversity } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import "../../styles/Contact.scss";
import Map from "./Map";
import Banner from "../../components/Banner/Banner";
const Contact = () => {
  const key = "AIzaSyDJeea6GcUjpQV_G7XmfrLr_m3vDY_skBs";
  return (
    <>
      <Helmet title="Liên hệ">
       <Banner title="Contact with us" />

        <div className="contact">
          <div className="contact__info">
            <div className="contact__info__item">
              <div className="contact__info__item__icon">
                <FaRegAddressBook />
              </div>
              <div className="contact__info__item__title">
              <h4>Address</h4>
              <p>Thang Loi, Thuong Tin, HaNoi</p>
              </div>
              
            </div>
            <div className="contact__info__item">
              <div className="contact__info__item__icon">
                <FaUniversity />
              </div>
              <div className="contact__info__item__title">
              <h4>University</h4>
              <p>Thuy Loi University</p>
              </div>
              
            </div>
            <div className="contact__info__item">
              <div className="contact__info__item__icon">
                <AiOutlineMail />
              </div>
              <div className="contact__info__item__title">
              <h4>Email</h4>
              <p>lethanhancr7112001@gmail.com</p>
              </div>
              
            </div>
            <div className="contact__info__item">
              <div className="contact__info__item__icon">
                <FiPhoneCall />
              </div>
              <div className="contact__info__item__title">
              <h4>Call Us</h4>
              <p>0969713359</p>
              </div>
              
            </div>
          </div>
        </div>

        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                height: `90vh`,
                margin: `60px 80px`,
                border: "2px solid white",
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Helmet>
    </>
  );
};

export default Contact;
