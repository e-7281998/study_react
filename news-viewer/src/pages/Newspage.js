import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useParams } from 'react-router-dom';

const NewsPage = () => {
  const params = useParams();
  //카테고리가 선택되지 않았으면 기본값으로 all 사용
  const category = params.category || 'all';

  return (
    <>
      <Categories/>
      <NewsList category={category}/>
    </>
  );
};

export default NewsPage;
