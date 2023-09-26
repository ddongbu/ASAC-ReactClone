'use client';

import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import '../style/global.css';

const Page: React.FC = () => {
  return (
    //1. 로컬스토리지 창 껏을때 손실
    //2. 비밀번호or아이디 틀렸을시 밑에 알려주기
    //3. 이력서 작성 경험 관점으로 충분히
    //4. CI/CD 복습
    <>
      <Header />
      <Main />
      <hr></hr>
      <Footer />
    </>
  );
};

export default Page;
