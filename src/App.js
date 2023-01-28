import './App.css';
import axios from 'axios';
import Main from './component/Main';
import Sights from './component/Sights';
import Region from './component/Region';
import { useEffect } from 'react';
import $ from 'jquery';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  var locations = ['강릉', '강화도', '거제'];
  //   var locations = [
  //     강릉,
  //     강화도,
  //     거제,
  //     거창,
  //     경산,
  //     경주,
  //     고성(강원),
  //     고양,
  //     고흥,
  //     광양,
  //     광주,
  //     광주(경기),
  //     구미,
  //     군산,
  //     김천,
  //     김해,
  //     남원,
  //     남해,
  //     대관령,
  //     대구,
  //     대덕,
  //     대전,
  //     독도,
  //     동해,
  //     마산,
  //     목포,
  //     무안,
  //     밀양,
  //     변산,
  //     보령,
  //     보성,
  //     보현산,
  //     부산,
  //     부안,
  //     부천,
  //     사천,
  //     삼척,
  //     상주,
  //     서귀포,
  //     서산,
  //     서울,
  //     서천,
  //     성산일출봉,
  //     세종,
  //     소백산,
  //     속초,
  //     수원,
  //     순천,
  //     승주,
  //     시흥,
  //     아산,
  //     안동,
  //     안산,
  //     안양,
  //     양양,
  //     양평,
  //     여수,
  //     여수공항,
  //     여주,
  //     영광,
  //     영덕,
  //     영월,
  //     영주,
  //     영천,
  //     완도,
  //     용인,
  //     울릉도,
  //     울산,
  //     울진,
  //     원주,
  //     의성,
  //     익산,
  //     인천,
  //     임실,
  //     장수,
  //     장흥,
  //     전주,
  //     정읍,
  //     제주,
  //     제주(레),
  //     제천,
  //     주문진,
  //     진도,
  //     진주,
  //     진해,
  //     창원,
  //     천안,
  //     청주,
  //     청주공항,
  //     추풍령,
  //     춘양,
  //     춘천,
  //     충주,
  //     태백,
  //     태안,
  //     통영,
  //     파주,
  //     평택,
  //     포항,
  //     해남,
  //     화성,
  //     흑산도,
  //   ];
  var url1 =
    'http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo?';
  var _location = 'location=';
  var _locdate = '&locdate=20150101';
  var url2 =
    '&ServiceKey=tCVUj7n2iC8P7jp/PAIz5gygkSJGLWghIwOH307LelAhMxgf8Bqb/6pI04KNAnyXSG1tj1iyLBOMt96A/oHZ0w==';

  var _url = url1 + _location + locations[0] + _locdate + url2;

  $.ajax({
    url: _url,
    type: 'GET',
    dataType: 'xml',
    beforeSend: function () {
      console.log('준비');
    },
    complete: function () {
      //   console.log('완료');
    },
    success: function (data) {
      console.log(data);
      let tag = '',
        location,
        locdate;

      $(data)
        .find('item')
        .each(function (key, value) {
          location = $(value).find('location').text();
          locdate = $(value).find('locdate').text();

          tag += `<figure>
                        <figcaption> ${location} </figcaption>
                        <figcaption> ${locdate} </figcaption>
                    </figure>`;
          //console.log($(this).find('location').text());
          //console.log($(this).find('locdate').text());
        });

      $('.month').html(tag);

      /*  $('.gallery figure').click(function(){ 
            let key = $(this).index();
            let detail = $(data).find('item').eq(key).find('detail').html()
            alert(detail); */
    },
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sights" element={<Sights />} />
          <Route path="/region" element={<Region />} />
        </Routes>
      </BrowserRouter>
      {/* <article className="month"></article> */}
    </div>
  );
}

export default App;
