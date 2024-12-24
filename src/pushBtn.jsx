import React, { useRef, useState } from 'react';
import useSound from 'use-sound';
import gsap from 'gsap';
import { Physics2DPlugin } from './plugins/Physics2DPlugin'; // 플러그인 경로를 프로젝트에 맞게 설정

// GSAP Physics2D 플러그인 등록
gsap.registerPlugin(Physics2DPlugin);

export default function PushBtn() {
  const [play] = useSound('/coin.wav'); // 효과음 설정
  const containerRef = useRef(null); // 메시지 컨테이너 참조
  const [messageCount, setMessageCount] = useState(0); // 고유 ID 관리

  // 랜덤 메시지 배열
    const randomMessages = [
        '심장이 두근두근! 2025년 행운 팡팡🍀',
        '✨ 오늘의 행운을 받아가세요!',
        '🎉 대박 나는 2025년 시작!',
        '🍀 꿈과 행운이 가득한 하루!',
        '💎 찬란한 행운이 너에게로!',
        '🍭 달콤한 행운이 입에 쏙! 눌러줘서 고마오~',
        '🌟 쾅쾅쾅! 버튼 터질 때마다 행운 팡팡팡!',
        '💡 누른 순간부터 와르르 쏟아지는 행운',
        '🔑 2025년, 행운의 열쇠는 이미 네 손에 있어!',
    ];

    // 버튼 클릭 핸들러
    const handleClick = () => {
        play(); // 효과음 재생

        const randomMessage =
        randomMessages[Math.floor(Math.random() * randomMessages.length)];

        const newMessageId = `message-${messageCount}`;
        setMessageCount((count) => count + 1);

        // 메시지 박스 생성
        const newBox = document.createElement('div');
        newBox.className = 'box';
        newBox.textContent = randomMessage;
        newBox.style.position = 'absolute';
        newBox.style.top = '55%';
        newBox.style.left = '50%';
        newBox.style.transform = 'translate(-50%, -50%)';
        containerRef.current.appendChild(newBox);

        // GSAP Physics2D 애니메이션 적용
        gsap.to(newBox, {
        physics2D: {
            velocity: Math.random() * 300 + 200, // 랜덤 속도 (200~500px/s)
            angle: Math.random() * 360, // 랜덤 각도 (0~360도)
            gravity: 800, // 중력
        },
        duration: 3, // 애니메이션 지속 시간
        onComplete: () => {
            newBox.remove(); // 애니메이션 완료 후 박스 제거
        },
        });
    };

    return (
        <div className="push-main">
            <div className="line-caption">
                <div class="flowing-text-container">
                        <div class="flowing-text">
                            Push the Luck Button and make a Wish! Push the Luck Button and make a wish! Push the Luck Button and make a wish!
                        </div>
                        <div class="flowing-text">
                            Push the Luck Button and make a Wish! Push the Luck Button and make a wish! Push the Luck Button and make a wish!
                        </div>
                        <div class="flowing-text">
                            Push the Luck Button and make a Wish! Push the Luck Button and make a wish! Push the Luck Button and make a wish!
                        </div>
                        <div class="flowing-text">
                            Push the Luck Button and make a Wish! Push the Luck Button and make a wish! Push the Luck Button and make a wish!
                        </div>
                        <div class="flowing-text">
                            Push the Luck Button and make a Wish! Push the Luck Button and make a wish! Push the Luck Button and make a wish!
                        </div>
                    </div>
                </div>
                <div className="push-title">
                    <img src="/title-text.svg" alt="" />
                    {/* <h1>Push!</h1>
                    <h3>Luck Button</h3> */}
                </div>
                {/* 메시지 컨테이너 */}
                <div ref={containerRef} className="message-container">
            </div>
            {/* 버튼 클릭 시 사운드 및 메시지 생성 */}
            <button className="push-button" onClick={handleClick}>
                <span className="back"></span>
                <span className="front"></span>
            </button>
        </div>
    );
}