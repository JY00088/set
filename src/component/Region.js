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
            <div className='toptext'>강원도</div>
            <Link to="/">HOME</Link>
          </div>

          <div className="na">
            <div className="nati">
              <div className='natext'>2023 1월 강원도 지역 일월출몰</div>
              <FontAwesomeIcon icon={faLeftLong} color="#fff" />
            </div>
            <div className='inwi'>
              <div>입력 :</div>
              <input type="date" />
            </div>
          </div>

          <div className='status'>
            <div className='statusbox'>
              <div className='boxtitile'>
                <div className='boxp'>춘천</div>
                <div className='boxdate'>2023 01.01 00시 기준</div>
              </div>
              <div className='boxsun'>
              <div>일출</div>
              <div>07:33</div>
              <div>일몰</div>
              <div>17:19</div>
              </div>
              <div className='boxmon'>
              <div>월출</div>
              <div>13:33</div>
              <div>월몰</div>
              <div>02:19</div>
              </div>
            </div>
          </div>

        </div>

        <div className="sideright">
          <div className='imgbig'>
            <img src="./imgs/1x/01.png" />
          </div>
          <div className='imgsmall'>
            <img src="./imgs/3x/001.png" />
          </div>
        </div>
      </div>
      <section>{page}</section>
    </>
  );
};

export default Region;
