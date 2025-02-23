'use client';

import { useEffect, useState } from 'react';
import { useToastStore } from '@/stores/useToastStore';
import Link from 'next/link';

export default function LinkToast() {
  const { toastText, showLinkToast, closeLinkToast } = useToastStore(); // 전역 상태 가져오기
  const [opacity, setOpacity] = useState(false);

  useEffect(() => {
    if (showLinkToast) {
      setOpacity(true); // 토스트가 보일 때 페이드인

      const fadeOutTimer = setTimeout(() => {
        setOpacity(false); // 2초 후 페이드아웃
      }, 2000);

      const closeTimer = setTimeout(() => {
        closeLinkToast(); // 페이드아웃이 끝난 후 실제로 토스트 닫기
      }, 3000); // 3초 후에 토스트를 완전히 숨기기

      // 컴포넌트 언마운트 시 타이머 정리
      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [showLinkToast, closeLinkToast]);

  // opacity가 false이면서 showToast가 false일 경우 null 반환
  if (!showLinkToast && !opacity) return null;

  return (
    <div
      className={`max-w-480 toast toast-center z-[21] mb-9 w-full transition-opacity duration-1000 ${
        opacity ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="bg-sansu-black px-4.5 flex h-12 content-center justify-between rounded-lg py-2.5 text-sm font-medium">
        <span className="text-white">{toastText}</span>
        <Link href={'/cart'} className="text-white underline">
          바로가기
        </Link>
      </div>
    </div>
  );
}
