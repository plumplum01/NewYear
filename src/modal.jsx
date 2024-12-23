import React, { useState } from 'react';
import Modal from 'react-modal';
import './modal.css'; // 스타일 분리된 CSS 파일

Modal.setAppElement('#root');

export default function CustomModal() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        overlayClassName="custom-modal-overlay" // 오버레이 스타일
        className="custom-modal-content" // 콘텐츠 스타일
        >
            <p className="modalH2">행운 버튼을 눌러줘!</p>
            <div className='msg'>
                🌟 2025년 행운대박 버튼!🌟<br /><br />
                버튼 하나로 올해의 행운을 가져가볼까?<br />
                클릭하는 순간, 너와 나 모두에게<br />
                행운이 팡팡 쏟아질 거야! 🎆<br /><br />

                2025년, 대박 꿈만 꾸자!<br />
                준비됐지? 그럼 눌러바! 👉✨
            </div>
            <button className='modal-btn' onClick={() => setIsModalOpen(false)}>닫기</button>
        </Modal>
    );
}