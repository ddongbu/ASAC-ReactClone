'use client';

import SignupForm from '@/components/SignupForm';
import Link from 'next/link';
import React from 'react';
import Wanted from '/public/wanted.svg';
import '/src/style/global.css';

const Page: React.FC = () => {
  return (
    <>
      <main className=" bg-neutral-100 flex justify-center items-center w-full h-screen m-auto">
        <div className=" relative w-1/5 m-auto">
          <div className="border-2 border-gray-300 rounded-lg p-5 bg-white w-full">
            <div className="flex items-center justify-center py-4">
              <div className="inline-block text-center">
                <Wanted className=" w-40 ml-10 h-auto" />
                <br></br>
                <span className="text-3xl font-semibold">
                  하나의 계정으로 <br></br> 더욱 편리하게
                </span>
                <br></br>
                <br></br>
                <span className="text-slate-400">
                  원티드가 제공하는 서비스를<br></br>
                  하나의 계정으로 모두 이용할 수 있습니다.
                </span>
              </div>
            </div>
            <SignupForm />
            <div className="flex justify-center items-center w-full text-center">
              <Link href="/login" className="text-blue-700">
                로그인 하러가기
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
