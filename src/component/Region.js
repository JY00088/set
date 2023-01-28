import React from 'react';
import '../scss/Region.css';
import { Route, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Region = () => {
  let { page } = useParams();
  <Route path="/Region:page"></Route>;
  return (
    <>
      {/* <Link to="/">HOME</Link> */}
      <div className="to">
        <div className="to1">
          <div className="tobox">
            <div>강원도</div>
            <Link to="/">HOME</Link>
          </div>

          <div className="na">
            <div className="nati">
              <div>2023 1월 강원도 지역 일월출몰</div>
            </div>
            <div>
              <input type="date" />
              <button>검색</button>
            </div>
          </div>

          <div>
            <img src="./imgs/1x/01.png" />
          </div>

          <div></div>
        </div>

        <div className="to2"></div>
      </div>
      <section>{page}</section>
    </>
  );
};

export default Region;
