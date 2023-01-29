import React from 'react';
import '../scss/Sights.css';
import { Route, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { ReactComponent as Maps } from '../scss/img/sunmap.svg';
import { ReactComponent as Maps2 } from '../scss/img/sunmap2.svg';

const Sights = () => {


    //scroll 이벤트
    window.addEventListener('wheel', function (e) {
        e.preventDefault();
    }, { passive: false });

    var $html = $("html");

    var page = 1;

    var lastPage = $(".content").length;

    $html.animate({ scrollTop: 0 }, 10);

    $(window).on("wheel", function (e) {
        if ($html.is(":animated")) return;

        if (e.originalEvent.deltaY > 0) {
            if (page == lastPage) return;
            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;
            page--;
        }
        var posTop = (page - 1) * $(window).height();
        $html.animate({ scrollTop: posTop });

    })

    //자동슬라이드
    // moveType (0:left / 1:right) 
    var moveType = 0;
    // 이동시간간격 3초 
    var moveSpeed = 3000;
    // 움직이는 작업중 다시 명령 받지 않음 
    var moveWork = false;
    // 일시정지 flag 
    var movePause = false;
    function imgMove() {
        if (moveWork == false) {
            // 0d\일경우 left방향 
            if (moveType == 0) {
                // 맨처음 이미지의 폭 
                var aWidth = $(".RollDiv > div > a:first").width();
                // 롤링마지막에 맨처음의 a태그 추가 
                $(".RollDiv > div").append("<a href=\"" + $(".RollDiv > div > a:first").attr("href") + "\">" + $(".RollDiv > div > a:first").html() + "</a>");
                // 맨처음이미지를 왼쪽으로 이동시킨다. 
                $(".RollDiv > div > a:first").animate({ marginLeft: -aWidth }, {
                    duration: moveSpeed, step: function () {
                        // 이동중 만약 일시정지 flag가 true라면 
                        if (movePause == true) {
                            // 이동을 멈춘다 
                            $(this).stop();
                        }
                    }, complete: function () {
                        // 이동을 마친후 첫번째 a태그를 지워버린다 
                        $(this).remove();
                        // 이미지 움직이는것을 다시 실행 
                        imgMove();
                    }
                });
            } else {
                // 마지막 a태그의 폭 
                var aWidth = $(".RollDiv > div > a:last").width();
                // a태그 앞에 마지막의 a태그를 생성한다 단 스타일은 마지막 a태그의 폭만큼 빼준다 
                $("<a href=\"" + $(".RollDiv > div > a:last").attr("href") + "\" style=\"margin-left:-" + aWidth + "px\">" + $(".RollDiv > div > a:last").html() + "</a>").insertBefore(".RollDiv > div > a:first")
                // 맨처음 a태그의 margin-left를 다시 0으로 맞춰준다. 
                $(".RollDiv > div > a:first").animate({ marginLeft: 0 }, {
                    duration: moveSpeed, step: function () {
                        // 이동중 만약 일시정지 flag가 true라면 
                        if (movePause == true) {
                            // 이동을 멈춘다 
                            $(this).stop();
                        }
                    }, complete: function () {
                        // 이동을 마친후 마지막 a태그를 지워버린다 
                        $(".RollDiv > div > a:last").remove();
                        // 이미지 움직이는것을 다시 실행 
                        imgMove();
                    }
                });
            }
        }
    }
    function goMove() {
        // 일시정지가 풀려있을 경우를 대비하여 일시정지를 풀러준다 
        movePause = false;
        // 0d\일경우 left방향 
        if (moveType == 0) {
            imgMove();
        } else {
            $(".RollDiv > div > a:first").animate({ marginLeft: 0 }, {
                duration: moveSpeed, step: function () {
                    // 이동중 만약 일시정지 flag가 true라면 
                    if (movePause == true) {
                        // 이동을 멈춘다 
                        $(this).stop();
                    }
                }, complete: function () {
                    // 이동을 마친후 마지막 a태그를 지워버린다 
                    //$(".RollDiv > div > a:last").remove(); 
                    // 이미지 움직이는것을 다시 실행 
                    imgMove();
                }
            });
        }

    }
    imgMove();


    return (
        <>
            {/* 1번쨰화면 */}
            <div className='content'>
                <div className='Place'>
                    <div className='placeleft'>
                        <div className='placetitle'>
                            <div>SOUTH KOREA</div>
                           
                            <Link to="/"> <img src="./imgs/tag.png" /></Link>
                        </div>
                        <div className='placesub'>
                            <div className='subbox'>
                                <img src="./imgs/sicon.png" />
                                <div>Place</div>
                                
                            </div>
                        </div>
                        <div className='placebox'>
                            <div className='placeboder'>
                                <div className='placetop'>
                                    <div>sunrise sunset</div>
                                    <FontAwesomeIcon icon={faLeftLong} color="#153DB3" />

                                </div>

                                <div className='setbox'>

                                    <div className='box01'>
                                        <div className='pad10'>정동진</div>
                                        <div>일출 07:34</div>
                                        <div>일몰 07:34</div>
                                    </div>
                                    <div className='box02'>
                                        <div className='pad10'>하늘공원</div>
                                        <div>일출 07:34</div>
                                        <div>일몰 07:34</div>
                                    </div>
                                    <div className='box03'>
                                        <div className='pad10'>울릉도</div>
                                        <div >일출 07:34</div>
                                        <div>일몰 07:34</div>
                                    </div>
                                    <div className='box04'>
                                        <div className='pad10'>독도</div>
                                        <div>일출 07:34</div>
                                        <div>일몰 07:34</div>
                                    </div>
                                    <div className='box05'>
                                        <div className='pad10'>태백산</div>
                                        <div>일출 07:34</div>
                                        <div>일몰 07:34</div>
                                    </div>
                                    <div className='box06'>
                                        <div className='pad10'>꽃지해안공원</div>
                                        <div>일출 07:34</div>
                                        <div>일몰 07:34</div>
                                    </div>
                                    <div className='box07'>
                                        <div className='pad10'>호미곶</div>
                                        <div>일출 07:34</div>
                                        <div>일몰 07:34</div>
                                    </div>
                                    <div className='box08'>
                                        <div className='pad10'>변산반도</div>
                                        <div>일출 07:34</div>
                                        <div>일몰 07:34</div>
                                    </div>
                                    <div className='box09'>
                                        <div className='pad10'>간절곶</div>
                                        <div>일출 07:34</div>
                                        <div>일몰 07:34</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='placeright'>
                        <div className='rightbox'>
                            <Maps2/>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2번쨰화면 */}
            <div className='content'>
                <div className='risebox'>
                    <div className='risetext'>
                        <h2>해돋이 일출 일몰시간</h2>
                        <h3>sunrise sunset</h3>
                    </div>

                    <div className='RollDiv'>
                        <div>
                            <a href="#"><img src='./imgs/sunset/1.jpeg' /></a> 
                            <a href="#"><img src='./imgs/sunset/2.png' /></a>
                            <a href="#"><img src='./imgs/sunset/3.jpeg' /></a>
                            <a href="#"><img src='./imgs/sunset/4.jpeg' /></a>
                            <a href="#"><img src='./imgs/sunset/5.jpg' /></a>
                            <a href="#"><img src='./imgs/sunset/6.jpeg' /></a>
                            <a href="#"><img src='./imgs/sunset/7.png' /></a>
                            <a href="#"><img src='./imgs/sunset/8.png' /></a>
                            <a href="#"><img src='./imgs/sunset/9.png' /></a>
                            <a href="#"><img src='./imgs/sunset/10.png' /></a>
                            <a href="#"><img src='./imgs/sunset/11.png' /></a>
                        </div>
                        {/* 
                            <div className='imgt'>
                                <div>정동진</div>
                                <div><img src="./imgs/sicon.png" />일출 07:44</div>
                                <div><img src="./imgs/sicon.png" />일몰 17:44</div>
                            </div> */}
                    </div>

                </div>

            </div>

        </>
    );

};

export default Sights;