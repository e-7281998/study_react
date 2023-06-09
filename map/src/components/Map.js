import React, { useEffect, useState } from "react";
import "../css/map.css";
import marker_A from "../img/marker_A.png";
import Clusterer from "./Clusterer";

const { kakao } = window;

function Map(props) {
  const [latitude, setLatitude] = useState(33.450701);
  const [longitude, setLongitude] = useState(126.570667);

  useEffect(() => {
    //현 위치 가져오기
    if (navigator.geolocation) {
      //Geolocation 이용해 접속 위치 얻어오기
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("위치 가져오기 OK");
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (err) => {
          console.log(err);
        }
      );
    }
    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(latitude, longitude);
    console.log(latitude);
    console.log(longitude);

    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: markerPosition, //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    // ** 마커 이미지 변경
    const imageSrc = marker_A, // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );
    // **
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    var content = "<Clusterer/>";

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, //마커이미지 추가
      content: content,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, [latitude, longitude]);

  return <div id="map"></div>;
}

export default Map;
