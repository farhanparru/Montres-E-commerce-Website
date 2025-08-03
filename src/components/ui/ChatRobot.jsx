// src/components/ChatRobot.jsx
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ChatRobot = () => {
  return (
    <div className="fixed bottom-6 right-6 w-[280px] h-[280px] z-50 cursor-pointer">
      <DotLottieReact
        src="https://lottie.host/9b9ef5f4-73aa-41a1-9cdc-ab5a29398587/KdQYjNOWSv.lottie"
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default ChatRobot;