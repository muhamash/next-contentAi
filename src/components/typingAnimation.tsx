'use client'

import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
    message: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = (props) => {
    const message = props.message.trim();
    const [currentText, setCurrentText] = useState<string>('');
    const [isTyping, setIsTyping] = useState<boolean>(true);

    useEffect(() => {
        let textIndex = 0;
        let typingInterval: NodeJS.Timeout;

        if (isTyping) {
            typingInterval = setInterval(() => {
                setCurrentText(prevText => {
                    if (textIndex < message.length) {
                        textIndex++;
                        return message.slice(0, textIndex);
                    } else {
                        clearInterval(typingInterval);
                        setIsTyping(false);
                        return prevText;
                    }
                });
            }, 110);
        }

        return () => clearInterval(typingInterval);
    }, [isTyping, message]);

    return (
        <div className="py-5">
            <p>
                {currentText}
                {isTyping && <span className="animate-blink">...</span>}
            </p>
        </div>
    );
};

export default TypingAnimation;