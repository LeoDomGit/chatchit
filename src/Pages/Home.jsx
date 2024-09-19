import React, { useState } from "react";

function Home() {
  const [sidebar,setSidebar]= useState(true);
  return (
    <>
      <div className="sidebar-active">
        {/* <div className="chitchat-loader">
          <div>
            <img src="../assets/images/logo/logo_big.png" alt="" />
            <h3>Simple, secure messaging for fast connect to world..!</h3>
          </div>
        </div> */}
        <div className="chitchat-container sidebar-toggle">
          <nav className={sidebar?"main-nav on custom-scroll":"main-nav custom-scroll"}>
            <div className="logo-warpper">
              <a href="messenger.html">
                <img src="../assets/images/logo/logo.png" alt="logo" />
              </a>
            </div>
            <div className="sidebar-main">
              <ul className="sidebar-top">
                <li>
                  <a
                    className="button-effect"
                    href="status"
                    data-tippy-content="status"
                    data-intro="Check Status here"
                  >
                    <div className="user-popup status one">
                      <div>
                        {" "}
                        <img
                          className="bg-img"
                          src="../assets/images/avtar/2.jpg"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="icon-btn btn-light button-effect"
                    href="favourite"
                    data-tippy-content="Favourite"
                  >
                    <i className="fa fa-star"> </i>
                  </a>
                </li>
                <li>
                  <a
                    className="icon-btn btn-light button-effect"
                    href="document"
                    data-tippy-content="Document"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-archive"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="icon-btn btn-light button-effect"
                    href="contact-list"
                    data-tippy-content="Contact List"
                  >
                    {" "}
                    <i className="fa fa-users"></i>
                  </a>
                </li>
                <li>
                  <div className="dot-btn dot-danger grow">
                    <a
                      className="icon-btn btn-light button-effect"
                      href="notification"
                      data-tippy-content="Notification"
                    >
                      {" "}
                      <i className="fa fa-bell" />
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    className="icon-btn btn-light button-effect"
                    href="settings"
                    data-tippy-content="Setting"
                    data-intro="You can change settings by clicking here"
                  >
                    {" "}
                    <i className="fa fa-cog" />
                  </a>
                </li>
              </ul>
              <ul className="sidebar-bottom">
                <li>
                  <a
                    className="icon-btn btn-light button-effect mode"
                    href="#"
                    data-tippy-content="Theme Mode"
                    data-intro="Change mode"
                  >
                    <i className="fa fa-moon-o" />
                  </a>
                </li>
                <li>
                  <a
                    className="icon-btn btn-light"
                    href="login.html"
                    data-tippy-content=" SignOut"
                  >
                    {" "}
                    <i className="fa fa-power-off"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <aside className="chitchat-left-sidebar left-disp">
            <div className="recent-default dynemic-sidebar active">
              <div className="recent">
                <div className="theme-title">
                  <div className="d-flex">
                    <div>
                      <h2>Recent</h2>
                      <h4>Chat from your friends 😘</h4>
                    </div>
                    <div className="flex-grow-1">
                      <a
                        className="icon-btn btn-outline-light button-effect pull-right mobile-back"
                        href="#"
                      >
                        <i className="ti-angle-right" />
                      </a>
                      <a
                        className="icon-btn btn-outline-light button-effect pull-right mainnav"
                        href="#"
                        onClick={(e)=>setSidebar(!sidebar)}
                      >
                        <i className="ti-layout-grid2" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="recent-slider recent-chat owl-carousel owl-theme">
                  <div className="item">
                    <div className="recent-box">
                      <div className="dot-btn dot-danger grow" />
                      <div className="recent-profile">
                        <img
                          className="bg-img"
                          src="../assets/images/avtar/1.jpg"
                          alt="Avatar"
                        />
                        <h6> John deo</h6>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="recent-box">
                      <div className="dot-btn dot-success grow" />
                      <div className="recent-profile online">
                        <img
                          className="bg-img"
                          src="../assets/images/avtar/big/audiocall.jpg"
                          alt="Avatar"
                        />
                        <h6> John </h6>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="recent-box">
                      <div className="dot-btn dot-warning grow" />
                      <div className="recent-profile">
                        <img
                          className="bg-img"
                          src="../assets/images/avtar/2.jpg"
                          alt="Avatar"
                        />
                        <h6> Jpny</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat custom-scroll">
                <ul className="chat-cont-setting">
                  <li>
                    {" "}
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#msgchatModal"
                    >
                      <span>new chat</span>
                      <div className="icon-btn btn-outline-primary button-effect btn-sm">
                        <i data-feather="message-square" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#msgcallModal"
                    >
                      <span>new call</span>
                      <div className="icon-btn btn-outline-success button-effect btn-sm">
                        <i data-feather="phone" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalCenter"
                    >
                      <span>new Contact</span>
                      <div className="icon-btn btn-outline-danger button-effect btn-sm">
                        <i data-feather="users" />
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="theme-title">
                  <div className="d-flex">
                    <div>
                      <h2>Chat</h2>
                      <h4>Start New Conversation</h4>
                    </div>
                    <div className="flex-grow-1">
                      <a
                        className="icon-btn btn-outline-light btn-sm search contact-search"
                        href="#"
                      >
                        {" "}
                        <i class="bi bi-search"></i>
                      </a>
                      <form className="form-inline search-form">
                        <div className="form-group">
                          <input
                            className="form-control-plaintext"
                            type="search"
                            placeholder="Search.."
                          />
                          <div className="icon-close close-search">
                            {" "}
                            <i data-feather="x"> </i>
                          </div>
                        </div>
                      </form>
                      <a
                        className="icon-btn btn-primary btn-fix chat-cont-toggle outside"
                        href="#"
                      >
                        <i data-feather="plus" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="theme-tab tab-sm chat-tabs">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" data-to="chat-content">
                      <a
                        className="nav-link button-effect active"
                        id="chat-tab"
                        data-bs-toggle="tab"
                        href="#chat"
                        role="tab"
                        aria-controls="chat"
                        aria-selected="true"
                        data-intro="Start chat"
                      >
                        <i data-feather="message-square"> </i>Chat
                      </a>
                    </li>
                    <li className="nav-item" data-to="call-content">
                      <a
                        className="nav-link button-effect"
                        id="call-tab"
                        data-bs-toggle="tab"
                        href="#call"
                        role="tab"
                        aria-controls="call"
                        aria-selected="false"
                      >
                        <i data-feather="phone"> </i>Call
                      </a>
                    </li>
                    <li className="nav-item" data-to="contact-content">
                      <a
                        className="nav-link button-effect"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        href="#contact"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        {" "}
                        <i data-feather="users"> </i>Contact
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="chat"
                      role="tabpanel"
                      aria-labelledby="chat-tab"
                    >
                      <div className="theme-tab">
                        <ul className="nav nav-tabs" id="myTab1" role="tablist">
                          <li className="nav-item">
                            <a
                              className="nav-link button-effect active"
                              id="direct-tab"
                              data-bs-toggle="tab"
                              href="#direct"
                              role="tab"
                              aria-controls="direct"
                              aria-selected="false"
                              data-to="chating"
                            >
                              Direct
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link button-effect"
                              id="group-tab"
                              data-bs-toggle="tab"
                              href="#group"
                              role="tab"
                              aria-controls="group"
                              aria-selected="true"
                              data-to="group_chat"
                            >
                              Group
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent1">
                          <div
                            className="tab-pane fade show active"
                            id="direct"
                            role="tabpanel"
                            aria-labelledby="direct-tab"
                          >
                            <ul className="chat-main">
                              <li data-to="blank">
                                <div className="chat-box">
                                  <div className="profile offline">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/1.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Josephin water</h5>
                                    <h6>
                                      Hi, i am josephin. How are you.. ! There
                                      are many variations of passages.
                                    </h6>
                                  </div>
                                  <div className="date-status">
                                    <i className="ti-pin2" />
                                    <h6>22/10/23</h6>
                                    <h6 className="font-success status">
                                      {" "}
                                      Seen
                                    </h6>
                                  </div>
                                </div>
                              </li>
                              <li className="active" data-to="chating">
                                <div className="chat-box">
                                  <div className="profile online">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/2.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>Typing................</h6>
                                  </div>
                                  <div className="date-status">
                                    <i className="ti-pin2" />
                                    <h6>30/11/23</h6>
                                    <div className="badge badge-primary sm">
                                      8
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li data-to="blank">
                                <div className="chat-box">
                                  <div className="profile unreachable">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/3.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Sufiya Elija</h5>
                                    <h6>I need job, please help me.</h6>
                                  </div>
                                  <div className="date-status">
                                    <i className="ti-pin2" />
                                    <h6>15/06/23</h6>
                                    <h6 className="font-dark status">
                                      {" "}
                                      Sending
                                    </h6>
                                  </div>
                                </div>
                              </li>
                              <li data-to="blank">
                                <div className="chat-box">
                                  <div className="profile busy">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/4.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Mukrani Pabelo</h5>
                                    <h6>
                                      Hi, i am josephin. How are you.. ! There
                                      are many variations of passages.
                                    </h6>
                                  </div>
                                  <div className="date-status">
                                    <i className="ti-pin2" />
                                    <h6>04/06/23</h6>
                                    <h6 className="font-danger status">
                                      {" "}
                                      Failed
                                    </h6>
                                  </div>
                                </div>
                              </li>
                              <li data-to="blank">
                                <div className="chat-box">
                                  <div className="profile busy">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/2.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jhon Deo</h5>
                                    <h6>
                                      Hi, i am josephin. How are you.. ! There
                                      are many variations of passages.
                                    </h6>
                                  </div>
                                  <div className="date-status">
                                    <i className="ti-pin2" />
                                    <h6>04/06/23</h6>
                                    <h6 className="font-danger status">
                                      {" "}
                                      Failed
                                    </h6>
                                  </div>
                                </div>
                              </li>
                              <li data-to="blank">
                                <div className="chat-box">
                                  <div className="profile busy">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/1.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Pabelo Mukrani</h5>
                                    <h6>
                                      Hi, i am josephin. How are you.. ! There
                                      are many variations of passages.
                                    </h6>
                                  </div>
                                  <div className="date-status">
                                    <i className="ti-pin2" />
                                    <h6>04/06/23</h6>
                                    <h6 className="font-danger status">
                                      {" "}
                                      Failed
                                    </h6>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="group"
                            role="tabpanel"
                            aria-labelledby="group-tab"
                          >
                            <div className="search2">
                              <div>
                                <div className="input-group">
                                  <div className="input-group-append">
                                    <span className="input-group-text">
                                      <i className="fa fa-search" />
                                    </span>
                                  </div>
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Start Chat"
                                  />
                                </div>
                              </div>
                            </div>
                            <ul className="group-main">
                              <li className="active" data-to="group_chat">
                                <div className="group-box">
                                  <div className="profile">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/avtar/teq.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Tech Ninjas</h5>
                                    <h6>
                                      Lorem Ipsum is simply dummy text the
                                      printing and typesetting industry.
                                    </h6>
                                  </div>
                                  <div className="date-status">
                                    <ul className="grop-icon">
                                      <li>
                                        <a
                                          className="group-tp"
                                          href="#"
                                          data-tippy-content="Josephin"
                                        >
                                          {" "}
                                          <img
                                            src="../assets/images/contact/1.jpg"
                                            alt="group-icon-img"
                                          />
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="group-tp"
                                          href="#"
                                          data-tippy-content="Jony "
                                        >
                                          {" "}
                                          <img
                                            src="../assets/images/contact/2.jpg"
                                            alt="group-icon-img"
                                          />
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="group-tp"
                                          href="#"
                                          data-tippy-content="Pabelo"
                                        >
                                          {" "}
                                          <img
                                            src="../assets/images/contact/3.jpg"
                                            alt="group-icon-img"
                                          />
                                        </a>
                                      </li>
                                      <li>+ 35</li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li data-to="group_blank">
                                <div className="group-box">
                                  <div className="profile">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/avtar/family.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Family Ties</h5>
                                    <h6>
                                      Lorem Ipsum is simply dummy text the
                                      printing and typesetting industry.
                                    </h6>
                                  </div>
                                  <div className="date-status">
                                    <ul className="grop-icon">
                                      <li>
                                        <a
                                          className="group-tp"
                                          href="#"
                                          data-tippy-content="Josephin"
                                        >
                                          {" "}
                                          <img
                                            src="../assets/images/contact/1.jpg"
                                            alt="group-icon-img"
                                          />
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="group-tp"
                                          href="#"
                                          data-tippy-content="Jony "
                                        >
                                          {" "}
                                          <img
                                            src="../assets/images/contact/2.jpg"
                                            alt="group-icon-img"
                                          />
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="group-tp"
                                          href="#"
                                          data-tippy-content="Pabelo"
                                        >
                                          {" "}
                                          <img
                                            src="../assets/images/contact/3.jpg"
                                            alt="group-icon-img"
                                          />
                                        </a>
                                      </li>
                                      <li>+ 12</li>
                                    </ul>
                                    <div className="badge badge-primary" />
                                  </div>
                                </div>
                              </li>
                              <li data-to="group_blank">
                                <div className="group-box">
                                  <div className="profile bg-danger">
                                    <span>HT</span>
                                  </div>
                                  <div className="details">
                                    <h5>Hungry for Trouble</h5>
                                    <h6>
                                      Lorem Ipsum is simply dummy text the
                                      printing and typesetting industry.
                                    </h6>
                                  </div>
                                </div>
                              </li>
                              <li data-to="group_blank">
                                <div className="group-box">
                                  <div className="profile">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/avtar/girls.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Staunch Ladies</h5>
                                    <h6>
                                      Lorem Ipsum is simply dummy text the
                                      printing and typesetting industry.
                                    </h6>
                                  </div>
                                </div>
                              </li>
                              <li data-to="group_blank">
                                <div className="group-box">
                                  <div className="profile bg-success">
                                    <span>CE</span>
                                  </div>
                                  <div className="details">
                                    <h5>Crazy Engineers</h5>
                                    <h6>
                                      Lorem Ipsum is simply dummy text the
                                      printing and typesetting industry.
                                    </h6>
                                  </div>
                                  <div className="date-status" />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="call"
                      role="tabpanel"
                      aria-labelledby="call-tab"
                    >
                      <div className="theme-tab tab-icon">
                        <ul
                          className="nav nav-tabs"
                          id="contactTab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="con1-tab"
                              data-bs-toggle="tab"
                              href="#con1"
                              role="tab"
                              aria-controls="con1"
                              aria-selected="true"
                            >
                              All
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="con3-tab"
                              data-bs-toggle="tab"
                              href="#con3"
                              role="tab"
                              aria-controls="con3"
                              aria-selected="false"
                            >
                              {" "}
                              <i data-feather="phone-incoming" />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="con4-tab"
                              data-bs-toggle="tab"
                              href="#con4"
                              role="tab"
                              aria-controls="con4"
                              aria-selected="false"
                            >
                              {" "}
                              <i data-feather="phone-outgoing" />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="con2-tab"
                              data-bs-toggle="tab"
                              href="#con2"
                              role="tab"
                              aria-controls="con2"
                              aria-selected="false"
                            >
                              {" "}
                              <i data-feather="phone-missed" />
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content" id="contactTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="con1"
                            role="tabpanel"
                            aria-labelledby="con1-tab"
                          >
                            <ul className="call-log-main">
                              <li className="active">
                                <div className="call-box">
                                  <div className="profile offline">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/2.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i data-feather="arrow-down-left" />
                                      3:30 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-success button-effect btn-sm">
                                      <i data-feather="phone" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile online">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/1.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i data-feather="arrow-down-right" />
                                      3:10 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-success button-effect btn-sm">
                                      <i data-feather="video" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile offline">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/2.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i
                                        className="missed"
                                        data-feather="corner-left-down"
                                      />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-danger button-effect btn-sm">
                                      <i data-feather="phone" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile online">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/1.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i data-feather="arrow-down-right" />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-success button-effect btn-sm">
                                      <i data-feather="video" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile offline">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/2.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i data-feather="arrow-down-right" />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-success button-effect btn-sm">
                                      <i data-feather="phone" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile online">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/1.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i data-feather="arrow-down-right" />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-success button-effect btn-sm">
                                      <i data-feather="video" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="con2"
                            role="tabpanel"
                            aria-labelledby="con2-tab"
                          >
                            <ul className="call-log-main">
                              <li className="active">
                                <div className="call-box">
                                  <div className="profile offline">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/2.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i
                                        className="missed"
                                        data-feather="corner-left-down"
                                      />
                                      3:30 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-danger button-effect btn-sm">
                                      <i data-feather="phone" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile online">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/1.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i
                                        className="missed"
                                        data-feather="corner-left-down"
                                      />
                                      3:10 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-danger button-effect btn-sm">
                                      <i data-feather="video" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile offline">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/2.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i
                                        className="missed"
                                        data-feather="corner-left-down"
                                      />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-danger button-effect btn-sm">
                                      <i data-feather="phone" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile online">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/1.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i
                                        className="missed"
                                        data-feather="corner-left-down"
                                      />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-danger button-effect btn-sm">
                                      <i data-feather="video" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile offline">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/2.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i
                                        className="missed"
                                        data-feather="corner-left-down"
                                      />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-danger button-effect btn-sm">
                                      <i data-feather="phone" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile online">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/1.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i
                                        className="missed"
                                        data-feather="corner-left-down"
                                      />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-danger button-effect btn-sm">
                                      <i data-feather="video" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="con3"
                            role="tabpanel"
                            aria-labelledby="con3-tab"
                          >
                            <ul className="call-log-main">
                              <li>
                                <div className="call-box">
                                  <div className="profile online">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/1.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i data-feather="arrow-down-right" />
                                      3:10 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-success button-effect btn-sm">
                                      <i data-feather="video" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile offline">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/2.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i data-feather="arrow-down-right" />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-success button-effect btn-sm">
                                      <i data-feather="phone" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile online">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/1.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i data-feather="arrow-down-right" />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-success button-effect btn-sm">
                                      <i data-feather="video" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile offline">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/2.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i data-feather="arrow-down-right" />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-success button-effect btn-sm">
                                      <i data-feather="phone" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile online">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/1.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i data-feather="arrow-down-right" />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-success button-effect btn-sm">
                                      <i data-feather="video" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="con4"
                            role="tabpanel"
                            aria-labelledby="con4-tab"
                          >
                            <ul className="call-log-main">
                              <li>
                                <div className="call-box">
                                  <div className="profile online">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/1.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i data-feather="arrow-up-right" />
                                      3:10 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-success button-effect btn-sm">
                                      <i data-feather="video" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile offline">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/2.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i data-feather="arrow-up-right" />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-success button-effect btn-sm">
                                      <i data-feather="phone" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile online">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/1.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i data-feather="arrow-up-right" />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-success button-effect btn-sm">
                                      <i data-feather="video" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile offline">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/2.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i data-feather="arrow-up-right" />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-success button-effect btn-sm">
                                      <i data-feather="phone" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="call-box">
                                  <div className="profile online">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/1.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Jony Lynetin</h5>
                                    <h6>
                                      {" "}
                                      <i data-feather="arrow-up-right" />
                                      3:00 pm
                                    </h6>
                                  </div>
                                  <div className="call-status">
                                    <div className="icon-btn btn-outline-success button-effect btn-sm">
                                      <i data-feather="video" />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <ul className="contact-log-main">
                        <li>
                          <div className="contact-box">
                            <div className="profile offline">
                              <img
                                className="bg-img"
                                src="../assets/images/contact/2.jpg"
                                alt="Avatar"
                              />
                            </div>
                            <div className="details">
                              <h5>Jony Lynetin</h5>
                              <h6>+21 3523 25544 </h6>
                            </div>
                            <div className="contact-action">
                              <div className="icon-btn btn-outline-primary btn-sm button-effect">
                                <i data-feather="phone" />
                              </div>
                              <div className="icon-btn btn-outline-success btn-sm button-effect">
                                <i data-feather="video" />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="active">
                          <div className="contact-box">
                            <div className="profile online">
                              <img
                                className="bg-img"
                                src="../assets/images/contact/1.jpg"
                                alt="Avatar"
                              />
                            </div>
                            <div className="details">
                              <h5>Jony Lynetin</h5>
                              <h6>+54 541447 255 </h6>
                            </div>
                            <div className="contact-action">
                              <div className="icon-btn btn-outline-primary btn-sm button-effect">
                                <i data-feather="phone" />
                              </div>
                              <div className="icon-btn btn-outline-success btn-sm button-effect">
                                <i data-feather="video" />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="contact-box">
                            <div className="profile busy">
                              <img
                                className="bg-img"
                                src="../assets/images/contact/3.jpg"
                                alt="Avatar"
                              />
                            </div>
                            <div className="details">
                              <h5>Jony Lynetin</h5>
                              <h6>+58 2564 02554</h6>
                            </div>
                            <div className="contact-action">
                              <div className="icon-btn btn-outline-primary btn-sm button-effect">
                                <i data-feather="phone" />
                              </div>
                              <div className="icon-btn btn-outline-success btn-sm button-effect">
                                <i data-feather="video" />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="contact-box">
                            <div className="profile unreachable">
                              <img
                                className="bg-img"
                                src="../assets/images/contact/4.jpg"
                                alt="Avatar"
                              />
                            </div>
                            <div className="details">
                              <h5>Jony Lynetin</h5>
                              <h6>+44 55124 2524</h6>
                            </div>
                            <div className="contact-action">
                              <div className="icon-btn btn-outline-primary btn-sm button-effect">
                                <i data-feather="phone" />
                              </div>
                              <div className="icon-btn btn-outline-success btn-sm button-effect">
                                <i data-feather="video" />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="contact-box">
                            <div className="profile online">
                              <img
                                className="bg-img"
                                src="../assets/images/contact/4.jpg"
                                alt="Avatar"
                              />
                            </div>
                            <div className="details">
                              <h5>Jony Lynetin</h5>
                              <h6>+54 541447 255 </h6>
                            </div>
                            <div className="contact-action">
                              <div className="icon-btn btn-outline-primary btn-sm button-effect">
                                <i data-feather="phone" />
                              </div>
                              <div className="icon-btn btn-outline-success btn-sm button-effect">
                                <i data-feather="video" />
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="fevorite-tab custom-scrollbar dynemic-sidebar"
              id="favourite"
            >
              <div className="theme-title">
                <div className="d-flex">
                  <div>
                    <h2>Favourite</h2>
                    <h4>Last Recent</h4>
                  </div>
                  <div className="flex-grow-1">
                    <a
                      className="icon-btn btn-outline-light btn-sm m-r-15 search"
                      href="#"
                    >
                      {" "}
                      <i class="bi bi-search"></i>
                    </a>
                    <form className="form-inline search-form">
                      <div className="form-group">
                        <input
                          className="form-control-plaintext"
                          type="search"
                          placeholder="Search.."
                        />
                        <div className="icon-close close-search">
                          <i data-feather="x" />
                        </div>
                      </div>
                    </form>
                    <a
                      className="icon-btn btn-outline-light btn-sm m-r-15"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#addcallmodal"
                    >
                      <i data-feather="plus"> </i>
                    </a>
                    <a
                      className="icon-btn btn-outline-light btn-sm close-panel"
                      href="#"
                    >
                      <i data-feather="x" />
                    </a>
                  </div>
                </div>
              </div>
              <ul className="chat-main">
                <li>
                  <div className="chat-box">
                    <div className="d-flex">
                      <div className="profile offline">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/1.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Josephin water</h5>
                        <h6>Alabma , USA</h6>
                      </div>
                      <div className="flex-grow-1">
                        <a
                          className="icon-btn btn-outline-primary btn-sm pull-right favourite"
                          href="#"
                        >
                          {" "}
                          <i data-feather="star"> </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="d-flex">
                      <div className="profile online">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/2.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jony Lynetin</h5>
                        <h6>Los Angeles, California</h6>
                      </div>
                      <div className="flex-grow-1">
                        <a
                          className="icon-btn btn-outline-primary btn-sm pull-right favourite"
                          href="#"
                        >
                          {" "}
                          <i data-feather="star"> </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="d-flex">
                      <div className="profile busy">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/3.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Sufiya Elija</h5>
                        <h6>Glasgow , Scotland</h6>
                      </div>
                      <div className="flex-grow-1">
                        <a
                          className="icon-btn btn-outline-primary btn-sm pull-right favourite"
                          href="#"
                        >
                          {" "}
                          <i data-feather="star"> </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="d-flex">
                      <div className="profile unreachable">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/4.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Pabelo Mukrani</h5>
                        <h6>Leicester , England</h6>
                      </div>
                      <div className="flex-grow-1">
                        <a
                          className="icon-btn btn-outline-primary btn-sm pull-right favourite"
                          href="#"
                        >
                          {" "}
                          <i data-feather="star"> </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="d-flex">
                      <div className="profile offline">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/1.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Josephin water</h5>
                        <h6>Alabma , USA</h6>
                      </div>
                      <div className="flex-grow-1">
                        <a
                          className="icon-btn btn-outline-primary btn-sm pull-right favourite"
                          href="#"
                        >
                          {" "}
                          <i data-feather="star"> </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="d-flex">
                      <div className="profile online">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/1.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Josephin water</h5>
                        <h6>Alabma , USA</h6>
                      </div>
                      <div className="flex-grow-1">
                        <a
                          className="icon-btn btn-outline-primary btn-sm pull-right favourite"
                          href="#"
                        >
                          {" "}
                          <i data-feather="star"> </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="document-tab dynemic-sidebar" id="document">
              <div className="theme-title">
                <div className="d-flex">
                  <div>
                    <h2>Document</h2>
                    <h4>List of document</h4>
                  </div>
                  <div className="flex-grow-1">
                    {" "}
                    <a
                      className="icon-btn btn-outline-light btn-sm m-r-15 search"
                      href="#"
                    >
                      {" "}
                      <i data-feather="search" />
                    </a>
                    <form className="form-inline search-form">
                      <div className="form-group">
                        <input
                          className="form-control-plaintext"
                          type="search"
                          placeholder="Search.."
                        />
                        <div className="icon-close close-search">
                          {" "}
                          <i data-feather="x"> </i>
                        </div>
                      </div>
                    </form>
                    <a
                      className="icon-btn btn-outline-light btn-sm close-panel"
                      href="#"
                    >
                      <i data-feather="x" />
                    </a>
                  </div>
                </div>
              </div>
              <ul className="chat-main">
                <li>
                  <div className="chat-box">
                    <div className="d-flex">
                      <div className="profile">
                        <a
                          className="icon-btn btn-outline-danger btn-xl pull-right rouded15"
                          href="#"
                        >
                          <i className="fa fa-file-code-o" />
                        </a>
                      </div>
                      <div className="details">
                        <h5>messenger.html</h5>
                        <h6>2, octomber 2023</h6>
                      </div>
                      <div className="flex-grow-1">
                        <a
                          className="icon-btn btn-outline-light btn-sm pull-right"
                          href="../assets/doc/messenger.html"
                          target="_blank"
                        >
                          <i data-feather="download" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="d-flex">
                      <div className="profile">
                        <a
                          className="icon-btn btn-outline-success btn-xl pull-right rouded15"
                          href="#"
                        >
                          <i className="fa fa-file-video-o" />
                        </a>
                      </div>
                      <div className="details">
                        <h5>chapter1.MP4</h5>
                        <h6>3, Octomber 2023</h6>
                      </div>
                      <div className="flex-grow-1">
                        <a
                          className="icon-btn btn-outline-light btn-sm pull-right"
                          href="../assets/doc/chapter1.MP4"
                          target="_blank"
                        >
                          {" "}
                          <i data-feather="download" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="d-flex">
                      <div className="profile">
                        <a
                          className="icon-btn btn-outline-primary btn-xl pull-right rouded15"
                          href="#"
                        >
                          <i className="fa fa-file-word-o" />
                        </a>
                      </div>
                      <div className="details">
                        <h5>salary.xlsx</h5>
                        <h6>5, Octomber 2023</h6>
                      </div>
                      <div className="flex-grow-1">
                        <a
                          className="icon-btn btn-outline-light btn-sm pull-right"
                          href="../assets/doc/salary.xlsx"
                          target="_blank"
                        >
                          {" "}
                          <i data-feather="download" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="d-flex">
                      <div className="profile">
                        <a
                          className="icon-btn btn-outline-warning btn-xl pull-right rouded15"
                          href="#"
                        >
                          <i className="fa fa-file-pdf-o" />
                        </a>
                      </div>
                      <div className="details">
                        <h5>document.pdf</h5>
                        <h6>7, Octomber 2023</h6>
                      </div>
                      <div className="flex-grow-1">
                        <a
                          className="icon-btn btn-outline-light btn-sm pull-right"
                          href="../assets/doc/document.pdf"
                          target="_blank"
                        >
                          {" "}
                          <i data-feather="download" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="d-flex">
                      <div className="profile">
                        <a
                          className="icon-btn btn-outline-danger btn-xl pull-right rouded15"
                          href="#"
                        >
                          <i className="fa fa-file-text-o" />
                        </a>
                      </div>
                      <div className="details">
                        <h5>details.txt</h5>
                        <h6>20, Octomber 2023</h6>
                      </div>
                      <div className="flex-grow-1">
                        <a
                          className="icon-btn btn-outline-light btn-sm pull-right"
                          href="../assets/doc/details.txt"
                          target="_blank"
                        >
                          {" "}
                          <i data-feather="download" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="d-flex">
                      <div className="profile">
                        <a
                          className="icon-btn btn-outline-success btn-xl pull-right rouded15"
                          href="#"
                        >
                          <i className="fa fa-file-code-o" />
                        </a>
                      </div>
                      <div className="details">
                        <h5>messenger.html</h5>
                        <h6>2, octomber 2023</h6>
                      </div>
                      <div className="flex-grow-1">
                        <a
                          className="icon-btn btn-outline-light btn-sm pull-right"
                          href="../assets/doc/messenger.html"
                          target="_blank"
                        >
                          <i data-feather="download" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="contact-list-tab dynemic-sidebar custom-scroll"
              id="contact-list"
            >
              <div className="theme-title">
                <div className="d-flex">
                  <div>
                    <h2>Contact</h2>
                    <h4>Start talking now</h4>
                  </div>
                  <div className="flex-grow-1">
                    {" "}
                    <a
                      className="icon-btn btn-outline-light btn-sm m-r-15 search"
                      href="#"
                    >
                      {" "}
                      <i data-feather="search" />
                    </a>
                    <form className="form-inline search-form">
                      <div className="form-group">
                        <input
                          className="form-control-plaintext"
                          type="search"
                          placeholder="Search.."
                        />
                        <div className="icon-close close-search">
                          {" "}
                          <i data-feather="x"> </i>
                        </div>
                      </div>
                    </form>
                    <a
                      className="icon-btn btn-outline-light btn-sm close-panel"
                      href="#"
                    >
                      <i data-feather="x" />
                    </a>
                  </div>
                </div>
              </div>
              <ul className="chat-main">
                <li className="active">
                  <div className="chat-box">
                    <div className="profile offline">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/1.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Josephin water</h5>
                      <h6>
                        Hi, i am josephin. How are you.. ! There are many
                        variations of passages.
                      </h6>
                    </div>
                    <div className="date-status">
                      <h6>22/10/23</h6>
                      <h6 className="font-success status"> Seen</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="profile online">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/2.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Jony Lynetin</h5>
                      <h6>Hello</h6>
                    </div>
                    <div className="date-status">
                      <h6>30/11/23</h6>
                      <div className="badge badge-primary sm">8</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="profile unreachable">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/3.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Sufiya Elija</h5>
                      <h6>I need job, please help me.</h6>
                    </div>
                    <div className="date-status">
                      <h6>15/06/23</h6>
                      <h6 className="font-dark status"> Sending</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="profile busy">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/4.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Pabelo Mukrani</h5>
                      <h6>
                        Hi, i am josephin. How are you.. ! There are many
                        variations of passages.
                      </h6>
                    </div>
                    <div className="date-status">
                      <h6>04/06/23</h6>
                      <h6 className="font-danger status"> Failed</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="profile offline">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/1.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Josephin water</h5>
                      <h6>
                        Hi, i am josephin. How are you.. ! There are many
                        variations of passages.
                      </h6>
                    </div>
                    <div className="date-status">
                      <h6>22/10/23</h6>
                      <h6 className="font-success status"> Seen</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="profile online">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/2.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Jony Lynetin</h5>
                      <h6>Hello</h6>
                    </div>
                    <div className="date-status">
                      <h6>30/11/23</h6>
                      <div className="badge badge-primary sm">8</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="profile unreachable">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/3.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Sufiya Elija</h5>
                      <h6>I need job, please help me.</h6>
                    </div>
                    <div className="date-status">
                      <h6>15/06/23</h6>
                      <h6 className="font-dark status"> Sending</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="profile online">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/2.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Jony Lynetin</h5>
                      <h6>Hello</h6>
                    </div>
                    <div className="date-status">
                      <h6>30/11/23</h6>
                      <div className="badge badge-primary sm">8</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="profile offline">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/1.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Josephin water</h5>
                      <h6>
                        Hi, i am josephin. How are you.. ! There are many
                        variations of passages.
                      </h6>
                    </div>
                    <div className="date-status">
                      <h6>22/10/23</h6>
                      <h6 className="font-success status"> Seen</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="profile online">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/2.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Jony Lynetin</h5>
                      <h6>Hello</h6>
                    </div>
                    <div className="date-status">
                      <h6>30/11/23</h6>
                      <div className="badge badge-primary sm">8</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="profile unreachable">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/3.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Sufiya Elija</h5>
                      <h6>I need job, please help me.</h6>
                    </div>
                    <div className="date-status">
                      <h6>15/06/23</h6>
                      <h6 className="font-dark status"> Sending</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="profile busy">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/4.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Pabelo Mukrani</h5>
                      <h6>
                        Hi, i am josephin. How are you.. ! There are many
                        variations of passages.
                      </h6>
                    </div>
                    <div className="date-status">
                      <h6>04/06/23</h6>
                      <h6 className="font-danger status"> Failed</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="profile offline">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/1.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Josephin water</h5>
                      <h6>
                        Hi, i am josephin. How are you.. ! There are many
                        variations of passages.
                      </h6>
                    </div>
                    <div className="date-status">
                      <h6>22/10/23</h6>
                      <h6 className="font-success status"> Seen</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="profile online">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/2.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Jony Lynetin</h5>
                      <h6>Hello</h6>
                    </div>
                    <div className="date-status">
                      <h6>30/11/23</h6>
                      <div className="badge badge-primary sm">8</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="profile unreachable">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/3.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Sufiya Elija</h5>
                      <h6>I need job, please help me.</h6>
                    </div>
                    <div className="date-status">
                      <h6>15/06/23</h6>
                      <h6 className="font-dark status"> Sending</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box">
                    <div className="profile online">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/2.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Jony Lynetin</h5>
                      <h6>Hello</h6>
                    </div>
                    <div className="date-status">
                      <h6>30/11/23</h6>
                      <div className="badge badge-primary sm">8</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="notification-tab dynemic-sidebar custom-scroll"
              id="notification"
            >
              <div className="theme-title">
                <div className="d-flex">
                  <div>
                    <h2>Notification</h2>
                    <h4>List of notification</h4>
                  </div>
                  <div className="flex-grow-1">
                    {" "}
                    <a
                      className="icon-btn btn-outline-light btn-sm close-panel"
                      href="#"
                    >
                      <i data-feather="x" />
                    </a>
                  </div>
                </div>
              </div>
              <ul className="chat-main">
                <li>
                  <div className="chat-box notification">
                    <div className="profile offline">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/1.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <span>Josephin water</span>
                      <h5>Upload New Photos</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                    <div className="date-status">
                      <h6>Now</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box notification">
                    <div className="profile bg-success offline">
                      <span>J</span>
                    </div>
                    <div className="details">
                      <span>Jony Today Birthday</span>
                      <h5>Upload New Photos</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                    <div className="date-status">
                      <h6>1 hour ago</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box notification">
                    <div className="profile offline">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/2.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <span>Sufiya Elija</span>
                      <h5>Comment On your Photo</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                    <div className="date-status">
                      <h6>5 hour ago</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box notification">
                    <div className="profile unreachable">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/3.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <span>Pabelo Mukrani</span>
                      <h5>Invite Your New Friend</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                    <div className="date-status">
                      <h6>6 hour ago</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="chat-box notification">
                    <div className="profile bg-success offline">
                      <span>PM</span>
                    </div>
                    <div className="details">
                      <span>Pabelo Mukrani</span>
                      <h5>Update Profile Picture</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                    <div className="date-status">
                      <h6>6 hour ago</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="settings-tab dynemic-sidebar custom-scroll"
              id="settings"
            >
              <div className="theme-title">
                <div className="d-flex">
                  <div>
                    <h2>Settings</h2>
                    <h4>Change your app setting.</h4>
                  </div>
                  <div className="flex-grow-1">
                    {" "}
                    <a
                      className="icon-btn btn-outline-light btn-sm close-panel"
                      href="#"
                    >
                      <i data-feather="x" />
                    </a>
                  </div>
                </div>
                <div className="profile-box">
                  <div className="d-flex">
                    <div className="profile">
                      <img
                        className="bg-img"
                        src="../assets/images/contact/2.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="details">
                      <h5>Josephin water</h5>
                      <h6>Alabma , USA</h6>
                    </div>
                    <div className="details edit">
                      <form className="form-radious form-sm">
                        <div className="form-group mb-2">
                          <input
                            className="form-control"
                            type="text"
                            name="username"
                            defaultValue="Josephin water"
                          />
                        </div>
                        <div className="form-group mb-0">
                          <input
                            className="form-control"
                            type="text"
                            name="address"
                            defaultValue="Alabma , USA"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="flex-grow-1">
                      <a
                        className="icon-btn btn-outline-light btn-sm pull-right edit-btn"
                        href="#"
                      >
                        {" "}
                        <i data-feather="edit"> </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="setting-block">
                <div className="block">
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h3>Account</h3>
                    </div>
                    <div className="media-right">
                      <a
                        className="icon-btn btn-outline-light btn-sm pull-right previous"
                        href="#"
                      >
                        {" "}
                        <i data-feather="chevron-left"> </i>
                      </a>
                    </div>
                  </div>
                  <div className="theme-according" id="accordion">
                    <div className="card">
                      <div
                        className="card-header"
                        id="headingTwo"
                        role="heading"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        <a>
                          Security
                          <i className="fa fa-angle-down" />
                        </a>
                      </div>
                      <div
                        className="collapse show"
                        id="collapseTwo"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <h5>Show Security notification</h5>
                            </div>
                            <div className="media-right">
                              <input className="js-switch8" type="checkbox" />
                            </div>
                          </div>
                          <p>
                            {" "}
                            <b>Note : </b>turn on this setting to recive
                            notification when a contact's security code has been
                            changes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        id="headingOne"
                        role="heading"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <a>
                          Privacy
                          <i className="fa fa-angle-down" />
                        </a>
                      </div>
                      <div
                        className="collapse"
                        id="collapseOne"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <ul className="privacy">
                            <li>
                              <h5>Last seen</h5>
                              <input
                                className="js-switch10"
                                type="checkbox"
                                defaultChecked=""
                              />
                              <p>
                                {" "}
                                <b>Note : </b>turn on this setting to whether
                                your contact can see last seen or not.
                              </p>
                            </li>
                            <li>
                              <h5>Profile Photo</h5>
                              <input className="js-switch11" type="checkbox" />
                              <p>
                                turn on this setting to whether your contact can
                                see your profile or not.
                              </p>
                            </li>
                            <li>
                              <h5>About</h5>
                              <input className="js-switch12" type="checkbox" />
                              <p>
                                {" "}
                                <b>Note : </b>turn on this setting to whether
                                your contact can see about status or not.
                              </p>
                            </li>
                            <li>
                              <h5>Status</h5>
                              <input className="js-switch14" type="checkbox" />
                              <p>
                                {" "}
                                <b>Note : </b>turn on this setting to whether
                                your contact can see your status or not.{" "}
                              </p>
                            </li>
                            <li>
                              <h5>Read receipts</h5>
                              <input className="js-switch16" type="checkbox" />
                              <p>
                                {" "}
                                <b>Note : </b>If turn off this option you won't
                                be able to see read recipts from contact. read
                                receipts are always sent for group chats.{" "}
                              </p>
                            </li>
                            <li>
                              <h5>Groups</h5>
                              <input
                                className="js-switch13"
                                type="checkbox"
                                defaultChecked=""
                              />
                              <p>
                                {" "}
                                <b>Note : </b>turn on this setting to whether
                                your contact can add in groups or not.
                              </p>
                            </li>
                            <li>
                              <h5>Screen Lock(Require Touch ID)</h5>
                              <input className="js-switch17" type="checkbox" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        id="headingThree"
                        role="heading"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <a>
                          Two Step verification
                          <i className="fa fa-angle-down" />
                        </a>
                      </div>
                      <div
                        className="collapse"
                        id="collapseThree"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <h5>Enable</h5>
                            </div>
                            <div className="media-right">
                              <input className="js-switch9" type="checkbox" />
                            </div>
                          </div>
                          <p>
                            {" "}
                            <b>Note : </b>For added security, enable two-step
                            verifiation, which will require a PIN when
                            registering your phone number with Chitchat again.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        id="headingFour"
                        role="heading"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <a>
                          Change Number
                          <i className="fa fa-angle-down" />
                        </a>
                      </div>
                      <div
                        className="collapse"
                        id="collapseFour"
                        aria-labelledby="headingFour"
                        data-parent="#accordion"
                      >
                        <div className="card-body change-number">
                          <h5>Your old country code &amp; phone number</h5>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text form-control m-0">
                                +
                              </span>
                            </div>
                            <input
                              className="form-control country-code"
                              type="number"
                              placeholder={"01"}
                            />
                            <input
                              className="form-control"
                              type="number"
                              placeholder={1234567895}
                            />
                          </div>
                          <h5>Your new country code &amp; phone number</h5>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text form-control m-0">
                                +
                              </span>
                            </div>
                            <input
                              className="form-control country-code"
                              type="number"
                              placeholder={"01"}
                            />
                            <input
                              className="form-control"
                              type="number"
                              placeholder=""
                            />
                          </div>
                          <div className="text-end">
                            {" "}
                            <a
                              className="btn btn-outline-primary button-effect btn-sm"
                              href="#"
                            >
                              confirm
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        id="headingFive"
                        role="heading"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <a>
                          Request account info
                          <i className="fa fa-angle-down" />
                        </a>
                      </div>
                      <div
                        className="collapse"
                        id="collapseFive"
                        aria-labelledby="headingFive"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <a
                            className="p-0 req-info"
                            id="demo"
                            href="#"
                            onclick='document.getElementById("demo").innerHTML = "Request sent"'
                          >
                            Request Info{" "}
                          </a>
                          <p>
                            {" "}
                            <b>Note : </b>Create a report of your account
                            information and settings, which you can access ot
                            port to another app.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        id="headingSix"
                        role="heading"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        <a>
                          Delete My account
                          <i className="fa fa-angle-down" />
                        </a>
                      </div>
                      <div
                        className="collapse"
                        id="collapseSix"
                        aria-labelledby="headingSix"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <a className="p-0 req-info font-danger" href="#">
                            Delete Account{" "}
                          </a>
                          <p>
                            {" "}
                            <b>Note :</b>Deleting your account will delete your
                            account info, profile photo, all groups &amp; chat
                            history.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <h3>Account</h3>
                    <h4>Update Your Account Details</h4>
                  </div>
                  <div className="media-right">
                    {" "}
                    <a
                      className="icon-btn btn-outline-light btn-sm pull-right next"
                      href="#"
                    >
                      {" "}
                      <i data-feather="chevron-right"> </i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="setting-block">
                <div className="block">
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h3>Chat</h3>
                    </div>
                    <div className="media-right">
                      <a
                        className="icon-btn btn-outline-light btn-sm pull-right previous"
                        href="#"
                      >
                        {" "}
                        <i data-feather="chevron-left"> </i>
                      </a>
                    </div>
                  </div>
                  <ul className="help">
                    <li>
                      <h5>Chat Backup</h5>
                      <ul className="switch-list">
                        <li>
                          <input
                            className="js-switch5"
                            type="checkbox"
                            defaultChecked=""
                          />
                          <h5>Auto Backup</h5>
                        </li>
                        <li>
                          <input className="js-switch6" type="checkbox" />
                          <h5>Include document</h5>
                        </li>
                        <li>
                          <input className="js-switch7" type="checkbox" />
                          <h5>Include Videos</h5>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5>Chat wallpaper</h5>
                      <ul className="wallpaper">
                        <li>
                          <img
                            className="bg-img"
                            src="../assets/images/wallpaper/2.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            className="bg-img"
                            src="../assets/images/wallpaper/1.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            className="bg-img"
                            src="../assets/images/wallpaper/3.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            className="bg-img"
                            src="../assets/images/wallpaper/4.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            className="bg-img"
                            src="../assets/images/wallpaper/5.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            className="bg-img"
                            src="../assets/images/wallpaper/6.jpg"
                            alt="Avatar"
                          />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5>
                        {" "}
                        <a href="#">Archive all chat</a>
                      </h5>
                    </li>
                    <li>
                      <h5>
                        {" "}
                        <a href="#"> Clear all chats</a>
                      </h5>
                    </li>
                    <li>
                      <h5>
                        {" "}
                        <a className="font-danger" href="#">
                          Delete all chats
                        </a>
                      </h5>
                    </li>
                  </ul>
                </div>
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <h3>Chat</h3>
                    <h4>Control Your Chat Backup</h4>
                  </div>
                  <div className="media-right">
                    {" "}
                    <a
                      className="icon-btn btn-outline-light btn-sm pull-right next"
                      href="#"
                    >
                      {" "}
                      <i data-feather="chevron-right"> </i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="setting-block">
                <div className="block">
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h3>Integratin</h3>
                    </div>
                    <div className="media-right">
                      {" "}
                      <a
                        className="icon-btn btn-outline-light btn-sm pull-right previous"
                        href="#"
                      >
                        {" "}
                        <i data-feather="chevron-left"> </i>
                      </a>
                    </div>
                  </div>
                  <ul className="integratin">
                    <li>
                      <div className="d-flex">
                        <div className="media-left">
                          {" "}
                          <a
                            className="fb"
                            href="https://www.facebook.com/login"
                            target="_blank"
                          >
                            <i className="fa fa-facebook" />
                            <h5>Facebook </h5>
                          </a>
                        </div>
                        <div className="media-right">
                          <div className="profile">
                            <img
                              className="bg-img"
                              src="../assets/images/contact/1.jpg"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <div className="media-left">
                          {" "}
                          <a
                            className="insta"
                            href="https://www.instagram.com/accounts/login/?hl=en"
                            target="_blank"
                          >
                            <i className="fa fa-instagram" />
                            <h5>instagram</h5>
                          </a>
                        </div>
                        <div className="media-right">
                          <div className="profile">
                            <img
                              className="bg-img"
                              src="../assets/images/contact/2.jpg"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <div className="media-left">
                          {" "}
                          <a
                            className="twi"
                            href="https://twitter.com/login"
                            target="_blank"
                          >
                            <i className="fa fa-twitter" />
                            <h5>twitter </h5>
                          </a>
                        </div>
                        <div className="media-right">
                          <div className="profile">
                            <img
                              className="bg-img"
                              src="../assets/images/contact/3.jpg"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <div className="media-left">
                          {" "}
                          <a
                            className="ggl"
                            href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                            target="_blank"
                          >
                            <i className="fa fa-google" />
                            <h5>google </h5>
                          </a>
                        </div>
                        <div className="media-right">
                          <div className="profile">
                            <img
                              className="bg-img"
                              src="../assets/images/contact/2.jpg"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <div className="media-left">
                          {" "}
                          <a className="slc" href="#">
                            <i className="fa fa-slack" />
                            <h5>Slack </h5>
                          </a>
                        </div>
                        <div className="media-right">
                          <div className="profile">
                            <a
                              href="https://slack.com/get-started#/"
                              target="_blank"
                            >
                              <i data-feather="plus-circle" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <h3>Integratin</h3>
                    <h4>Sync Your Other Social Account</h4>
                  </div>
                  <div className="media-right">
                    {" "}
                    <a
                      className="icon-btn btn-outline-light btn-sm pull-right next"
                      href="#"
                    >
                      {" "}
                      <i data-feather="chevron-right"> </i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="setting-block">
                <div className="block">
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h3>Help</h3>
                    </div>
                    <div className="media-right">
                      {" "}
                      <a
                        className="icon-btn btn-outline-light btn-sm pull-right previous"
                        href="#"
                      >
                        {" "}
                        <i data-feather="chevron-left"> </i>
                      </a>
                    </div>
                  </div>
                  <ul className="help">
                    <li>
                      <h5>
                        {" "}
                        <a href="#">FAQ</a>
                      </h5>
                    </li>
                    <li>
                      <h5>
                        {" "}
                        <a href="#"> Contact Us</a>
                      </h5>
                    </li>
                    <li>
                      <h5>
                        {" "}
                        <a href="#">Terms and Privacy Policy</a>
                      </h5>
                    </li>
                    <li>
                      <h5>
                        {" "}
                        <a href="#">Licenses</a>
                      </h5>
                    </li>
                    <li>
                      <h5>
                        {" "}
                        <a href="#">2023 - 20 Powered by Pixelstrap</a>
                      </h5>
                    </li>
                  </ul>
                </div>
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <h3>Help</h3>
                    <h4>You are Confusion, Tell me</h4>
                  </div>
                  <div className="media-right">
                    {" "}
                    <a
                      className="icon-btn btn-outline-light btn-sm pull-right next"
                      href="#"
                    >
                      {" "}
                      <i data-feather="chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="status-tab custom-scroll dynemic-sidebar"
              id="status"
            >
              <div className="my-status-box">
                <div className="status-content">
                  <div className="d-flex">
                    <div className="img-status">
                      <div className="user-status two">
                        <img
                          className="img-fluid bg-img"
                          src="../assets/images/avtar/girls.jpg"
                          alt="status"
                        />
                      </div>
                      <div className="upload-img">
                        <input type="file" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3>my status</h3>
                      <p>tap to add status Update</p>
                    </div>
                    <div>
                      <a
                        className="icon-btn btn-outline-light btn-sm close-panel"
                        href="#"
                      >
                        <i data-feather="x" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-status-box">
                <div className="theme-title">
                  <h3>Recent Update</h3>
                </div>
                <div className="status-content">
                  <ul>
                    <li className="user-status">
                      <a
                        className="lightbox img-status status"
                        href="#statusbox"
                      >
                        <img
                          className="img-fluid bg-img"
                          src="../assets/images/status-img/small/sm-1.jpg"
                          alt="status"
                        />
                      </a>
                      <div className="lightbox-target" id="statusbox">
                        <img
                          src="../assets/images/status-img/large/lg-1.jpg"
                          alt="status"
                        />
                        <a className="lightbox-close" href="#" />
                      </div>
                    </li>
                    <li>
                      <h5>Josephin water</h5>
                      <p>today , 8:30am</p>
                    </li>
                  </ul>
                </div>
                <div className="status-content">
                  <ul>
                    <li className="user-status">
                      <a
                        className="lightbox img-status status"
                        href="#statusbox2"
                      >
                        <img
                          className="img-fluid bg-img"
                          src="../assets/images/status-img/small/sm-2.jpg"
                          alt="status"
                        />
                      </a>
                      <div className="lightbox-target" id="statusbox2">
                        <img
                          src="../assets/images/status-img/large/lg-2.jpg"
                          alt="status"
                        />
                        <a className="lightbox-close" href="#" />
                      </div>
                    </li>
                    <li>
                      <h5>Jony Lynetin</h5>
                      <p>today , 10:30am</p>
                    </li>
                  </ul>
                </div>
                <div className="status-content">
                  <ul>
                    <li className="user-status">
                      <a
                        className="lightbox img-status status"
                        href="#statusbox3"
                      >
                        <img
                          className="img-fluid bg-img"
                          src="../assets/images/status-img/small/sm-3.jpg"
                          alt="status"
                        />
                      </a>
                      <div className="lightbox-target" id="statusbox3">
                        <img
                          src="../assets/images/status-img/large/lg-3.jpg"
                          alt="status"
                        />
                        <a className="lightbox-close" href="#" />
                      </div>
                    </li>
                    <li>
                      <h5>Sufiya Elija</h5>
                      <p>today , 11:00am</p>
                    </li>
                  </ul>
                </div>
                <div className="status-content">
                  <ul>
                    <li className="user-status">
                      <a
                        className="lightbox img-status status"
                        href="#statusbox4"
                      >
                        <img
                          className="img-fluid bg-img"
                          src="../assets/images/status-img/small/sm-4.jpg"
                          alt="status"
                        />
                      </a>
                      <div className="lightbox-target" id="statusbox4">
                        <img
                          src="../assets/images/status-img/large/lg-4.jpg"
                          alt="status"
                        />
                        <a className="lightbox-close" href="#" />
                      </div>
                    </li>
                    <li>
                      <h5>Mukrani Pabelo </h5>
                      <p>today , 9:55am</p>
                    </li>
                  </ul>
                </div>
                <div className="status-content">
                  <ul>
                    <li className="user-status">
                      <a
                        className="lightbox img-status status"
                        href="#statusbox5"
                      >
                        <img
                          className="img-fluid bg-img"
                          src="../assets/images/status-img/small/sm-5.jpg"
                          alt="status"
                        />
                      </a>
                      <div className="lightbox-target" id="statusbox5">
                        <img
                          src="../assets/images/status-img/large/lg-5.jpg"
                          alt="status"
                        />
                        <a className="lightbox-close" href="#" />
                      </div>
                    </li>
                    <li>
                      <h5>Pabelo Mukrani</h5>
                      <p>today , 12:05am</p>
                    </li>
                  </ul>
                </div>
                <div className="status-content">
                  <ul>
                    <li className="user-status">
                      <a
                        className="lightbox img-status status"
                        href="#statusbox6"
                      >
                        <img
                          className="img-fluid bg-img"
                          src="../assets/images/status-img/small/sm-3.jpg"
                          alt="status"
                        />
                      </a>
                      <div className="lightbox-target" id="statusbox6">
                        <img
                          src="../assets/images/status-img/large/lg-3.jpg"
                          alt="status"
                        />
                        <a className="lightbox-close" href="#" />
                      </div>
                    </li>
                    <li>
                      <h5>Sufiya Elija</h5>
                      <p>today , 11:00am</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <div className="chitchat-main small-sidebar" id="content">
            <div className="chat-content tabto active">
              <div className="messages custom-scroll active" id="chating">
                <div className="contact-details">
                  <div className="row">
                    <form className="form-inline search-form">
                      <div className="form-group">
                        <input
                          className="form-control-plaintext"
                          type="search"
                          placeholder="Search.."
                        />
                        <div className="icon-close close-search">
                          {" "}
                          <i data-feather="x"> </i>
                        </div>
                      </div>
                    </form>
                    <div className="col-7">
                      <div className="d-flex left">
                        <div className="media-left">
                          <div className="profile online menu-trigger">
                            <img
                              className="bg-img"
                              src="../assets/images/contact/2.jpg"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="mb-0">Josephin water</h5>
                          <div className="badge badge-success">Active</div>
                        </div>
                        <div className="media-right">
                          <ul>
                            <li>
                              <a
                                className="icon-btn btn-light button-effect mute"
                                href="#"
                              >
                                <i className="fa fa-volume-up" />
                              </a>
                            </li>
                            <li>
                              <a
                                className="icon-btn btn-light search-right"
                                href="#"
                              >
                                <i class="bi bi-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                className="icon-btn btn-light button-effect mobile-sidebar"
                                href="#"
                              >
                                <i data-feather="chevron-left" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col px-0">
                      <ul className="calls text-end">
                        <li>
                          <a
                            className="icon-btn btn-light button-effect"
                            href="#"
                            data-tippy-content="Quick Audio Call"
                            data-bs-toggle="modal"
                            data-bs-target="#audiocall"
                          >
                            <i data-feather="phone" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="icon-btn btn-light button-effect"
                            href="#"
                            data-tippy-content="Quick Video Call"
                            data-bs-toggle="modal"
                            data-bs-target="#videocall"
                          >
                            <i data-feather="video" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="icon-btn btn-light button-effect apps-toggle"
                            href="#"
                            data-tippy-content="All Apps"
                          >
                            <i className="ti-layout-grid2" />
                          </a>
                        </li>
                        <li className="chat-friend-toggle">
                          <a
                            className="icon-btn btn-light bg-transparent button-effect outside"
                            href="#"
                            data-tippy-content="Quick action"
                          >
                            <i data-feather="more-vertical" />
                          </a>
                          <div className="chat-frind-content">
                            <ul>
                              <li>
                                <a
                                  className="icon-btn btn-outline-primary button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="user" />
                                </a>
                                <h5>Profile</h5>
                              </li>
                              <li>
                                <a
                                  className="icon-btn btn-outline-success button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="plus-circle" />
                                </a>
                                <h5>Archive</h5>
                              </li>
                              <li>
                                <a
                                  className="icon-btn btn-outline-danger button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="trash-2" />
                                </a>
                                <h5>Delete</h5>
                              </li>
                              <li>
                                <a
                                  className="icon-btn btn-outline-light button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="slash" />
                                </a>
                                <h5>Block</h5>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="contact-chat">
                  <ul className="chatappend">
                    <li className="replies">
                      <div className="d-flex">
                        <div className="profile">
                          <img
                            className="bg-img"
                            src="../assets/images/contact/2.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <div className="contact-name">
                            <h5>Alan josheph</h5>
                            <h6>01:40 AM</h6>
                            <ul className="msg-box">
                              <li className="msg-setting-main">
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <h5>Hi I am Alan,</h5>
                              </li>
                              <li className="msg-setting-main">
                                <h5>
                                  {" "}
                                  your personal assistant to help you 😀{" "}
                                </h5>
                                <div className="badge badge-success sm ms-2">
                                  {" "}
                                  R
                                </div>
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="sent">
                      <div className="d-flex">
                        <div className="profile">
                          <img
                            className="bg-img"
                            src="../assets/images/contact/2.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <div className="contact-name">
                            <h5>Josephin water</h5>
                            <h6>01:35 AM</h6>
                            <ul className="msg-box">
                              <li className="msg-setting-main">
                                <h5>
                                  Hi I am Josephin, can you help me to find best
                                  chat app?.{" "}
                                </h5>
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="msg-setting-main">
                                <h5> it should from elite auther 😇</h5>
                                <div className="badge badge-success sm mx-2">
                                  {" "}
                                  R
                                </div>
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="replies">
                      <div className="d-flex">
                        <div className="profile">
                          <img
                            className="bg-img"
                            src="../assets/images/avtar/1.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <div className="contact-name">
                            <h5>Alan josheph</h5>
                            <h6>01:40 AM</h6>
                            <ul className="msg-box">
                              <li className="msg-setting-main">
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <h5>
                                  Sure, chitchat is best theme for chating
                                  project, you can it check
                                  <a
                                    className="ms-1"
                                    href="https://themeforest.net/user/pixelstrap/portfolio"
                                    target="_blank"
                                  >
                                    here.
                                  </a>
                                </h5>
                              </li>
                              <li className="msg-setting-main">
                                <div className="document">
                                  <i className="fa fa-file-excel-o font-primary" />
                                  <div className="details">
                                    <h5>Document.xlsx</h5>
                                    <h6>25mb Seprate file</h6>
                                  </div>
                                  <div className="icon-btns">
                                    <a
                                      className="icon-btn btn-outline-light"
                                      href="../assets/doc/Document.xlsx"
                                      target="_blank"
                                    >
                                      <i data-feather="download"> </i>
                                    </a>
                                  </div>
                                </div>
                                <div className="badge badge-dark sm ms-2">
                                  {" "}
                                  D
                                </div>
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="sent">
                      <div className="d-flex">
                        <div className="profile">
                          <img
                            className="bg-img"
                            src="../assets/images/contact/2.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <div className="contact-name">
                            <h5>Josephin water</h5>
                            <h6>01:42 AM</h6>
                            <ul className="msg-box">
                              <li className="msg-setting-main">
                                <h5>I think it's best for my project.</h5>
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="msg-setting-main">
                                <ul className="auto-gallery">
                                  <li>
                                    <img
                                      className="bg-img"
                                      src="../assets/images/media/1.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <img
                                      className="bg-img"
                                      src="../assets/images/media/2.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <img
                                      className="bg-img"
                                      src="../assets/images/media/3.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                </ul>
                                <div className="refresh-block">
                                  <div className="badge badge-outline-primary refresh sm">
                                    <i data-feather="rotate-cw" />
                                  </div>
                                  <div className="badge badge-danger sm">F</div>
                                </div>
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="replies">
                      <div className="d-flex">
                        <div className="profile">
                          <img
                            className="bg-img"
                            src="../assets/images/avtar/1.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <div className="contact-name">
                            <h5>Alan josheph</h5>
                            <h6>01:45 AM</h6>
                            <ul className="msg-box">
                              <li className="msg-setting-main">
                                <h5>
                                  If you have any other query then feel free to
                                  ask us.
                                </h5>
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete{" "}
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="messages custom-scroll" id="blank">
                <div className="contact-details">
                  <div className="row">
                    <div className="col">
                      <div className="d-flex left">
                        <div className="media-left me-3">
                          <div className="profile online menu-trigger">
                            <img
                              className="bg-img"
                              src="../assets/images/contact/2.jpg"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5>Josephin water</h5>
                          <h6>Last Seen 5 hours</h6>
                        </div>
                        <div className="media-right">
                          <ul>
                            <li>
                              <a
                                className="icon-btn btn-light button-effect mute"
                                href="#"
                              >
                                <i className="fa fa-volume-up" />
                              </a>
                            </li>
                            <li>
                              <a
                                className="icon-btn btn-light search search-right"
                                href="#"
                              >
                                {" "}
                                <i data-feather="search" />
                              </a>
                              <form className="form-inline search-form">
                                <div className="form-group">
                                  <input
                                    className="form-control-plaintext"
                                    type="search"
                                    placeholder="Search.."
                                  />
                                  <div className="icon-close close-search">
                                    {" "}
                                    <i data-feather="x" />
                                  </div>
                                </div>
                              </form>
                            </li>
                            <li>
                              <a
                                className="icon-btn btn-light button-effect mobile-sidebar"
                                href="#"
                              >
                                <i data-feather="chevron-left" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <ul className="calls text-end">
                        <li>
                          <a
                            className="icon-btn btn-light button-effect"
                            href="#"
                            data-tippy-content="Quick Audio Call"
                            data-bs-toggle="modal"
                            data-bs-target="#audiocall"
                          >
                            <i data-feather="phone" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="icon-btn btn-light button-effect"
                            href="#"
                            data-tippy-content="Quick Video Call"
                            data-bs-toggle="modal"
                            data-bs-target="#videocall"
                          >
                            <i data-feather="video" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="icon-btn btn-light button-effect apps-toggle"
                            href="#"
                            data-tippy-content="All Apps"
                          >
                            <i className="ti-layout-grid2" />
                          </a>
                        </li>
                        <li className="chat-friend-toggle">
                          <a
                            className="icon-btn btn-light bg-transparent button-effect outside"
                            href="#"
                            data-tippy-content="Quick action"
                          >
                            <i data-feather="more-vertical" />
                          </a>
                          <div className="chat-frind-content">
                            <ul>
                              <li>
                                <a
                                  className="icon-btn btn-outline-primary button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="user" />
                                </a>
                                <h5>profile</h5>
                              </li>
                              <li>
                                <a
                                  className="icon-btn btn-outline-success button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="plus-circle" />
                                </a>
                                <h5>archive</h5>
                              </li>
                              <li>
                                <a
                                  className="icon-btn btn-outline-danger button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="trash-2" />
                                </a>
                                <h5>delete</h5>
                              </li>
                              <li>
                                <a
                                  className="icon-btn btn-outline-light button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="slash" />
                                </a>
                                <h5>block</h5>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="contact-chat">
                  <div className="rightchat animat-rate">
                    <div className="bg_circle">
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className="cross" />
                    <div className="cross1" />
                    <div className="cross2" />
                    <div className="dot" />
                    <div className="dot1"> </div>
                  </div>
                </div>
                <div className="call-list-center">
                  <img src="../assets/images/chat.png" alt="" />
                  <div className="animated-bg">
                    <i />
                    <i />
                    <i />
                  </div>
                  <p>Select a chat to read messages</p>
                </div>
              </div>
              <div className="messages custom-scroll" id="group_chat">
                <div className="contact-details">
                  <div className="row">
                    <div className="col">
                      <div className="d-flex left">
                        <div className="media-left me-3">
                          <div className="profile online menu-trigger">
                            <img
                              className="bg-img"
                              src="../assets/images/avtar/teq.jpg"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5>Tech Ninjas</h5>
                          <div className="badge badge-success">Active</div>
                        </div>
                        <div className="media-right">
                          <ul>
                            <li>
                              <a
                                className="icon-btn btn-light button-effect mute"
                                href="#"
                              >
                                <i className="fa fa-volume-up" />
                              </a>
                            </li>
                            <li>
                              <a
                                className="icon-btn btn-light search search-right"
                                href="#"
                              >
                                {" "}
                                <i data-feather="search" />
                              </a>
                              <form className="form-inline search-form">
                                <div className="form-group">
                                  <input
                                    className="form-control-plaintext"
                                    type="search"
                                    placeholder="Search.."
                                  />
                                  <div className="icon-close close-search">
                                    <i data-feather="x" />
                                  </div>
                                </div>
                              </form>
                            </li>
                            <li>
                              <a
                                className="icon-btn btn-light button-effect mobile-sidebar"
                                href="#"
                              >
                                <i data-feather="chevron-left" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <ul className="calls text-end">
                        <li>
                          <a
                            className="icon-btn btn-light button-effect"
                            href="#"
                            data-tippy-content="Start Audio Conference"
                            data-bs-toggle="modal"
                            data-bs-target="#confercall"
                          >
                            <i data-feather="phone" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="icon-btn btn-light button-effect"
                            href="#"
                            data-tippy-content="Start Video Conference"
                            data-bs-toggle="modal"
                            data-bs-target="#confvideocl"
                          >
                            <i data-feather="video" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="icon-btn btn-light button-effect apps-toggle"
                            href="#"
                            data-tippy-content="All Apps"
                          >
                            <i className="ti-layout-grid2" />
                          </a>
                        </li>
                        <li className="chat-friend-toggle">
                          <a
                            className="icon-btn btn-light bg-transparent button-effect outside"
                            href="#"
                            data-tippy-content="Quick action"
                          />
                          <div className="chat-frind-content">
                            <ul>
                              <li>
                                <a
                                  className="icon-btn btn-outline-primary button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="user" />
                                </a>
                                <h5>profile</h5>
                              </li>
                              <li>
                                <a
                                  className="icon-btn btn-outline-success button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="plus-circle" />
                                </a>
                                <h5>archive</h5>
                              </li>
                              <li>
                                <a
                                  className="icon-btn btn-outline-danger button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="trash-2" />
                                </a>
                                <h5>delete</h5>
                              </li>
                              <li>
                                <a
                                  className="icon-btn btn-outline-light button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="slash" />
                                </a>
                                <h5>block</h5>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="contact-chat">
                  <ul className="chatappend">
                    <li className="groupuser">
                      <h4>Jewellery project</h4>
                      <div className="gr-chat-friend-toggle">
                        <a
                          className="icon-btn btn-sm pull-right add-grbtn outside"
                          href="#"
                          data-tippy-content="Add User"
                        >
                          <i class="bi bi-plus-lg"></i>
                        </a>
                        <div className="gr-chat-frind-content">
                          <ul className="chat-main">
                            <li>
                              <div className="chat-box">
                                <div className="d-flex">
                                  <div className="profile offline">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/1.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Josephin water</h5>
                                    <h6>Alabma , USA</h6>
                                  </div>
                                  <div className="flex-grow-1">
                                    <a
                                      className="icon-btn btn-outline-primary btn-sm"
                                      href="#"
                                      data-tippy-content="Add User"
                                    >
                                      <i className="fa fa-plus" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="chat-box">
                                <div className="d-flex">
                                  <div className="profile">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/2.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Josephin water</h5>
                                    <h6>Alabma , USA</h6>
                                  </div>
                                  <div className="flex-grow-1">
                                    <a
                                      className="icon-btn btn-outline-primary btn-sm"
                                      href="#"
                                      data-tippy-content="Add User"
                                    >
                                      <i className="fa fa-plus" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="chat-box">
                                <div className="d-flex">
                                  <div className="profile">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/3.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Josephin water</h5>
                                    <h6>Alabma , USA</h6>
                                  </div>
                                  <div className="flex-grow-1">
                                    <a
                                      className="icon-btn btn-outline-primary btn-sm"
                                      href="#"
                                      data-tippy-content="Add User"
                                    >
                                      <i className="fa fa-plus" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="chat-box">
                                <div className="d-flex">
                                  <div className="profile unreachable">
                                    <img
                                      className="bg-img"
                                      src="../assets/images/contact/4.jpg"
                                      alt="Avatar"
                                    />
                                  </div>
                                  <div className="details">
                                    <h5>Josephin water</h5>
                                    <h6>Alabma , USA</h6>
                                  </div>
                                  <div className="flex-grow-1">
                                    <a
                                      className="icon-btn btn-outline-primary btn-sm"
                                      href="#"
                                      data-tippy-content="Add User"
                                    >
                                      <i className="fa fa-plus" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="gr-profile dot-btn dot-success grow">
                        <img
                          className="bg-img"
                          src="../assets/images/avtar/3.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="gr-profile dot-btn dot-success grow">
                        <img
                          className="bg-img"
                          src="../assets/images/avtar/5.jpg"
                          alt="Avatar"
                        />
                      </div>
                    </li>
                    <li className="sent">
                      <div className="d-flex">
                        <div className="profile">
                          <img
                            className="bg-img"
                            src="../assets/images/contact/2.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <div className="contact-name">
                            <h5>Josephin water</h5>
                            <h6>01:35 AM</h6>
                            <ul className="msg-box">
                              <li className="msg-setting-main">
                                <h5>
                                  Hi I am Josephin, can you help me to find best
                                  chat app?.{" "}
                                </h5>
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="msg-setting-main">
                                <h5> it should from elite auther 😇</h5>
                                <div className="badge badge-success sm mx-2">
                                  {" "}
                                  R
                                </div>
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="replies">
                      <div className="d-flex">
                        <div className="profile">
                          <img
                            className="bg-img"
                            src="../assets/images/avtar/1.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <div className="contact-name">
                            <h5>Alan josheph</h5>
                            <h6>01:40 AM</h6>
                            <ul className="msg-box">
                              <li className="msg-setting-main">
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <h5>
                                  Sure, chitchat is best theme for chating
                                  project, you can it check
                                  <a
                                    className="ms-1"
                                    href="https://themeforest.net/user/pixelstrap/portfolio"
                                    target="_blank"
                                  >
                                    here.
                                  </a>
                                </h5>
                              </li>
                              <li className="msg-setting-main">
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="document">
                                  <i className="fa fa-file-excel-o font-primary" />
                                  <div className="details">
                                    <h5>Document.xlsx</h5>
                                    <h6>25mb Seprate file</h6>
                                  </div>
                                  <div className="icon-btns">
                                    <a
                                      className="icon-btn btn-outline-light"
                                      href="../assets/doc/Document.xlsx"
                                      target="_blank"
                                    >
                                      <i data-feather="download"> </i>
                                    </a>
                                  </div>
                                </div>
                                <div className="badge badge-dark sm ms-2">
                                  {" "}
                                  D
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="sent">
                      <div className="d-flex">
                        <div className="profile">
                          <img
                            className="bg-img"
                            src="../assets/images/contact/2.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <div className="contact-name">
                            <h5>Josephin water</h5>
                            <h6>01:42 AM</h6>
                            <ul className="msg-box">
                              <li className="msg-setting-main">
                                <h5>I think it's best for my project.</h5>
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="msg-setting-main">
                                <ul className="auto-gallery">
                                  <li>
                                    <img
                                      className="bg-img"
                                      src="../assets/images/media/1.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <img
                                      className="bg-img"
                                      src="../assets/images/media/2.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <img
                                      className="bg-img"
                                      src="../assets/images/media/3.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                </ul>
                                <div className="badge badge-danger sm ms-2" />
                                <div className="badge badge-outline-primary refresh sm ms-2">
                                  {" "}
                                  <i data-feather="rotate-cw" />
                                </div>
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="replies">
                      <div className="d-flex">
                        <div className="profile">
                          <img
                            className="bg-img"
                            src="../assets/images/avtar/1.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <div className="contact-name">
                            <h5>Alan josheph</h5>
                            <h6>01:45 AM</h6>
                            <ul className="msg-box">
                              <li className="msg-setting-main">
                                <div className="msg-dropdown-main">
                                  <div className="msg-setting">
                                    <i className="ti-more-alt" />
                                  </div>
                                  <div className="msg-dropdown">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-share" />
                                          forward
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-clone" />
                                          copy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-star-o" />
                                          rating
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-trash" />
                                          delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <h5>
                                  If you have any other query then feel free to
                                  ask us.
                                </h5>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="messages custom-scroll" id="group_blank">
                <div className="contact-details">
                  <div className="row">
                    <div className="col">
                      <div className="d-flex left">
                        <div className="media-left me-3">
                          <div className="profile online menu-trigger">
                            <img
                              className="bg-img"
                              src="../assets/images/avtar/family.jpg"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5>Family Ties</h5>
                          <h6>Last Seen 2 hours</h6>
                        </div>
                        <div className="media-right">
                          <ul>
                            <li>
                              <a
                                className="icon-btn btn-light button-effect mute"
                                href="#"
                              >
                                <i className="fa fa-volume-up" />
                              </a>
                            </li>
                            <li>
                              <a
                                className="icon-btn btn-light search search-right"
                                href="#"
                              >
                                {" "}
                                <i data-feather="search" />
                              </a>
                              <form className="form-inline search-form">
                                <div className="form-group">
                                  <input
                                    className="form-control-plaintext"
                                    type="search"
                                    placeholder="Search.."
                                  />
                                  <div className="icon-close close-search">
                                    {" "}
                                    <i data-feather="x" />
                                  </div>
                                </div>
                              </form>
                            </li>
                            <li>
                              <a
                                className="icon-btn btn-light button-effect mobile-sidebar"
                                href="#"
                              >
                                <i data-feather="chevron-left" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <ul className="calls text-end">
                        <li>
                          <a
                            className="icon-btn btn-light button-effect"
                            href="#"
                            data-tippy-content="Quick Audio Call"
                            data-bs-toggle="modal"
                            data-bs-target="#confercall"
                          >
                            <i data-feather="phone" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="icon-btn btn-light button-effect"
                            href="#"
                            data-tippy-content="Quick Video Call"
                            data-bs-toggle="modal"
                            data-bs-target="#confvideocl"
                          >
                            <i data-feather="video" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="icon-btn btn-light button-effect apps-toggle"
                            href="#"
                            data-tippy-content="All Apps"
                          >
                            <i className="ti-layout-grid2" />
                          </a>
                        </li>
                        <li className="chat-friend-toggle">
                          <a
                            className="icon-btn btn-light bg-transparent button-effect outside"
                            href="#"
                            data-tippy-content="Quick action"
                          >
                            <i data-feather="more-vertical" />
                          </a>
                          <div className="chat-frind-content">
                            <ul>
                              <li>
                                <a
                                  className="icon-btn btn-outline-primary button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="user" />
                                </a>
                                <h5>profile</h5>
                              </li>
                              <li>
                                <a
                                  className="icon-btn btn-outline-success button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="plus-circle" />
                                </a>
                                <h5>archive</h5>
                              </li>
                              <li>
                                <a
                                  className="icon-btn btn-outline-danger button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="trash-2" />
                                </a>
                                <h5>delete</h5>
                              </li>
                              <li>
                                <a
                                  className="icon-btn btn-outline-light button-effect btn-sm"
                                  href="#"
                                >
                                  <i data-feather="slash" />
                                </a>
                                <h5>block</h5>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="contact-chat">
                  <div className="rightchat animat-rate">
                    <div className="bg_circle">
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className="cross" />
                    <div className="cross1" />
                    <div className="cross2" />
                    <div className="dot" />
                    <div className="dot1"> </div>
                  </div>
                </div>
                <div className="call-list-center">
                  <img src="../assets/images/chat.png" alt="" />
                  <div className="animated-bg">
                    <i />
                    <i />
                    <i />
                  </div>
                  <p>Select a chat to read messages</p>
                </div>
              </div>
              <div className="message-input">
                <div className="wrap emojis-main">
                  <a
                    className="icon-btn btn-outline-primary button-effect toggle-sticker outside"
                    href="#"
                  >
                    <svg
                      id="Layer_1"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="2158px"
                      height="2148px"
                      viewBox="0 0 2158 2148"
                      enableBackground="new 0 0 2158 2148"
                      xmlSpace="preserve"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="none"
                        stroke="#000000"
                        strokeWidth={60}
                        strokeMiterlimit={10}
                        d="M699,693                        c0,175.649,0,351.351,0,527c36.996,0,74.004,0,111,0c18.058,0,40.812-2.485,57,1c11.332,0.333,22.668,0.667,34,1                        c7.664,2.148,20.769,14.091,25,20c8.857,12.368,6,41.794,6,62c0,49.329,0,98.672,0,148c175.649,0,351.351,0,527,0                        c0-252.975,0-506.025,0-759C1205.692,693,952.308,693,699,693z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M886,799c59.172-0.765,93.431,25.289,111,66c6.416,14.867,14.612,39.858,9,63                        c-2.391,9.857-5.076,20.138-9,29c-15.794,35.671-47.129,53.674-90,63c-20.979,4.563-42.463-4.543-55-10                        c-42.773-18.617-85.652-77.246-59-141c10.637-25.445,31.024-49,56-60c7.999-2.667,16.001-5.333,24-8                        C877.255,799.833,882.716,801.036,886,799z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1258,799c59.172-0.765,93.431,25.289,111,66c6.416,14.867,14.612,39.858,9,63                        c-2.391,9.857-5.076,20.138-9,29c-15.794,35.671-47.129,53.674-90,63c-20.979,4.563-42.463-4.543-55-10                        c-42.773-18.617-85.652-77.246-59-141c10.637-25.445,31.024-49,56-60c7.999-2.667,16.001-5.333,24-8                        C1249.255,799.833,1254.716,801.036,1258,799z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1345,1184c-0.723,18.71-11.658,29.82-20,41c-18.271,24.489-50.129,37.183-83,47                        c-7.333,1-14.667,2-22,3c-12.013,2.798-33.636,5.15-44,3c-11.332-0.333-22.668-0.667-34-1c-15.332-3-30.668-6-46-9                        c-44.066-14.426-80.944-31.937-110-61c-22.348-22.353-38.992-45.628-37-90c0.667,0,1.333,0,2,0c9.163,5.585,24.723,3.168,36,6                        c26.211,6.583,54.736,7.174,82,14c34.068,8.53,71.961,10.531,106,19c9.999,1.333,20.001,2.667,30,4c26.193,6.703,54.673,7.211,82,14                        C1304.894,1178.445,1325.573,1182.959,1345,1184z"
                      />
                      <polygon
                        fillRule="evenodd"
                        clipRule="evenodd"
                        points="668.333,1248.667 901.667,1482 941.667,1432 922.498,1237.846                         687,1210.667 "
                      />
                    </svg>
                  </a>
                  <div className="dot-btn dot-primary">
                    <a
                      className="icon-btn btn-outline-primary button-effect toggle-emoji"
                      href="#"
                    >
                      <i class="bi bi-emoji-laughing"></i>
                    </a>
                  </div>
                  <div className="contact-poll">
                    <a
                      className="icon-btn btn-outline-primary outside"
                      href="#"
                    >
                      <i className="fa fa-plus" />
                    </a>
                    <div className="contact-poll-content">
                      <ul>
                        <li>
                          <a href="#">
                            <i data-feather="image" />
                            gallery
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i data-feather="camera" />
                            camera
                          </a>
                        </li>
                        <li>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#snippetModal"
                          >
                            <i data-feather="code"> </i>Code Snippest
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i data-feather="user"> </i>contact
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i data-feather="map-pin"> </i>location
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i data-feather="clipboard"> </i>document
                          </a>
                        </li>
                        <li>
                          <a data-bs-toggle="modal" data-bs-target="#pollModal">
                            <i data-feather="bar-chart-2"> </i>poll
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i data-feather="paperclip"> </i>attach
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <input
                    className="setemoj"
                    id="setemoj"
                    type="text"
                    placeholder="Write your message..."
                  />
                  <a
                    className="icon-btn btn-outline-primary button-effect me-2 ms-2"
                    href="#"
                  >
                    <i class="bi bi-mic"></i>
                  </a>
                  <button
                    className="submit icon-btn btn-primary disabled"
                    id="send-msg"
                    disabled="disabled"
                  >
                    <i class="bi bi-send"></i>
                  </button>
                  <div className="emojis-contain">
                    <div className="emojis-sub-contain custom-scroll">
                      <ul>
                        <li>😀</li>
                        <li>😁</li>
                        <li>😂</li>
                        <li>😃</li>
                        <li>😄</li>
                        <li>😅</li>
                        <li>😆</li>
                        <li>😇</li>
                        <li>😈</li>
                        <li>😉</li>
                        <li>😊</li>
                        <li>😋</li>
                        <li>😌</li>
                        <li>😍</li>
                        <li>😎</li>
                        <li>😏</li>
                        <li>😐</li>
                        <li>😑</li>
                        <li>😒</li>
                        <li>😓</li>
                        <li>😔</li>
                        <li>😕</li>
                        <li>😖</li>
                        <li>😗</li>
                        <li>😘</li>
                        <li>😙</li>
                        <li>😚</li>
                        <li>😛</li>
                        <li>😜</li>
                        <li>😝</li>
                        <li>😞</li>
                        <li>😟</li>
                        <li>😠</li>
                        <li>😡</li>
                        <li>😢</li>
                        <li>😣</li>
                        <li>😥</li>
                        <li>😦</li>
                        <li>😧</li>
                        <li>😨</li>
                        <li>😩</li>
                        <li>😪</li>
                        <li>😫</li>
                        <li>😭</li>
                        <li>😮</li>
                        <li>😯</li>
                        <li>😰</li>
                        <li>😱</li>
                        <li>😲</li>
                        <li>😳</li>
                        <li>😴</li>
                        <li>😵</li>
                        <li>😶</li>
                        <li>😷</li>
                        <li>😸</li>
                        <li>😹</li>
                        <li>😺</li>
                        <li>😻</li>
                        <li>😼</li>
                        <li>😽</li>
                        <li>😾</li>
                        <li>🙀 </li>
                        <li>🙃 </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sticker-contain">
                    <div className="sticker-sub-contain custom-scroll">
                      <ul>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/1.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/2.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/3.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/3.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/4.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/5.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/6.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/7.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/8.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/9.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/10.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/11.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/12.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/13.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/14.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/15.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/16.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/17.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/18.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/19.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/20.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/21.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/22.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/23.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/24.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/25.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/26.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/27.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/28.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/29.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/30.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/31.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/32.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/33.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/34.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/35.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/36.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/37.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/38.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/39.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/40.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/41.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/42.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="../assets/images/sticker/43.gif"
                              alt="sticker"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="call-content tabto">
              <a
                className="icon-btn btn-outline-primary button-effect mobile-back mb-3"
                href="#"
              >
                <i className="ti-angle-left"> </i>
              </a>
              <div className="row">
                <div className="col-sm-5">
                  <div className="user-profile mb-3">
                    <div className="user-content">
                      <img
                        className="img-fluid"
                        src="../assets/images/contact/2.jpg"
                        alt="user-img"
                      />
                      <h3>Josephin water</h3>
                      <h4 className="mt-2">+0 1800 76855</h4>
                      <ul>
                        <li>
                          <i className="fa fa-twitch" />
                          massage
                        </li>
                        <li>
                          <i
                            className="fa fa-phone"
                            data-bs-toggle="modal"
                            data-bs-target="#audiocall"
                          />
                          voice call
                        </li>
                        <li>
                          {" "}
                          <i
                            className="fa fa-video-camera"
                            data-bs-toggle="modal"
                            data-bs-target="#videocall"
                          />
                          video call
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="user-profile">
                    <div className="document">
                      <div className="filter-block">
                        <div className="collapse-block open">
                          <h5 className="block-title">
                            Shared Document
                            <label className="badge badge-success sm ms-2">
                              3
                            </label>
                          </h5>
                          <div className="block-content">
                            <ul className="document-list">
                              <li>
                                <i className="ti-folder font-danger" />
                                <h5>Simple_practice_project-zip</h5>
                              </li>
                              <li>
                                <i className="ti-write font-success" />
                                <h5>Word_Map-jpg</h5>
                              </li>
                              <li>
                                <i className="ti-zip font-primary" />
                                <h5>Latest_Design_portfolio.pdf</h5>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-7 position-relative">
                  <div className="call-log-main custom-scroll">
                    <div className="coll-log-group">
                      <div className="log-content-left">
                        <div className="d-flex">
                          <i data-feather="phone-incoming" />
                          <div className="flex-grow-1">
                            <h5>incoming call </h5>
                          </div>
                        </div>
                      </div>
                      <div className="log-content-right">
                        <h6>15 Minutes ago 5:10 &nbsp;(22/10/23)</h6>
                      </div>
                    </div>
                    <div className="coll-log-group">
                      <div className="log-content-left">
                        <div className="d-flex">
                          <i data-feather="phone-incoming" />
                          <div className="flex-grow-1">
                            <h5>outgoing call</h5>
                          </div>
                        </div>
                      </div>
                      <div className="log-content-right">
                        <h6>30 Minutes ago 10:30 &nbsp;(12/09/23)</h6>
                      </div>
                    </div>
                    <div className="coll-log-group">
                      <div className="log-content-left">
                        <div className="d-flex">
                          <i data-feather="phone-missed" />
                          <div className="flex-grow-1">
                            <h5>missed call</h5>
                          </div>
                        </div>
                      </div>
                      <div className="log-content-right">
                        <h6>1 Minutes ago 8:30 &nbsp; (28/08/23)</h6>
                      </div>
                    </div>
                    <div className="coll-log-group">
                      <div className="log-content-left">
                        <div className="d-flex">
                          <i data-feather="phone-missed" />
                          <div className="flex-grow-1">
                            <h5>missed call</h5>
                          </div>
                        </div>
                      </div>
                      <div className="log-content-right">
                        <h6>10 Minutes ago 9:10 &nbsp; (18/01/23)</h6>
                      </div>
                    </div>
                    <div className="coll-log-group">
                      <div className="log-content-left">
                        <div className="d-flex">
                          <i data-feather="phone-missed" />
                          <div className="flex-grow-1">
                            <h5>missed call</h5>
                          </div>
                        </div>
                      </div>
                      <div className="log-content-right">
                        <h6>35 Minutes ago 9:10 &nbsp; (17/01/23)</h6>
                      </div>
                    </div>
                    <div className="coll-log-group">
                      <div className="log-content-left">
                        <div className="d-flex">
                          <i data-feather="phone-missed" />
                          <div className="flex-grow-1">
                            <h5>missed call</h5>
                          </div>
                        </div>
                      </div>
                      <div className="log-content-right">
                        <h6>80 Minutes ago 12:05 &nbsp; (17/01/23)</h6>
                      </div>
                    </div>
                    <div className="coll-log-group">
                      <div className="log-content-left">
                        <div className="d-flex">
                          <i data-feather="phone-incoming" />
                          <div className="flex-grow-1">
                            <h5>incoming call</h5>
                          </div>
                        </div>
                      </div>
                      <div className="log-content-right">
                        <h6>15 Minutes ago 15:20 &nbsp; (28/02/20)</h6>
                      </div>
                    </div>
                    <div className="coll-log-group">
                      <div className="log-content-left">
                        <div className="d-flex">
                          <i data-feather="phone-incoming" />
                          <div className="flex-grow-1">
                            <h5>incoming call</h5>
                          </div>
                        </div>
                      </div>
                      <div className="log-content-right">
                        <h6>10 Minutes ago 20m 26s &nbsp; 10/3/20</h6>
                      </div>
                    </div>
                  </div>
                  <div className="call-log-clear">
                    {" "}
                    <i className="ti-trash font-danger" />
                    <span className="font-danger">Delete call log</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-content tabto">
              <div className="contact-sub-content">
                <a
                  className="icon-btn btn-outline-primary button-effect mobile-back mb-3"
                  href="#"
                >
                  <i className="ti-angle-left" />
                </a>
                <div className="row">
                  <div className="col-sm-5">
                    <div className="user-profile">
                      <div className="user-content">
                        <img
                          className="img-fluid bg-icon"
                          src="../assets/images/contact/2.jpg"
                          alt="user-img"
                        />
                        <h3>Josephin water</h3>
                        <ul>
                          <li>
                            <i className="fa fa-twitch"> </i>massage
                          </li>
                          <li>
                            <i className="fa fa-phone"> </i>voice call
                          </li>
                          <li>
                            {" "}
                            <i className="fa fa-video-camera"> </i>video call
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="personal-info-group">
                      <div className="social-info-group">
                        <ul className="integratin mt-0">
                          <li>
                            <div className="d-flex">
                              <div className="media-left">
                                <a
                                  className="fb"
                                  href="https://www.facebook.com/login"
                                  target="_blank"
                                >
                                  <i className="fa fa-facebook" />
                                  <h5>Facebook </h5>
                                </a>
                              </div>
                              <div className="media-right">
                                <div className="profile bg-size">
                                  <img
                                    className="bg-img"
                                    src="../assets/images/contact/1.jpg"
                                    alt="Avatar"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex">
                              <div className="media-left">
                                <a
                                  className="twi"
                                  href="https://twitter.com/login"
                                  target="_blank"
                                >
                                  <i className="fa fa-twitter" />
                                  <h5>twitter </h5>
                                </a>
                              </div>
                              <div className="media-right">
                                <div className="profile bg-size">
                                  <img
                                    className="bg-img"
                                    src="../assets/images/contact/3.jpg"
                                    alt="Avatar"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex">
                              <div className="media-left">
                                <a
                                  className="ggl"
                                  href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                                  target="_blank"
                                >
                                  <i className="fa fa-google" />
                                  <h5>google </h5>
                                </a>
                              </div>
                              <div className="media-right">
                                <div className="profile bg-size">
                                  <img
                                    className="bg-img"
                                    src="../assets/images/contact/2.jpg"
                                    alt="Avatar"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="personal-info-group">
                      <h3>contact info</h3>
                      <ul className="basic-info">
                        <li>
                          <h5>name</h5>
                          <h5 className="details">Nick</h5>
                        </li>
                        <li>
                          <h5>gender</h5>
                          <h5 className="details">male</h5>
                        </li>
                        <li>
                          <h5>Birthday</h5>
                          <h5 className="details">9 april 1994</h5>
                        </li>
                        <li>
                          <h5>Favorite Book</h5>
                          <h5 className="details">Perfect Chemistry</h5>
                        </li>
                        <li>
                          <h5>Personality</h5>
                          <h5 className="details">Cool</h5>
                        </li>
                        <li>
                          <h5>City</h5>
                          <h5 className="details">Moline Acres</h5>
                        </li>
                        <li>
                          <h5>mobile no</h5>
                          <h5 className="details">+0 1800 76855</h5>
                        </li>
                        <li>
                          <h5>email</h5>
                          <h5 className="details">pixelstrap@test.com</h5>
                        </li>
                        <li>
                          <h5>Website</h5>
                          <h5 className="details">www.test.com</h5>
                        </li>
                        <li>
                          <h5 className="m-0">Interest</h5>
                          <h5 className="details">Photography</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="chitchat-right-sidebar" id="slide-menu">
            <div className="custom-scroll right-sidebar">
              <div className="contact-profile">
                <div className="theme-title">
                  <div className="d-flex">
                    <div>
                      <h2>Profile</h2>
                      <h4>Personal Information</h4>
                    </div>
                    <div className="flex-grow-1">
                      {" "}
                      <a
                        className="icon-btn btn-outline-light btn-sm close-profile ms-3"
                        href="#"
                      >
                        {" "}
                        <i data-feather="x"> </i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <div className="contact-top">
                    <img
                      className="bg-img"
                      src="../assets/images/avtar/2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <h3>Josephin water</h3>
                    <h6>Add Description</h6>
                  </div>
                  <ul className="medialogo">
                    <li>
                      <a
                        className="icon-btn btn-danger button-effect"
                        href="https://www.google.com/"
                      >
                        <i className="fa fa-google" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-primary button-effect"
                        href="https://twitter.com/"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-facebook button-effect"
                        href="https://www.facebook.com/"
                      >
                        <i className="fa fa-facebook-f" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="document">
                <div className="filter-block">
                  <div className="collapse-block open">
                    <h5 className="block-title">
                      Shared Document
                      <label className="badge badge-success sm ms-2">3</label>
                    </h5>
                    <div className="block-content">
                      <ul className="document-list">
                        <li>
                          <i className="ti-folder font-danger" />
                          <h5>Simple_practice_project-zip</h5>
                        </li>
                        <li>
                          <i className="ti-write font-success" />
                          <h5>Word_Map-jpg</h5>
                        </li>
                        <li>
                          <i className="ti-zip font-primary" />
                          <h5>Latest_Design_portfolio.pdf</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-gallery portfolio-section grid-portfolio">
                <div className="collapse-block open">
                  <h5 className="block-title">
                    Shared Media
                    <label className="badge badge-primary sm ms-2">2</label>
                  </h5>
                  <div className="block-content">
                    <div className="row share-media zoom-gallery">
                      <div className="col-12">
                        <h6 className="mb-2">22/03/2023</h6>
                      </div>
                      <div className="col-4 isotopeSelector filter">
                        <div className="media-big">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/1.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/1.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="media-small isotopeSelector filter">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/2.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/2.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="media-small isotopeSelector filter">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/3.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/3.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="media-small isotopeSelector filter">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/4.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/4.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="media-small isotopeSelector filter fashion">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/5.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/5.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <h6 className="mb-2 mt-2">20/04/2023</h6>
                      </div>
                      <div className="col-4">
                        <div className="media-small isotopeSelector filter">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/2.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/2.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="media-small isotopeSelector filter">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/3.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/3.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="media-small isotopeSelector filter">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/4.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/4.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status">
                <div className="collapse-block open">
                  <h5 className="block-title">
                    Starred Messages
                    <label className="badge badge-outline-dark sm ms-2">
                      2
                    </label>
                  </h5>
                  <div className="block-content">
                    <div className="contact-chat p-0 m-0">
                      <ul className="str-msg">
                        <li>
                          <div className="d-flex">
                            <div className="profile me-4">
                              <img
                                className="bg-img"
                                src="../assets/images/contact/2.jpg"
                                alt="Avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <div className="contact-name">
                                <h5>Alan josheph</h5>
                                <h6>01:35 AM</h6>
                                <ul className="msg-box">
                                  <li>
                                    <h5>Hi I am Alan,</h5>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex">
                            <div className="profile me-4">
                              <img
                                className="bg-img"
                                src="../assets/images/contact/3.jpg"
                                alt="Avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <div className="contact-name">
                                <h5>Josephin water</h5>
                                <h6>01:35 AM</h6>
                                <ul className="msg-box">
                                  <li>
                                    <h5>
                                      Can you help me to find best chat app?.
                                    </h5>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status">
                <div className="collapse-block open">
                  <h5 className="block-title">
                    Common groups
                    <label className="badge badge-outline-dark sm ms-2">
                      3
                    </label>
                  </h5>
                  <div className="block-content">
                    <ul className="group-main">
                      <li>
                        <div className="group-box">
                          <div className="profile">
                            <img
                              className="bg-img"
                              src="../assets/images/avtar/teq.jpg"
                              alt="Avatar"
                            />
                          </div>
                          <div className="details">
                            <h5>Tech Ninjas</h5>
                            <h6>johan, deo, Sufiya Elija, Pabelo &amp; you</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="group-box">
                          <div className="profile">
                            <img
                              className="bg-img"
                              src="../assets/images/avtar/family.jpg"
                              alt="Avatar"
                            />
                          </div>
                          <div className="details">
                            <h5>Family Ties</h5>
                            <h6>Mukrani, deo &amp; you</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="status other">
                <h5 className="block-title p-b-25">Contact info</h5>
                <ul>
                  <li>
                    <h5>
                      {" "}
                      <a href="#">
                        {" "}
                        <i data-feather="smartphone" />
                        +12 3456789587
                      </a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="https://themeforest.net/user/pixelstrap/portfolio">
                        {" "}
                        <i data-feather="crosshair" />
                        https://pixelstrap
                      </a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="#">
                        {" "}
                        <i data-feather="map-pin" />
                        1766 Fidler Drive Texas, 78238.
                      </a>
                    </h5>
                  </li>
                </ul>
              </div>
              <div className="status">
                <ul>
                  <li>
                    <input className="js-switch" type="checkbox" />
                    <h5>Block</h5>
                  </li>
                  <li>
                    <input className="js-switch1" type="checkbox" />
                    <h5>Mute</h5>
                  </li>
                  <li>
                    <input
                      className="js-switch2"
                      type="checkbox"
                      defaultChecked=""
                    />
                    <h5>Get Notification</h5>
                  </li>
                </ul>
              </div>
              <div className="status other">
                <ul>
                  <li>
                    <h5>
                      {" "}
                      <a href="#">
                        {" "}
                        <i data-feather="share-2" />
                        share Contact
                      </a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="#">
                        {" "}
                        <i data-feather="trash-2" />
                        Clear Chat
                      </a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="#">
                        {" "}
                        <i data-feather="external-link" />
                        Export Chat
                      </a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="#">
                        {" "}
                        <i data-feather="alert-circle" />
                        Report Contact{" "}
                      </a>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <aside className="app-sidebar active">
            <div className="apps">
              <ul className="apps-ul">
                <li id="todo">
                  <div className="todo-main">
                    <div className="theme-title">
                      <div className="d-flex">
                        <div>
                          <h2>Todo</h2>
                          <h4>to create your task</h4>
                        </div>
                        <div className="flex-grow-1">
                          <a
                            className="icon-btn btn-sm btn-outline-light close-apps"
                            href="#"
                          >
                            <i data-feather="x" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="todo-name">
                      <form className="default-form">
                        <select
                          className="custom-scroll"
                          name="support[support_type]"
                        >
                          <option>All Conversations</option>
                          <option>Josephin water</option>
                          <option>Jony Lynetin</option>
                          <option>Sufiya Elija</option>
                          <option>Mukrani Pabelo</option>
                          <option>Jhon Deo</option>
                        </select>
                      </form>
                    </div>
                    <div className="todo-tab theme-tab custom-scroll">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a
                            className="nav-link button-effect active show"
                            data-bs-toggle="pill"
                            href="#todo1"
                          >
                            All
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link button-effect"
                            data-bs-toggle="pill"
                            href="#todo2"
                          >
                            My to-dos
                          </a>
                        </li>
                        <li>
                          <a
                            className="icon-btn btn-light button-effect btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#todoModal"
                          >
                            <i data-feather="plus"> </i>
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane active show" id="todo1">
                          <div className="tab-card text-start">
                            <div className="todo-task">
                              <h4>Designer Discussion </h4>
                              <div className="todo-main-content">
                                <div className="input-text">
                                  <input
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                  />
                                  <input
                                    id="user_input12"
                                    type="text"
                                    name="todo-text"
                                    placeholder="Give me review on our side"
                                  />
                                </div>
                                <div className="drop-picker">
                                  <div
                                    className="dropdown currency"
                                    tabIndex={1}
                                  >
                                    <div className="select">
                                      <span>Assign To</span>
                                    </div>
                                    <input type="hidden" name="currency" />
                                    <ul className="dropdown-menu">
                                      <li className="dropdown-divider">
                                        <div className="fa fa-user" />
                                        <h5 className="text-muted">
                                          Assign To
                                        </h5>
                                      </li>
                                      <li>
                                        <a href="#">Josephin john</a>
                                      </li>
                                      <li>
                                        <a href="#">Lynetin john</a>
                                      </li>
                                      <li>
                                        <a href="#">Sufiya john</a>
                                      </li>
                                      <li>
                                        <a href="#">Jhon john</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <input
                                    className="datepicker-here form-control digits"
                                    type="url"
                                    data-language="en"
                                    placeholder="Due date"
                                  />
                                </div>
                              </div>
                              <div className="todo-list">
                                <div className="element" id="div_3">
                                  <span className="add add-to-do">
                                    Add-To-Do
                                  </span>
                                </div>
                              </div>
                              <div className="todo-main-content">
                                <div className="input-text">
                                  <input
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                  />
                                  <input
                                    id="user_input13"
                                    type="text"
                                    name="todo-text"
                                    placeholder="Redesign Your Design"
                                  />
                                </div>
                                <div className="drop-picker">
                                  <div
                                    className="dropdown currency"
                                    tabIndex={1}
                                  >
                                    <div className="select">
                                      <span>Assign To</span>
                                    </div>
                                    <input type="hidden" name="currency" />
                                    <ul className="dropdown-menu">
                                      <li className="dropdown-divider">
                                        <div className="fa fa-user" />
                                        <h5 className="text-muted">
                                          Assign To
                                        </h5>
                                      </li>
                                      <li>
                                        <a href="#">Josephin john</a>
                                      </li>
                                      <li>
                                        <a href="#">Lynetin john</a>
                                      </li>
                                      <li>
                                        <a href="#">Sufiya john</a>
                                      </li>
                                      <li>
                                        <a href="#">Jhon john</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <input
                                    className="datepicker-here form-control digits"
                                    type="url"
                                    data-language="en"
                                    placeholder="Due date"
                                  />
                                </div>
                              </div>
                              <div className="todo-list">
                                <div className="element" id="div_2">
                                  <span className="add add-to-do">
                                    Add-To-Do
                                  </span>
                                </div>
                              </div>
                              <div className="todo-main-content">
                                <div className="input-text">
                                  <input
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                  />
                                  <input
                                    id="user_input14"
                                    type="text"
                                    name="todo-text"
                                    placeholder=" Complete Project report"
                                  />
                                </div>
                                <div className="drop-picker">
                                  <div
                                    className="dropdown currency"
                                    tabIndex={1}
                                  >
                                    <div className="select">
                                      <span>Assign To</span>
                                    </div>
                                    <input type="hidden" name="currency" />
                                    <ul className="dropdown-menu">
                                      <li className="dropdown-divider">
                                        <div className="fa fa-user" />
                                        <h5 className="text-muted">
                                          Assign To
                                        </h5>
                                      </li>
                                      <li>
                                        <a href="#">Josephin john</a>
                                      </li>
                                      <li>
                                        <a href="#">Lynetin john</a>
                                      </li>
                                      <li>
                                        <a href="#">Sufiya john</a>
                                      </li>
                                      <li>
                                        <a href="#">Jhon john</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <input
                                    className="datepicker-here form-control digits"
                                    type="url"
                                    data-language="en"
                                    placeholder="Due date"
                                  />
                                </div>
                              </div>
                              <div className="todo-list">
                                <div className="element" id="div_1">
                                  <span className="add add-to-do">
                                    Add-To-Do
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="todo2">
                          <div className="converstaion-docs tab-card">
                            <i className="fa fa-sticky-note-o" />
                            <h5 className="mb-3">No Open To-Dos Here </h5>
                            <a
                              className="btn btn-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#createtodoModal"
                            >
                              Create A To-Do
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="files">
                  <div className="theme-title">
                    <div className="d-flex">
                      <div>
                        <h2>Files</h2>
                        <h4>Shared Media</h4>
                      </div>
                      <div className="flex-grow-1">
                        <a
                          className="icon-btn btn-sm btn-outline-light close-apps"
                          href="#"
                        >
                          <i data-feather="x"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="theme-tab">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link button-effect active"
                          data-bs-toggle="pill"
                          href="#tab1"
                        >
                          Media
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link button-effect"
                          data-bs-toggle="pill"
                          href="#tab2"
                        >
                          Link
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link button-effect"
                          data-bs-toggle="pill"
                          href="#tab3"
                        >
                          Docs
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="file-tab">
                    <div className="tab-content custom-scroll">
                      <div className="tab-pane active" id="tab1">
                        <div className="media-gallery portfolio-section grid-portfolio">
                          <div className="collapse-block open">
                            <h5 className="block-title">
                              12/12/2023
                              <label className="badge badge-primary sm ms-2">
                                8
                              </label>
                            </h5>
                            <div className="block-content">
                              <div className="row share-media zoom-gallery">
                                <div className="col-4 isotopeSelector filter">
                                  <div className="media-big">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/1.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/1.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/2.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/2.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/3.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/3.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/4.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/4.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter fashion">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/5.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/5.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h5 className="block-title">
                              10/01/2024
                              <label className="badge badge-primary sm ms-2">
                                5
                              </label>
                            </h5>
                            <div className="block-content">
                              <div className="row share-media zoom-gallery">
                                <div className="col-4 isotopeSelector filter">
                                  <div className="media-big">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/1.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/1.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/2.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/2.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/3.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/3.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/4.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/4.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter fashion">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/5.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/5.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h5 className="block-title">
                              30/04/2024
                              <label className="badge badge-primary sm ms-2">
                                2
                              </label>
                            </h5>
                            <div className="block-content">
                              <div className="row share-media zoom-gallery">
                                <div className="col-4 isotopeSelector filter">
                                  <div className="media-big">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/1.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/1.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/2.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/2.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/3.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/3.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/4.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/4.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter fashion">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/5.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/5.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/2.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/2.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/3.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/3.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/4.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/4.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h5 className="block-title">
                              10/01/2024
                              <label className="badge badge-primary sm ms-2">
                                2
                              </label>
                            </h5>
                            <div className="block-content">
                              <div className="row share-media zoom-gallery mb-5">
                                <div className="col-4 isotopeSelector filter">
                                  <div className="media-big">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/1.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/1.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/2.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/2.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/3.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/3.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/4.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/4.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter fashion">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/5.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/5.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/2.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/2.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/3.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/3.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/4.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/4.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab2">
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Jquery Template</h5>
                              <h6>12:05 PM Today </h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/endless-react-admin-template/25365098">
                            https://themeforest.net/item/endless-react-admin-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/12.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>React Template</h5>
                              <h6 className="mt-0">
                                Functionality integration project.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Multikart Template</h5>
                              <h6>05:12 AM Today</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/multikart-responsive-vuejs-ecommerce-template/25174665">
                            https://themeforest.net/item/multikart-responsive-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/3.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Multipurpose Vuejs.</h5>
                              <h6 className="mt-0">
                                Template is a multi-use Vue template.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Unice-Multipurpose</h5>
                              <h6>03:26 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/unice-angular-multipurpose-template/24776272">
                            https://themeforest.net/item/unice-angular-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/8.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Angular Template.</h5>
                              <h6 className="mt-0">
                                Unice is a Perfect Respon.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Endless-Angular</h5>
                              <h6>02:26 AM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/endless-angular-admin-template/23884779">
                            https://themeforest.net/item/endless-angular-admin-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/12.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Endless Document.</h5>
                              <h6 className="mt-0">
                                Help you understand angular.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Bigdeal-eCommerce</h5>
                              <h6>04:00 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/bigdeal-ecommerce-htms-template/24809149">
                            https://themeforest.net/item/bigdeal-ecommerce-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/9.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>HTML Template.</h5>
                              <h6 className="mt-0">eCommerce HTML Template.</h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Multikart-Responsive.</h5>
                              <h6>11:05 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773">
                            https://themeforest.net/item/multikart-responsive-react-ecommerce
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/3.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Multipurp eComme.</h5>
                              <h6 className="mt-0">
                                Well with multi-purpose websites.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Creative - Responsive</h5>
                              <h6>12:26 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/creative-responsive-admin-template/24978419">
                            https://themeforest.net/item/creative-responsive
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/11.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Dashboard Templa.</h5>
                              <h6 className="mt-0">
                                Creative Admin is a full featured.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">eComme Template</h5>
                              <h6>12:26 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/multikart-responsive-angular-ecommerce-template/22905358">
                            https://themeforest.net/item/multikart-responsive-angular
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/3.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Responsive Ang.</h5>
                              <h6 className="mt-0">
                                Multikart – Multipurpose.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <div className="d-flex" />
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Multikart Templat.</h5>
                              <h6>12:26 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/multikart-responsive-ecommerce-htms-template/22809967">
                            https://themeforest.net/item/multikart-responsive-ecommerce
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/10.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Multi Responsive.</h5>
                              <h6 className="mt-0">Ecommerce HTML Theme.</h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <div className="d-flex" />
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">BigBoost Template</h5>
                              <h6>04:26 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/bigboost-ecommerce-htms-template/24168053">
                            https://themeforest.net/item/bigboost-ecommerce-htms-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/7.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Fully Responsive.</h5>
                              <h6 className="mt-0">
                                Multiple Header Varations.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">App Landing </h5>
                              <h6>10:05 PM 20/05/2023</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/unice-app-landing-corporate-and-portfolio-multipurpose-template/24581311">
                            https://themeforest.net/item/unice-app-landing-corporate-and-portfolio-multipurpose-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/4.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Multi-Purpos theme.</h5>
                              <h6 className="mt-0">
                                Unice is a Perfect Responsive.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Reno - Tools Store</h5>
                              <h6>12:26 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/reno-multipurpose-htms-template/24141678">
                            https://themeforest.net/item/reno-multipurpose-htms-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/6.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Reno Template is a busines.</h5>
                              <h6 className="mt-0">
                                Android Mobile or tablets.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group mb-5">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Shop - Mart</h5>
                              <h6>12:26 PM 03/11/2023</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/shopmart-multipurpose-shopify-theme/24040917?s_rank=12">
                            https://themeforest.net/item/shopmart-multipurpose-shopify-theme
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/5.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Shop Mart Landing Page.</h5>
                              <h6 className="mt-0">
                                This is App Landing Template.
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab3">
                        <ul className="chat-main">
                          <li>
                            <div className="chat-box">
                              <div className="d-flex">
                                <div className="profile">
                                  <a
                                    className="icon-btn btn-outline-danger btn-xl pull-right rouded15"
                                    href="#"
                                  >
                                    <i className="fa fa-file-code-o" />
                                  </a>
                                </div>
                                <div className="details">
                                  <h5>messenger.html</h5>
                                  <h6>2, octomber 2023</h6>
                                </div>
                                <div className="flex-grow-1">
                                  <a
                                    className="icon-btn btn-outline-light btn-sm pull-right"
                                    href="../assets/doc/messenger.html"
                                    target="_blank"
                                  >
                                    <i data-feather="download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="chat-box">
                              <div className="d-flex">
                                <div className="profile">
                                  <a
                                    className="icon-btn btn-outline-success btn-xl pull-right rouded15"
                                    href="#"
                                  >
                                    <i className="fa fa-file-video-o" />
                                  </a>
                                </div>
                                <div className="details">
                                  <h5>chapter1.MP4</h5>
                                  <h6>3, Octomber 2023</h6>
                                </div>
                                <div className="flex-grow-1">
                                  <a
                                    className="icon-btn btn-outline-light btn-sm pull-right"
                                    href="../assets/doc/chapter1.MP4"
                                    target="_blank"
                                  >
                                    <i data-feather="download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="chat-box">
                              <div className="d-flex">
                                <div className="profile">
                                  <a
                                    className="icon-btn btn-outline-primary btn-xl pull-right rouded15"
                                    href="#"
                                  >
                                    <i className="fa fa-file-word-o" />
                                  </a>
                                </div>
                                <div className="details">
                                  <h5>salary.xlsx</h5>
                                  <h6>5, Octomber 2023</h6>
                                </div>
                                <div className="flex-grow-1">
                                  <a
                                    className="icon-btn btn-outline-light btn-sm pull-right"
                                    href="../assets/doc/salary.xlsx"
                                    target="_blank"
                                  >
                                    <i data-feather="download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="chat-box">
                              <div className="d-flex">
                                <div className="profile">
                                  <a
                                    className="icon-btn btn-outline-warning btn-xl pull-right rouded15"
                                    href="#"
                                  >
                                    <i className="fa fa-file-pdf-o" />
                                  </a>
                                </div>
                                <div className="details">
                                  <h5>document.pdf</h5>
                                  <h6>7, Octomber 2023</h6>
                                </div>
                                <div className="flex-grow-1">
                                  <a
                                    className="icon-btn btn-outline-light btn-sm pull-right"
                                    href="../assets/doc/document.pdf"
                                    target="_blank"
                                  >
                                    <i data-feather="download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="chat-box">
                              <div className="d-flex">
                                <div className="profile">
                                  <a
                                    className="icon-btn btn-outline-danger btn-xl pull-right rouded15"
                                    href="#"
                                  >
                                    <i className="fa fa-file-text-o" />
                                  </a>
                                </div>
                                <div className="details">
                                  <h5>details.txt</h5>
                                  <h6>20, Octomber 2023</h6>
                                </div>
                                <div className="flex-grow-1">
                                  <a
                                    className="icon-btn btn-outline-light btn-sm pull-right"
                                    href="../assets/doc/details.txt"
                                    target="_blank"
                                  >
                                    <i data-feather="download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="chat-box">
                              <div className="d-flex">
                                <div className="profile">
                                  <a
                                    className="icon-btn btn-outline-success btn-xl pull-right rouded15"
                                    href="#"
                                  >
                                    <i className="fa fa-file-code-o" />
                                  </a>
                                </div>
                                <div className="details">
                                  <h5>messenger.html</h5>
                                  <h6>2, octomber 2023</h6>
                                </div>
                                <div className="flex-grow-1">
                                  <a
                                    className="icon-btn btn-outline-light btn-sm pull-right"
                                    href="../assets/doc/messenger.html"
                                    target="_blank"
                                  >
                                    <i data-feather="download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="notes">
                  <div className="notes-main">
                    <div className="theme-title">
                      <div className="d-flex">
                        <div>
                          <h2>Notes</h2>
                          <h4>Notes List</h4>
                        </div>
                        <div className="flex-grow-1">
                          <a
                            className="icon-btn btn-sm btn-outline-light close-apps"
                            href="#"
                          >
                            <i data-feather="x" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <form className="default-form">
                      <div className="form-group notes-content">
                        <select>
                          <option>Contact Or Channel</option>
                          <option>Weekdays (Mon-Fri)</option>
                          <option>Daily</option>
                          <option>Weekly (Custom)</option>
                        </select>
                        <ul>
                          <li>
                            <a
                              className="icon-btn btn-light button-effect btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#notesModal"
                            >
                              <i data-feather="plus" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </form>
                    <div className="notes-list">
                      <h6 className="mb-2 text-muted">
                        Joshephin Water.10 Jan
                      </h6>
                      <div className="d-flex">
                        <img
                          className="img-fluid me-3"
                          src="../assets/images/file_icons/5.png"
                          alt="media-img"
                        />
                        <div className="flex-grow-1">
                          <h5 className="mt-0">Joshephin Water</h5>
                        </div>
                      </div>
                      <h5 className="mb-2">Imporatnt project link</h5>
                      <h6 className="mb-2">
                        Please start testing task of your projects.
                      </h6>
                      <div className="forward-main">
                        <a className="line fa fa-mail-forward" href="#">
                          Forward{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="reminder">
                  <div className="reminder-main">
                    <div className="theme-title">
                      <div className="d-flex">
                        <div>
                          <h2>Reminders</h2>
                          <h4>Set reminders</h4>
                        </div>
                        <div className="flex-grow-1">
                          <a
                            className="icon-btn btn-sm btn-outline-light close-apps"
                            href="#"
                          >
                            <i data-feather="x" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="reminder-content tab-card">
                      <i className="ti-alarm-clock" />
                      <p>
                        Never forget important tasks. Set personal and group
                        reminders.
                      </p>
                      <a
                        className="setreminder btn btn-primary button-effect btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#setReminder"
                      >
                        set reminder
                      </a>
                    </div>
                    <div className="reminder-list-disp">
                      <h5>Themeforest Discusssion</h5>
                      <h6>Project Discussion</h6>
                      <span>11:22 PM | 15 FAB</span>
                      <ul className="reminder-disp">
                        <li className="reminder-list-toggle">
                          <a className="icon-btn bg-transparent" href="#">
                            <i data-feather="more-vertical" />
                          </a>
                          <div className="reminder-contentlist-toggle">
                            <ul>
                              <li>
                                <a className="icon-btn btn-sm" href="#">
                                  <i data-feather="trash" />
                                </a>
                                <h5>Delete</h5>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="reminder-list">
                      <button className="Show-reminder">Show Completed</button>
                      <button className="Hide-reminder">Hide Completed</button>
                      <div className="target-reminder-list">
                        <h5>Session Start</h5>
                        <h6>Project Discussion</h6>
                        <h6>05:22 PM | 1 JAN</h6>
                        <ul className="reminder-disp">
                          <li className="reminder-toggle">
                            <a
                              className="icon-btn bg-transparent"
                              href="#"
                              data-tippy-content="Quick action"
                            >
                              <i data-feather="more-vertical" />
                            </a>
                            <div className="reminder-content-toggle">
                              <ul>
                                <li>
                                  <a className="icon-btn btn-sm" href="#">
                                    <i data-feather="trash" />
                                  </a>
                                  <h5>Delete</h5>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="app-list">
              <ul className="app-list-ul custom-scroll">
                <li className="title apps-toggle">
                  <i data-feather="grid" />
                  <h5>Apps</h5>
                </li>
                <li>
                  <a
                    className="icon-btn btn-outline-success btn-sm button-effect"
                    href="files"
                  >
                    <i class="bi bi-file-earmark-arrow-up"></i>
                  </a>
                  <h5>Files </h5>
                </li>
                <li>
                  <a
                    className="icon-btn btn-outline-primary btn-sm button-effect"
                    href="notes"
                  >
                    <i class="bi bi-card-heading"></i>
                  </a>
                  <h5>Notes </h5>
                </li>
                <li>
                  <a
                    className="icon-btn btn-outline-danger btn-sm button-effect"
                    href="todo"
                  >
                    <i class="bi bi-journal-text"></i>
                  </a>
                  <h5>Todo </h5>
                </li>
                <li>
                  <a
                    className="icon-btn btn-outline-warning btn-sm button-effect"
                    href="reminder"
                  >
                    <i class="bi bi-alarm"></i>
                  </a>
                  <h5>Reminder</h5>
                </li>
                <li className="close-app">
                  <a
                    className="icon-btn btn-danger"
                    href="#"
                    onclick="removedefault()"
                  >
                    <i class="bi bi-x"></i>
                  </a>
                  <h5>close</h5>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div
          className="modal fade add-popup add-contact-modal"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Add Contact</h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="default-form">
                  <div className="form-group text-center">
                    <h5>Email or Username</h5>
                    <input
                      className="form-control"
                      id="exampleInputEmail1"
                      type="text"
                      placeholder="Josephin water"
                    />
                  </div>
                  <div className="form-group mb-0 text-center">
                    <h5>Contact number</h5>
                    <input
                      className="form-control"
                      id="examplemsg"
                      type="number"
                      placeholder={12345678912}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-danger button-effect btn-sm"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary button-effect btn-sm"
                  type="button"
                >
                  Add contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal pol-modal-main add-popup"
          id="pollModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">
                  <i data-feather="bar-chart-2" />
                  poll
                </h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="default-form">
                  <h3>create poll</h3>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="ask que"
                    />
                    <input
                      className="form-control"
                      type="text"
                      placeholder="add commatn"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="option 1"
                    />
                    <input
                      className="form-control"
                      type="text"
                      placeholder="option 2"
                    />
                    <a className="add-option" href="#">
                      add an option
                    </a>
                  </div>
                  <div className="form-group">
                    <div className="post-poll">
                      <ul>
                        <li>
                          post poll in
                          <p className="pt-0">test name</p>
                        </li>
                        <li>
                          poll expier in 7 days
                          <p className="pt-0">test name</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="allow-group">
                      <input className="allow-check" type="checkbox" />
                      Allow users to vote anonymously
                    </div>
                  </div>
                  <div className="creat-poll-btn">
                    <a
                      className="btn btn-primary button-effect btn-sm"
                      href="#"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Create poll
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal notes-modal-main add-popup"
          id="notesModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">
                  <i className="ti-bookmark-alt" />
                  notes
                </h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body custom-scroll p-0">
                <div className="card">
                  <div className="card-header">
                    <h5>Inline Editor</h5>
                  </div>
                  <div className="card-body">
                    <div
                      className="cke_editable cke_editable_inline cke_contents_ltr cke_show_borders"
                      id="area1"
                      contentEditable="true"
                      tabIndex={0}
                      spellCheck="false"
                      role="textbox"
                      aria-label="Rich Text Editor, area1"
                      title="Rich Text Editor, area1"
                    >
                      <h1>Your title</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec at vulputate urna, sed dignissim arcu. Aliquam at
                        ligula imperdiet, faucibus ante a, interdum enim. Sed in
                        mauris a lectus lobortis condimentum. Sed in nunc magna.
                        Quisque massa urna, cursus vitae commodo eget, rhoncus
                        nec erat. Sed sapien turpis, elementum sit amet elit
                        vitae, elementum gravida eros. In ornare tempus nibh ut
                        lobortis. Nam venenatis justo ex, vitae vulputate neque
                        laoreet a.
                      </p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn-danger button-effect btn-sm"
                      type="button"
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-primary button-effect btn-sm"
                      type="button"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal reminder-modal-main add-popup"
          id="setReminder"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content custom-scrollbar">
              <div className="modal-header">
                <h2 className="modal-title">Set redminders</h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="form default-form">
                  <div className="lable">Reminder for (Groups or contacts)</div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="contact or channel"
                    />
                  </div>
                  <div className="lable">Remind about</div>
                  <div className="form-group">
                    <textarea
                      className="form-control dib"
                      rows={3}
                      placeholder="Some details about task"
                      defaultValue={""}
                    />
                  </div>
                  <div className="lable">Remind about</div>
                  <div className="form-group">
                    <ul className="reminder-count">
                      <li className="active">
                        <div className="reminder-box">
                          <h3 className="remi-num">15</h3>
                          <h5 className="remi-val">minutes</h5>
                        </div>
                      </li>
                      <li>
                        <div className="reminder-box">
                          <h3 className="remi-num">1</h3>
                          <h5 className="remi-val">hour</h5>
                        </div>
                      </li>
                      <li>
                        <div className="reminder-box">
                          <h3 className="remi-num">5 PM</h3>
                          <h5 className="remi-val">today</h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="form-group mb-0">
                    <div className="lable">select custom time</div>
                    <div className="custom-remider-main">
                      <div className="custom-remider-content">
                        <div className="custom-reminder-inline">
                          <input className="form-control" type="date" />
                          <input className="form-control" type="time" />
                        </div>
                        <div className="custom-reminder-block">
                          <select>
                            <option>Do not repeat</option>
                            <option>Weekdays (Mon-Fri)</option>
                            <option>Daily</option>
                            <option>Weekly (Custom)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reminder-btn mb-3">
                    <a className="btn btn-primary button-effect">
                      set reminder
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal snippet-modal-main add-popup"
          id="snippetModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">
                  <i className="fa fa-code" />
                  code snippets
                </h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="default-form">
                  <h3>creat snippets</h3>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="title(optional)"
                    />
                  </div>
                  <div className="form-group">
                    <select className="mb-0">
                      <option>ebnf</option>
                      <option>c++</option>
                      <option>diff</option>
                      <option>dart</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control mb-0"
                      type="text"
                      placeholder="add commant (optional)"
                    />
                  </div>
                  <div className="form-group mb-0">
                    <div className="btn-snipate">
                      <a
                        className="btn btn-danger button-effect btn-sm me-3"
                        href="#"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Cancel
                      </a>
                      <a
                        className="btn btn-primary button-effect btn-sm"
                        href="#"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Create &amp; post
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="audiocall"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-body">
              <div className="audiocall1 call-modal">
                <img
                  className="bg-img"
                  src="../assets/images/avtar/big/audiocall.jpg"
                  alt="Avatar"
                />
                <div className="center-con text-center">
                  <div className="title2">Josephin water</div>
                  <h6>log angelina california</h6>
                  <ul>
                    <li>
                      <a
                        className="icon-btn btn-success button-effect btn-xl is-animating"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#audiorcvcall"
                        data-bs-dismiss="modal"
                      >
                        {" "}
                        <i data-feather="phone" />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        className="icon-btn btn-danger button-effect btn-xl is-animating cancelcall"
                        href="#"
                        data-bs-dismiss="modal"
                      >
                        {" "}
                        <i data-feather="phone" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="viddiolog modal fade"
          id="videocall"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-body">
              <div className="videocall call-modal">
                <img
                  className="bg-img"
                  src="../assets/images/avtar/big/videocall_bg.jpg"
                  alt="Avatar"
                />
                <div className="small-image">
                  <img
                    className="bg-img"
                    src="../assets/images/avtar/big/videocall.jpg"
                    alt="Avatar"
                  />
                </div>
                <div className="d-flex gap-3 videocall-details">
                  <div className="usersprof">
                    <div className="profile">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/2.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="profile">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/3.jpg"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5>Josephin water</h5>
                    <h6>America ,California</h6>
                  </div>
                  <div id="basicUsage">00:00:00</div>
                  <div className="zoomcontent">
                    <a
                      className="text-dark"
                      href="#!"
                      onclick="javascript:toggleFullScreen()"
                      data-tippy-content="Zoom Screen"
                    >
                      <img
                        src="../assets/images/logo/maximize.svg"
                        alt="zoom screen"
                      />
                    </a>
                  </div>
                </div>
                <div className="center-con text-center">
                  <ul>
                    <li>
                      <a
                        className="icon-btn btn-light button-effect pause"
                        href="#"
                        data-tippy-content="Hold"
                      >
                        <i className="ti-control-pause" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-danger button-effect btn-xl is-animating"
                        href="#"
                        data-bs-dismiss="modal"
                        data-tippy-content="Hangup"
                      >
                        {" "}
                        <i data-feather="phone" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-light button-effect mic"
                        href="#"
                        data-tippy-content="Mute"
                      >
                        <i className="fa fa-microphone" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="confercall"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-body">
              <div className="conferencecall call-modal">
                <img
                  className="bg-img"
                  src="../assets/images/avtar/big/audiocall.jpg"
                  alt="Avatar"
                />
                <div className="center-con text-center">
                  <div className="usersprof">
                    <div className="profile">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/2.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="profile">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/3.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="profile">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/5.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="profile">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/big/videocall_bg.jpg"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <p>Incoming Call</p>
                  <h3>Conference Call</h3>
                  <ul>
                    <li>
                      {" "}
                      <a
                        className="icon-btn btn-danger button-effect btn-xl is-animating cancelcall"
                        href="#"
                        data-bs-dismiss="modal"
                      >
                        {" "}
                        <i data-feather="phone" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-success button-effect btn-xl is-animating"
                        href="#"
                      >
                        {" "}
                        <i data-feather="video" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="confvideocl"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row confimg">
                  <div className="col-6">
                    <div className="vclimg">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/big/videocall_bg.jpg"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="vclimg">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/5.jpg"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="vclimg">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/2.jpg"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="vclimg">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/3.jpg"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer clfooter">
                <div id="basicUsage3">00:00:00</div>
                <ul>
                  <li>
                    <a
                      className="icon-btn btn-light button-effect"
                      href="#"
                      data-tippy-content="speaker"
                    >
                      <i data-feather="volume-2" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-btn btn-light button-effect"
                      href="#"
                      data-tippy-content="Camera"
                    >
                      <i data-feather="camera-off" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-btn btn-light button-effect"
                      href="#"
                      data-tippy-content="Add Call"
                    >
                      <i data-feather="user-plus" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-btn btn-danger button-effect btn-sm is-animating"
                      href="#"
                      data-bs-dismiss="modal"
                      data-tippy-content="Hangup"
                    >
                      <i data-feather="phone" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-btn btn-light button-effect"
                      href="#"
                      data-tippy-content="Disable Video"
                    >
                      <i data-feather="video-off" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-btn btn-light button-effect mic"
                      href="#"
                      data-tippy-content="Mute"
                    >
                      <i data-feather="mic-off" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-btn btn-light button-effect"
                      href="#"
                      data-tippy-content="Hold"
                    >
                      <i data-feather="pause" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade audiorcvcall"
          id="audiorcvcall"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-body">
              <div className="audiocall2 call-modal">
                <img
                  className="bg-img"
                  src="../assets/images/avtar/big/audiocall.jpg"
                  alt="Avatar"
                />
                <div className="center-con text-center">
                  <div id="basicUsage2">00:00:00</div>
                  <div className="title2">Josephin water</div>
                  <h6>log angelina california</h6>
                  <ul>
                    <li>
                      <a
                        className="icon-btn btn-light button-effect mute"
                        href="#"
                        data-tippy-content="Mute"
                      >
                        <i className="fa fa-microphone" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-light button-effect mute"
                        href="#"
                        data-tippy-content="Speaker"
                      >
                        <i className="fa fa-volume-up" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-danger button-effect btn-xl is-animating"
                        href="#"
                        data-tippy-content="Hangup"
                        data-bs-dismiss="modal"
                      >
                        {" "}
                        <i data-feather="phone" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-light button-effect"
                        href="#"
                        data-tippy-content="Add Call"
                      >
                        <i data-feather="user-plus" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-light button-effect"
                        href="#"
                        data-tippy-content="Pause"
                      >
                        <i data-feather="pause" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade fev-addcall-main add-popup"
          id="addcallmodal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Add Contact</h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="default-form">
                  <div className="form-group text-center">
                    <h5>Email or Username</h5>
                    <input
                      className="form-control"
                      id="exampleInputEmail12"
                      type="text"
                      placeholder="Josephin water"
                    />
                  </div>
                  <div className="form-group text-center">
                    <h5>Contact number</h5>
                    <input
                      className="form-control"
                      id="examplemsg2"
                      type="number"
                      placeholder={12345678912}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-danger button-effect btn-sm"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary button-effect btn-sm"
                  type="button"
                >
                  Add contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade add-popup todo-main-modal"
          id="todoModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Welcome to Chitchat</h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="default-form">
                  <div className="todo-task">
                    <h5>Felling Lonely</h5>
                    <div className="todo-main-content">
                      <div className="form-group">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                        <input
                          className="w-100"
                          id="user_input123"
                          type="text"
                          placeholder="Fill Your Fillings "
                        />
                      </div>
                      <div className="drop-picker">
                        <div className="dropdown currency" tabIndex={1}>
                          <div className="select">
                            <span>Assign To</span>
                          </div>
                          <input type="hidden" name="currency" />
                          <ul className="dropdown-menu">
                            <li className="dropdown-divider">
                              <div className="fa fa-user text-muted" />
                              <h5 className="text-muted">Assign To</h5>
                            </li>
                            <li>Josephin john</li>
                            <li>Lynetin john</li>
                            <li>Sufiya john</li>
                            <li>Jhon john</li>
                          </ul>
                        </div>
                        <input
                          className="datepicker-here form-control digits"
                          type="url"
                          data-language="en"
                          placeholder="Due date"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-danger button-effect btn-sm"
                  type="button"
                >
                  Save
                </button>
                <button
                  className="btn btn-primary button-effect btn-sm"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade add-popup create-todo-main-modal"
          id="createtodoModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Today's ToDo</h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="default-form">
                  <div className="todo-task">
                    <h5>Felling Lonely</h5>
                    <div className="todo-main-content">
                      <div className="form-group">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                        <input
                          className="w-100"
                          id="user_input123"
                          type="text"
                          placeholder="Fill Your Fillings "
                        />
                      </div>
                      <div className="drop-picker">
                        <div className="dropdown currency" tabIndex={1}>
                          <div className="select">
                            <span>Assign To</span>
                          </div>
                          <input type="hidden" name="currency" />
                          <ul className="dropdown-menu">
                            <li className="dropdown-divider">
                              <div className="fa fa-user text-muted" />
                              <h5 className="text-muted">Assign To</h5>
                            </li>
                            <li>Josephin john</li>
                            <li>Lynetin john</li>
                            <li>Sufiya john</li>
                            <li>Jhon john</li>
                          </ul>
                        </div>
                        <input
                          className="datepicker-here form-control digits"
                          type="url"
                          data-language="en"
                          placeholder="Due date"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-danger button-effect btn-sm"
                  type="button"
                >
                  Save
                </button>
                <button
                  className="btn btn-primary button-effect btn-sm"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade add-popup msg-chat-modal"
          id="msgchatModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Create New Message</h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="chat-msg-search">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon21"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon21">
                        @
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="chat-main custom-scroll">
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile offline">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/1.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Josephin water</h5>
                        <h6>
                          Hi, i am josephin. How are you.. ! There are many
                          variations of passages.
                        </h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>22/10/23</h6>
                        <h6 className="font-success status"> Seen</h6>
                      </div>
                    </div>
                  </li>
                  <li className="active" data-to="chating">
                    <div className="chat-box">
                      <div className="profile online">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/2.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jony Lynetin</h5>
                        <h6>Typing................</h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>30/11/23</h6>
                        <div className="badge badge-primary sm">8</div>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile unreachable">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/3.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Sufiya Elija</h5>
                        <h6>I need job, please help me.</h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>15/06/23</h6>
                        <h6 className="font-dark status"> Sending</h6>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile busy">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/4.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Mukrani Pabelo</h5>
                        <h6>
                          Hi, i am josephin. How are you.. ! There are many
                          variations of passages.
                        </h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>04/06/23</h6>
                        <h6 className="font-danger status"> Failed</h6>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile busy">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/2.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jhon Deo</h5>
                        <h6>
                          Hi, i am josephin. How are you.. ! There are many
                          variations of passages.
                        </h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>04/06/23</h6>
                        <h6 className="font-danger status"> Failed</h6>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile busy">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/1.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Pabelo Mukrani</h5>
                        <h6>
                          Hi, i am josephin. How are you.. ! There are many
                          variations of passages.
                        </h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>04/06/23</h6>
                        <h6 className="font-danger status"> Failed</h6>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile unreachable">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/3.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Sufiya Elija</h5>
                        <h6>I need job, please help me.</h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>15/06/23</h6>
                        <h6 className="font-dark status"> Sending</h6>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile busy">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/4.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Mukrani Pabelo</h5>
                        <h6>
                          Hi, i am josephin. How are you.. ! There are many
                          variations of passages.
                        </h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>04/06/23</h6>
                        <h6 className="font-danger status"> Failed</h6>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile busy">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/2.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jhon Deo</h5>
                        <h6>
                          Hi, i am josephin. How are you.. ! There are many
                          variations of passages.
                        </h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>04/06/23</h6>
                        <h6 className="font-danger status"> Failed</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade add-popup msg-chat-modal"
          id="msgcallModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Create New Message</h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="chat-msg-search">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon20"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon20">
                        @
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="call-log-main custom-scroll">
                  <li className="active">
                    <div className="call-box">
                      <div className="profile offline">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/2.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jony Lynetin</h5>
                        <h6>
                          {" "}
                          <i data-feather="arrow-down-left" />
                          3:30 pm
                        </h6>
                      </div>
                      <div className="call-status">
                        <div className="icon-btn btn-outline-success button-effect btn-sm">
                          <i data-feather="phone" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="call-box">
                      <div className="profile online">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/1.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jony Lynetin</h5>
                        <h6>
                          {" "}
                          <i data-feather="arrow-down-right" />
                          3:10 pm
                        </h6>
                      </div>
                      <div className="call-status">
                        <div className="icon-btn btn-outline-success button-effect btn-sm">
                          <i data-feather="video" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="call-box">
                      <div className="profile offline">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/2.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jony Lynetin</h5>
                        <h6>
                          {" "}
                          <i
                            className="missed"
                            data-feather="corner-left-down"
                          />
                          3:00 pm
                        </h6>
                      </div>
                      <div className="call-status">
                        <div className="icon-btn btn-outline-danger button-effect btn-sm">
                          <i data-feather="phone" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="call-box">
                      <div className="profile online">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/1.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jony Lynetin</h5>
                        <h6>
                          {" "}
                          <i data-feather="arrow-down-right" />
                          3:00 pm
                        </h6>
                      </div>
                      <div className="call-status">
                        <div className="icon-btn btn-outline-success button-effect btn-sm">
                          <i data-feather="video" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="call-box">
                      <div className="profile offline">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/2.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jony Lynetin</h5>
                        <h6>
                          {" "}
                          <i data-feather="arrow-down-right" />
                          3:00 pm
                        </h6>
                      </div>
                      <div className="call-status">
                        <div className="icon-btn btn-outline-success button-effect btn-sm">
                          <i data-feather="phone" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="call-box">
                      <div className="profile online">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/1.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jony Lynetin</h5>
                        <h6>
                          {" "}
                          <i data-feather="arrow-down-right" />
                          3:00 pm
                        </h6>
                      </div>
                      <div className="call-status">
                        <div className="icon-btn btn-outline-success button-effect btn-sm">
                          <i data-feather="video" />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
