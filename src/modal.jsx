import React, { useState } from 'react';
import Modal from 'react-modal';

// 접근성 설정 (루트 DOM 요소 지정)
Modal.setAppElement('#root');

export default function CustomModal() {
  // 모달 열림 상태를 관리하는 state
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <Modal
        isOpen={isModalOpen} // 모달 열림 상태
        onRequestClose={() => setIsModalOpen(false)} // ESC 키나 오버레이 클릭 시 닫기
        >
        <h2>모달입니다.</h2>
        <p>이곳에 원하는 내용을 작성하세요.</p>
        {/* 닫기 버튼 */}
        <button onClick={() => setIsModalOpen(false)}>닫기</button>
        </Modal>
    );
}