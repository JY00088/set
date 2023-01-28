import React from 'react';
import '../scss/Region.css';
import { Route, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

const Region = () => {
  let { page } = useParams();
  <Route path="/Region:page"></Route>;
  return (
    <>
      {/* <Link to="/">HOME</Link> */}
      <div className="to">
        <div className="sidelegt">
          <div className="topbox">
            <div>강원도</div>
            <Link to="/">HOME</Link>
          </div>

          <div className="na">
            <div className="nati">
              <div>2023 1월 강원도 지역 일월출몰</div>
              <FontAwesomeIcon icon={faLeftLong} color="#fff" />
            </div>
            <div>
              <div>입력 :</div>
              <input type="date" />
            </div>
          </div>

          <div>
            <div>
              <div>춘천</div>
              <div>2023 01.01 00시 기준</div>
              <div>
                <div>일출몰
                  <div>출<div>07:33</div></div>
                  <div>몰<div>17:33</div></div>
                </div>
                <div>월출몰
                  <div>출<div>07:33</div></div>
                  <div>몰<div>17:33</div></div>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>

        <div className="sideright">
          <div className='imgbig'>
          <img src="./imgs/1x/01.png" />
          </div>
          <div className='imgsmall'></div>
        </div>
      </div>
      <section>{page}</section>
    </>
  );
};

export default Region;
