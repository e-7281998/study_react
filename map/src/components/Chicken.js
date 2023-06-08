import React, { useEffect } from "react";
import Positions from "../location/chicken.json";
import "../css/map.css";
import axios from "axios";

const { kakao } = window;

function Chicken(props) {
  useEffect(() => {
    var map = new kakao.maps.Map(document.getElementById("map"), {
      // 지도를 표시할 div
      center: new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표 //대한민국 중심좌표
      level: 14, // 지도의 확대 레벨
    });

    // 마커 클러스터러를 생성합니다
    var clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 10, // 클러스터 할 최소 지도 레벨
    });

    var markers = Positions.positions.map((position, i) => {
      return new kakao.maps.Marker({
        position: new kakao.maps.LatLng(position.lat, position.lng),
      });
    });

    clusterer.addMarkers(markers);
  }, []);

  return <div id="map"></div>;
}

export default Chicken;
