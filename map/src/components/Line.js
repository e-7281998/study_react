import React, { useEffect } from "react";
const { kakao } = window;

function Line(props) {
  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다 //점
    var linePath = [
      new kakao.maps.LatLng(33.452344169439975, 126.56878163224233),
      new kakao.maps.LatLng(37.5499076, 126.9218479),
    ];

    // 지도에 표시할 선을 생성합니다
    var polyline = new kakao.maps.Polyline({
      path: linePath, // 선을 구성하는 좌표배열 입니다
      strokeWeight: 5, // 선의 두께 입니다
      strokeColor: "#FFAE00", // 선의 색깔입니다
      strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: "solid", // 선의 스타일입니다
    });

    // 지도에 선을 표시합니다
    polyline.setMap(map);
  });

  return <div id="map"></div>;
}

export default Line;
