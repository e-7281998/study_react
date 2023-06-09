import React, { useEffect } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import Course from "../location/course.json";
import CourseNode from "../location/courseNode.json";
=======
import Positions from "../location/chicken.json";
>>>>>>> temp
=======
import Course from "../location/course.json";
import CourseNode from "../location/courseNode.json";
>>>>>>> fd0b6f2 ([코스와 노드]파일 두 개로 읽고, 선 연결되는지 테스트)
import "../css/map.css";
import axios from "axios";

const { kakao } = window;

function Clusterer(props) {
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

<<<<<<< HEAD
<<<<<<< HEAD
    var linePath = [];

    var course = Course.positions.map((position, i) => {
=======
    var markers = Positions.positions.map((position, i) => {
>>>>>>> temp
=======
    var linePath = [];

    var course = Course.positions.map((position, i) => {
>>>>>>> fd0b6f2 ([코스와 노드]파일 두 개로 읽고, 선 연결되는지 테스트)
      return new kakao.maps.Marker({
        position: new kakao.maps.LatLng(position.lat, position.lng),
      });
    });

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fd0b6f2 ([코스와 노드]파일 두 개로 읽고, 선 연결되는지 테스트)
    var courseNode = CourseNode.positions.map((position, i) => {
      var coordinate = new kakao.maps.LatLng(position.lat, position.lng);
      linePath.push(coordinate);
      return new kakao.maps.Marker({
        position: coordinate,
      });
    });

    // 지도에 표시할 선을 생성합니다
    var polyline = new kakao.maps.Polyline({
      path: linePath, // 선을 구성하는 좌표배열 입니다
      strokeWeight: 5, // 선의 두께 입니다
      strokeColor: "#FFAE00", // 선의 색깔입니다
      strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: "solid", // 선의 스타일입니다
    });

    polyline.setMap(map);

    clusterer.addMarkers(course);
    clusterer.addMarkers(courseNode);
<<<<<<< HEAD
=======
    clusterer.addMarkers(markers);
>>>>>>> temp
=======
>>>>>>> fd0b6f2 ([코스와 노드]파일 두 개로 읽고, 선 연결되는지 테스트)
  }, []);

  return <div id="map"></div>;
}

export default Clusterer;
