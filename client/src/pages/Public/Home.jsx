import React from "react";
import PublicLayout from "../../components/Layout/PublicLayout";
import top from "../../assets/top.svg";
import top2 from "../../assets/top2.jpg";
import { Link } from "react-router-dom";
import set from "../../assets/set.svg";
import niceMeeting from "../../assets/nice-meeting.svg";
import receiveInfo from "../../assets/receive-info.svg";
import HomeAnimation from "../../utils/Animation/HomeAnimation";

const Home = () => {
  return (
    <>
      <PublicLayout>
        <div className="container md:mt-20 ">
          <HomeAnimation>
            <div className="md:flex">
              <div className="w-full">
                <h1 className="text-4xl font-second font-bold md:text-5xl text-slate-700 ">
                  Stay connected anytime, anywhere.
                </h1>
                <p className="mt-6 md:text-lg text-info underline decoration-[#F7EDD6] decoration-2 md:decoration-4 underline-offset-4">
                  Appointly makes scheduling online chats with ease. <br />
                  Rather than spending time on scheduling, focus on connecting
                  more.
                </p>
                <Link to="/login">
                  <button className="btn btn-primary normal-case  w-42 py-2 mt-8 text-xl font-second">
                    My Account
                  </button>
                </Link>
              </div>

              <div className="md:m-0 md:my-auto mt-8 w-full h-full drop-shadow-xl">
                <img
                  src={top2}
                  className="max-h-90 mx-auto w-full rounded-3xl rounded-tl-full rounded-br-2xl"
                />
              </div>
            </div>
          </HomeAnimation>
          <div className="mt-20 md:mt-28">
            <HomeAnimation>
              <h2 className="text-center font-second text-2xl">
                <span className="border-b border-thin border-neutral font-bold">
                  How to use
                </span>
              </h2>
            </HomeAnimation>
            <HomeAnimation>
              <div className="lg:flex mt-12 container md:max-w-full">
                <div className="card w-9/12 shadow-xl mt-12 mx-auto lg:mr-8 ">
                  <figure className="px-10 pt-10 ">
                    <img src={set} className="rounded-xl max-h-36" />
                  </figure>
                  <div className="md:flex m-7 items-center text-center ">
                    <div className="w-3/6 mx-auto">
                      <span className="block text-6xl md:text-8xl text-primary mx-2">
                        1
                      </span>
                    </div>
                    <div>
                      <h2 className="card-title block font-second">
                        Set your schedules
                      </h2>
                      <p className="block my-4 text-info">
                        Set your availability slots on your personal page, and
                        get a unique URL to share with your guests (Your guests
                        do not need to create an account).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card w-9/12 bg-base-100 shadow-xl mt-12 mx-auto lg:mr-8">
                  <figure className="px-10 pt-10 ">
                    <img src={receiveInfo} className="rounded-xl max-h-36" />
                  </figure>
                  <div className="md:flex m-7 items-center text-center ">
                    <div className="w-3/6 mx-auto">
                      <span className="block text-6xl md:text-8xl text-primary mx-2">
                        2
                      </span>
                    </div>
                    <div>
                      <h2 className="card-title block font-second">Contact</h2>
                      <p className="block my-4 text-info">
                        Once your guest books a meeting, both you and your guest
                        will receive relevant details such as name, email, and
                        message.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card w-9/12 bg-base-100 shadow-xl mt-12 mx-auto">
                  <figure className="px-10 pt-10">
                    <img src={niceMeeting} className="rounded-xl max-h-36" />
                  </figure>
                  <div className="md:flex m-7 items-center text-center ">
                    <div className="w-3/6 mx-auto">
                      <span className="block text-6xl md:text-8xl text-primary mx-2">
                        3
                      </span>
                    </div>
                    <div>
                      <h2 className="card-title block font-second">
                        Have a meeting
                      </h2>
                      <p className="block my-4 text-info">
                        You can now contact the guest directly via email to set
                        the meeting details and have a nice chat at the
                        scheduled time!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </HomeAnimation>
          </div>

          <HomeAnimation>
            <div className="md:flex md:min-h-[50%] md:my-32">
              <div className="mt-8 w-full md:my-auto">
                <img
                  src={top}
                  className="max-h-90 mx-auto w-full rounded-lg mt-16 md:mt-0"
                />
              </div>
              <div className="w-full md:mx-8 my-16">
                <h2 className="text-center font-second text-2xl">
                  <span className="border-b border-thin border-neutral font-bold">
                    Q&A
                  </span>
                </h2>
                <div className="mt-5">
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
                  >
                    <div className="collapse-title text-xl font-bold">
                      Q: Is this app free?
                    </div>
                    <div className="collapse-content">
                      <p>A: Yes, it is totally free.</p>
                    </div>
                  </div>
                  <div
                    tabIndex={1}
                    className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box "
                  >
                    <div className="collapse-title text-xl font-bold">
                      Q: How can the host reschedule or cancel a meeting?
                    </div>
                    <div className="collapse-content">
                      <p>
                        A: To reschedule or cancel a meeting, hosts can do so by
                        sending a request through their personal page.
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={2}
                    className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box "
                  >
                    <div className="collapse-title text-xl font-bold">
                      Q: How can the guest reschedule or cancel a meeting?
                    </div>
                    <div className="collapse-content">
                      <p>
                        A: To reschedule or cancel a meeting, guests can
                        directly contact the host via email. The host's email
                        information is provided to guests once the booking is
                        confirmed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HomeAnimation>
        </div>
        <HomeAnimation>
          <div className="text-center my-20">
            <Link to="/signup">
              <h2 className="text-center font-second text-2xl  animate-pulse">
                <span className="font-bold text-accent">Ready to connect?</span>
              </h2>
              <button className="btn btn-primary normal-case w-42 py-2 mt-6 text-xl font-second">
                Get started
              </button>
            </Link>
          </div>
        </HomeAnimation>
      </PublicLayout>
    </>
  );
};

export default Home;
