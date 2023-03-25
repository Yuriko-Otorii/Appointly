import React, { useState, useRef, useEffect } from "react";
import appointmentApi from "../../api/guestAppointmentApi";
import userAppointmentApi from "../../api/guestAppointmentApi";
import { useSelector, useDispatch } from "react-redux";
import GuestInputModal from "../Elements/Modal/guestInputModal";
import emailjs from "@emailjs/browser";
import { useParams } from "react-router-dom";
import { setUser } from "../../redux/slicers/userSlice";

const GuestInputForm = () => {
  // const user = useSelector((state) => state.user.user);
  // const { username } = useParams();

  const appointment = useSelector((state) => state.appointment.appointment);
  const date = appointment.appointmentDateTime.date;
  const time = appointment.appointmentDateTime.time;

  const formRef = useRef(null);
  const hostNameRef = useRef(null);
  const hostEmailRef = useRef(null);
  const timeRef = useRef(null);
  const dateRef = useRef(null);

  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const messageInput = useRef(null);

  const [nameErr, setNameErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);
  const [messageErr, setMessageErr] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [hostEmail, setHostEmail] = useState("");
  const [hostName, setHostName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.dir(e.target);
    setEmailErr("");
    setNameErr("");
    setMessageErr("");

    const name = nameInput.current.value;
    const email = emailInput.current.value;
    const message = messageInput.current.value;

    let error = false;
    if (name === "") {
      error = true;
      setNameErr("Please enter your name");
    }

    if (email === "" || !email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      error = true;
      setEmailErr("Please enter an invalid email");
    }

    if (message === "") {
      error = true;
      setMessageErr("Please fill message");
    }

    if (error) return;

    setShowModal(true);

    const newObj = {
      name,
      email,
      message,
    };

    try {
      newObj.appointmentDateTime = appointment.appointmentDateTime;
      newObj.hostUser = appointment.hostUser;

      //resを分解してるよ
      const {
        data: { username, email },
      } = await appointmentApi({
        newObj,
      });

      // setHostEmail(email);
      // setHostName(username);

      const params = {
        ...newObj,
        hostEmail: email,
        hostName: username,
        time,
        date,
      };

      emailjs
        .send(
          import.meta.env.VITE_APP_SERVICE_ID,
          import.meta.env.VITE_APP_USER_TEMPLATE_ID,
          params,
          import.meta.env.VITE_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      emailjs
        .send(
          import.meta.env.VITE_APP_SERVICE_ID,
          import.meta.env.VITE_APP_GUEST_TEMPLATE_ID,
          params,
          import.meta.env.VITE_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (err) {
      console.log(err);
    }

    // console.log(hostEmail);
  };

  console.log({ hostEmail });
  console.log({ hostName });
  console.log({ time });
  console.log({ date });

  return (
    <>
      <div className="form-control w-full md:w-10/12 md:justify-center md:mx-auto mt-6">
        <form onSubmit={handleSubmit} ref={formRef}>
          <h1 className="text-3xl font-second my-3">Enter Details</h1>
          <label className="label">
            <span className="label-text text-textBase">Name</span>
          </label>
          <input
            ref={nameInput}
            type="text"
            name="guest_name"
            className="input input-bordered w-full max-w-xs input-primary "
          />

          {nameErr !== "" ? (
            <p className="text-xs text-red-600 pt-1">{nameErr}</p>
          ) : (
            ""
          )}
          <label className="label">
            <span className="label-text text-textBase">Email</span>
          </label>
          <input
            ref={emailInput}
            type="text"
            name="guest_email"
            className="input input-bordered w-full max-w-xs input-primary "
          />

          {emailErr !== "" ? (
            <p className="text-xs text-red-600 pt-1">{emailErr}</p>
          ) : (
            ""
          )}
          <div className="form-control mt-3 my-5">
            <label className="label">
              <span className="label-text normal-case text-textBase">
                Please share anything that will help prepare for our meeting.
              </span>
            </label>
            <textarea
              ref={messageInput}
              type="text"
              name="message"
              className="textarea textarea-bordered h-24 textarea-primary"
            ></textarea>
            {messageErr !== "" ? (
              <p className="text-xs text-red-600 pt-1">{messageErr}</p>
            ) : (
              ""
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary normal-case font-bold w-2/8 ml-auto"
            htmlFor="my-modal-4"
          >
            Schedule Event
          </button>

          {/* ✅変数の中身自体は渡せているけど、Email.jsには渡せていない */}
          {/* <input
            type="hidden"
            value={hostName}
            name={hostName}
            ref={hostNameRef}
          ></input>
          <input
            type="hidden"
            value={hostEmail}
            name={hostEmail}
            ref={hostEmailRef}
          ></input> */}
          {/* <input type="hidden" value={time} name={time} ref={timeRef}></input>
          <input type="hidden" value={date} name={date} ref={dateRef}></input> */}

          <input type="text" defaultValue={hostName} name="host_name"></input>
          <input type="hidden" value={hostEmail} name={hostEmail}></input>
          <input type="hidden" value={time} name={time}></input>
          <input type="hidden" value={date} name={date}></input>
        </form>
        {showModal ? (
          <GuestInputModal
            showModal={true}
            hostName={hostName}
            hostEmail={hostEmail}
          />
        ) : null}
      </div>
    </>
  );
};

export default GuestInputForm;
