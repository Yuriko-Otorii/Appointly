import React from "react";
import PublicLayout from "../../components/Layout/PublicLayout";
import top from "../../assets/top.svg";
import top2 from "../../assets/top2.jpg";
import { Link } from "react-router-dom";
// import PrimaryBtn from "../../components/Elements/Button/PrimaryBtn";
import set from "../../assets/set.svg";
import niceMeeting from "../../assets/nice-meeting.svg";
import receiveInfo from "../../assets/receive-info.svg";

const Home = () => {
  return (
    <>
      <PublicLayout>
        <div className="container ">
          <div className="md:flex">
            <div className="w-full">
              <h1 className="text-4xl font-second md:text-5xl">
                Stay connected anytime, anywhere.
              </h1>
              <h3 className="mt-6 md:text-lg text-info">
                This app makes scheduling online chats with ease. <br />
                Rather than spending time on scheduling, focus on connecting
                more.
              </h3>
              <Link to="/login">
                <button className="btn btn-primary normal-case  w-42 py-2 mt-8 text-xl font-second">
                  My Account
                </button>
              </Link>
            </div>
            {/* <img
              src={top}
              alt=""
              className="w-full h-full max-h-80 min-h-full mt-8 md:m-0 md:my-auto"
            /> */}
            <div className="md:m-0 md:my-auto mt-8 w-full h-full">
              <div className="bg-secondary p-4 rounded-md ">
                <img src={top2} className="max-h-80 mx-auto" />
              </div>
            </div>
            {/* <div className="w-full h-full max-h-80 min-h-full mt-8 md:m-0 md:my-auto rounded-md bg-secondary"></div> */}
          </div>
          <div className="my-8 md:my-20">
            <h2 className="text-center font-second text-xl">
              <span className="border-b border-thin border-neutral">
                How to use
              </span>
            </h2>
            <div className="container lg:flex mt-8">
              <div className="card w-72 bg-base-100 shadow-xl mt-5 mx-auto ">
                <figure className="px-10 pt-10 ">
                  <img src={set} className="rounded-xl max-h-36" />
                </figure>
                <div className="md:flex m-7 items-center text-center min-h-16 my-auto">
                  <div className="w-3/6 mx-auto">
                    <span className="block text-8xl text-primary mx-2">1</span>
                  </div>
                  <div>
                    <h2 className="card-title block font-second">
                      Set your schedules
                    </h2>
                    <p className="block my-2 text-info">
                      Set your availability slots on your personal page, and get
                      a unique URL to share with your guests (Your guests do not
                      need to create an account).
                    </p>
                  </div>
                </div>
              </div>
              <div className="card w-72 bg-base-100 shadow-xl mt-5 mx-auto ">
                <figure className="px-10 pt-10 ">
                  <img src={receiveInfo} className="rounded-xl max-h-36" />
                </figure>
                <div className="md:flex m-7 items-center text-center ">
                  <div className="w-3/6 mx-auto">
                    <span className="block text-8xl text-primary mx-2">2</span>
                  </div>
                  <div>
                    <h2 className="card-title block font-second">Contact</h2>
                    <p className="block my-2 text-info">
                      Once your guest books a meeting, both you and your guest
                      will receive relevant details such as name, email, and
                      message.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card w-72 bg-base-100 shadow-xl mt-5 mx-auto">
                <figure className="px-10 pt-10">
                  <img src={niceMeeting} className="rounded-xl max-h-36" />
                </figure>
                <div className="md:flex m-7 items-center text-center my-auto ">
                  <div className="w-3/6 mx-auto">
                    <span className="block text-8xl text-primary mx-2">3</span>
                  </div>
                  <div>
                    <h2 className="card-title block font-second">
                      Have a meeting
                    </h2>
                    <p className="block my-2 text-info">
                      You can now contact the guest directly via email to set
                      the meeting details and have a nice chat at the scheduled
                      time!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PublicLayout>
    </>
  );
};

export default Home;
