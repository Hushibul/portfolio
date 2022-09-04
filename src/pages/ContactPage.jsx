import React from "react";
import ContactItem from "../components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Title from "../components/Title";

const ContactPage = () => {
  return (
    <div>
      <div className="title">
        <Title title={"Contact Me"} span={"Contact Me"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7238.427862726165!2d91.89216580000001!3d24.890683399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1660627354943!5m2!1sen!2sbd"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="map"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} text1={"+88 01629029583"} title={"Phone"} />
          <ContactItem
            icon={email}
            text1={"nayeemninz786@gmail.com"}
            text2={"hushibulhaque520@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"A Block, Road 8, Uposhohor, Sylhet"}
            text2={"Bangladesh"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
