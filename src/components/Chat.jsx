import React from 'react'

function Chat() {
  return (
    <>
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
    </>
  )
}

export default Chat