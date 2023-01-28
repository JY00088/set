import React from 'react';
import '../scss/Sights.css';
import { Route, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

const Sights = () => {
    return (
        <>
            <div className='Place'>
                <div className='placeleft'>
                    <div className='placetitle'>
                        <div>SOUTH KOREA</div>
                        <Link to="/">HOME</Link>
                        <img src="./imgs/tag.png" />
                    </div>
                    <div className='placesub'>
                        <div>
                            <img src="./imgs/sicon.png" />
                            <div>대표지역명소</div>
                            <FontAwesomeIcon icon={faLeftLong} color="#fff" />
                        </div>
                    </div>
                    <div className='placebox'>
                        <div>
                            <div>sunrise sunset</div>

                            <div className='setbox'>

                                <div className='box01'>
                                    <div>정동진</div>
                                    <div>일출 07:34</div>
                                    <div>일몰 07:34</div>
                                </div>
                                <div className='box02'>
                                    <div>하늘공원</div>
                                    <div>일출 07:34</div>
                                    <div>일몰 07:34</div>
                                </div>
                                <div className='box03'>
                                    <div>울릉도</div>
                                    <div>일출 07:34</div>
                                    <div>일몰 07:34</div>
                                </div>
                                <div className='box04'>
                                    <div>독도</div>
                                    <div>일출 07:34</div>
                                    <div>일몰 07:34</div>
                                </div>
                                <div className='box05'>
                                    <div>태백산</div>
                                    <div>일출 07:34</div>
                                    <div>일몰 07:34</div>
                                </div>
                                <div className='box06'>
                                    <div>꽃지해안공원</div>
                                    <div>일출 07:34</div>
                                    <div>일몰 07:34</div>
                                </div>
                                <div className='box07'>
                                    <div>호미곶</div>
                                    <div>일출 07:34</div>
                                    <div>일몰 07:34</div>
                                </div>
                                <div className='box08'>
                                    <div>변산반도</div>
                                    <div>일출 07:34</div>
                                    <div>일몰 07:34</div>
                                </div>
                                <div className='box09'>
                                    <div>간절곶</div>
                                    <div>일출 07:34</div>
                                    <div>일몰 07:34</div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className='placeright'>
                    <div>
                    <img src="./imgs/all.png" />
                    </div>
                </div>
            </div>
        </>
    );

};

export default Sights;