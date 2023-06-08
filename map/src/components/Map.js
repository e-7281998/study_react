import React, { useEffect, useState } from "react";
import "../css/map.css";

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

    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: markerPosition, //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, [latitude, longitude]);

  return <div id="map"></div>;
}

export default Map;
