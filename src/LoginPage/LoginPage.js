import React, { useState } from 'react';
import { connect } from 'react-redux';
import logo from '../resources/logo.png';
import study from '../resources/study.png';
import study2 from '../resources/study2.png';
import study3 from '../resources/study3.png';
import videoCall from '../resources/video-call.png';
import UsernameInput from './components/UsernameInput';
import SubmitButton from './components/SubmitButton';
import { useHistory } from 'react-router-dom';
import { setUsername } from '../store/actions/dashboardActions';
import { registerNewUser } from '../utils/wssConnection/wssConnection';
import './LoginPage.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import girl1 from './img/girl1.png';
import girl2 from './img/girl2.png';
import man1 from './img/man1.png';
import man2 from './img/man2.png';
import man3 from './img/man3.png';

const LoginPage = ({ saveUsername }) => {
  const [username, setUsername] = useState('');

  const [imgIdLeft, setImageIdLeft] = useState(0);
  const [imgIdCenter, setImageIdCenter] = useState(1);
  const [imgIdRight, setImageRight] = useState(2);

  const history = useHistory();

  const handleSubmitButtonPressed = () => {
    registerNewUser(username);
    saveUsername(username);
    history.push('/dashboard');
  };

  // handler
  const leftHandler = () => {
    if (imgIdLeft === 0) {
      setImageIdLeft(4);
      setImageIdCenter(imgIdCenter - 1);
      setImageRight(imgIdRight - 1);
    } else if (imgIdCenter === 0) {
      setImageIdLeft(imgIdLeft - 1);
      setImageIdCenter(4);
      setImageRight(imgIdRight - 1);
    } else if (imgIdRight === 0) {
      setImageIdLeft(imgIdLeft - 1);
      setImageIdCenter(imgIdCenter - 1);
      setImageRight(4);
    } else {
      setImageIdLeft(imgIdLeft - 1);
      setImageIdCenter(imgIdCenter - 1);
      setImageRight(imgIdRight - 1);
    }
  };

  const rightHandler = () => {
    if (imgIdLeft === 4) {
      setImageIdLeft(0);
      setImageIdCenter(imgIdCenter + 1);
      setImageRight(imgIdRight + 1);
    } else if (imgIdCenter === 4) {
      setImageIdLeft(imgIdLeft + 1);
      setImageIdCenter(0);
      setImageRight(imgIdRight + 1);
    } else if (imgIdRight === 4) {
      setImageIdLeft(imgIdLeft + 1);
      setImageIdCenter(imgIdCenter + 1);
      setImageRight(0);
    } else {
      setImageIdLeft(imgIdLeft + 1);
      setImageIdCenter(imgIdCenter + 1);
      setImageRight(imgIdRight + 1);
    }
  };

  // data

  const review = [
    `I have been putting off my planned visit to Korea due to the corona virus.
  However, after hearing the teachers' vivid stories about Korea, I think I went there personally, even for a short time.
  I'm looking forward to going to Korea someday!
  `,
    `Due to the time difference with Korea, I was worried whether I would be able to find a teacher at the time I wanted.
    It was a useless worry. I really liked that there were so many diligent teachers.
    `,
    `I am a student who studied Korean a little in the past.
    It's so much fun to have conversations with the teachers in the language I've been learning.
    `,
    `The teachers are really fun. I feel like I'm not here to study, but to play!
    I plan to use it whenever I have time.
    `,
    `Teaching Korean, which I take for granted, is so much fun.
    Some friends come to study and some come to talk.
    As I teach Korean, I naturally learn a foreign language.
    I'm going to log in today.`,
  ];

  const review_name = ['Bob', 'Danny', 'Tom', 'Jenny', 'Katie'];

  const review_job = ['Student', 'Student', 'Student', 'Student', 'Stuent'];

  const review_img = [man1, man2, man3, girl1, girl2];

  return (
    <>
      <nav id="navbar">
        <div className="navbar__logo">
          <img className="logo" src={logo} alt="logo" />
          <a href="#">
            <span>GeogleMeet</span>
          </a>
        </div>

        <div className="navbar__search__bar">
          <button className="navbar__search__btn">
            <i className="fas fa-video"></i>
          </button>

          {/* <!-- Toggle button --> */}
          <button className="navbar__toggle-btn">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
      {/* <!-- Home --> */}
      <section id="home">
        <div className="home__container">
          <div className="home__left">
            <div className="home__border">
              <h3 className="home__title">
                Say hello to your<br></br>private English tutor
              </h3>
              <span className="home__description">
                Become fluent faster through video chat<br></br>lessons tailored
                to your goals.
              </span>
            </div>
            <div className="userName__btn">
              <UsernameInput username={username} setUsername={setUsername} />
              <SubmitButton
                username={username}
                handleSubmitButtonPressed={handleSubmitButtonPressed}
              />
            </div>
          </div>
          <div className="img">
            <img
              src={videoCall}
              alt="Jung's profile photo"
              className="home__avatar"
            />
          </div>
        </div>
      </section>
      {/* <!-- About --> */}
      <section id="about" className="section section__container">
        <img className="study" src={study} alt="" />
        <div className="description">
          <h1 className="description_title">
            Foreigners, Learn Korean and enjoy Korean culture more.
          </h1>
          <span className="in">
            The only thing you need to prepare to learn is the internet.
            Studying with Korean teachers is good and conversation is good.
          </span>
        </div>
      </section>
      {/* <!-- Skills --> */}
      <section id="skills" className="section">
        <div className="section__container">
          <div className="description _skill">
            <h1 className="description_title">Now you are a teacher too!</h1>
            <span className="in">
              Publicize Korean by teaching Korean to foreign people. Are you
              inexperienced in teaching? Every single story you tell is a lesson
              for those who learn it. You might make close friends.
            </span>
          </div>
          <img className="study" src={study3} alt="" />
        </div>
      </section>
      {/* <!-- Work --> */}
      <section id="work" className="section">
        <div className="section__container">
          <img className="study" src={study2} alt="" />

          <div className="description">
            <h1 className="description_title">
              Anytime If you have the right time
            </h1>
            <span className="in">
              Anywhere If only the internet is available without a separate
              platform Fun Chat with foreign friends.
            </span>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials --> */}
      <section id="testimonials" className="section">
        <div className="section__container">
          {/* here */}

          <FaAngleLeft
            className="login-page_left-angle"
            onClick={leftHandler}
          />
          <div className="login-page_review_side">
            <div></div>
            <div className="login-page_review_text">{review[imgIdLeft]}</div>
            <div className="login-page_review_user">
              <img
                src={review_img[imgIdLeft]}
                className="login-page_review_user_img"
              />
              <div className="login-page_review_user_text">
                <div className="login-page_review_user_job">
                  {review_name[imgIdLeft]}
                </div>
                <div className="login-page_review_user_name">
                  {review_job[imgIdLeft]}
                </div>
              </div>
            </div>
          </div>
          <div className="login-page_review_center">
            <div></div>
            <div className="login-page_review_text">{review[imgIdCenter]}</div>
            <div className="login-page_review_user">
              <img
                src={review_img[imgIdCenter]}
                className="login-page_review_user_img"
              />
              <div className="login-page_review_user_text">
                <div className="login-page_review_user_job">
                  {review_name[imgIdCenter]}
                </div>
                <div className="login-page_review_user_name">
                  {review_job[imgIdCenter]}
                </div>
              </div>
            </div>
          </div>
          <div className="login-page_review_side">
            <div></div>
            <div className="login-page_review_text">{review[imgIdRight]}</div>
            <div className="login-page_review_user">
              <img
                src={review_img[imgIdRight]}
                className="login-page_review_user_img"
              />
              <div className="login-page_review_user_text">
                <div className="login-page_review_user_job">
                  {review_name[imgIdRight]}
                </div>
                <div className="login-page_review_user_name">
                  {review_job[imgIdRight]}
                </div>
              </div>
            </div>
          </div>
          <FaAngleRight
            className="login-page_right-angle"
            onClick={rightHandler}
          />
        </div>
      </section>
      {/* <!-- Contact --> */}
      <section id="contact" className="section">
        <h1 className="contact__title">Let's talk</h1>

        <p className="contact_rights">GeogleMeet - All rights reserved</p>
      </section>
    </>
  );
};

const mapActionsToProps = dispatch => {
  return {
    saveUsername: username => dispatch(setUsername(username)),
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
