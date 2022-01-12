import React, { useState } from 'react';
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import '../../styles/quetions.css'


export default function Question({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        setShowAnswer(!showAnswer);
    }

    return (
        <div className="container question --card">
            <div className="question-title --flex-between">
                <h4 className="--text-p --fw-bold">
                    {question}
                </h4>
                <button className="question-icon" onClick={handleClick}>
                    {showAnswer ? (
                        <FiMinusCircle />
                    ) : (
                            <FiPlusCircle />
                        )
                    }
                </button>
            </div>
            <div className="question-answer">
                {showAnswer && <p>{answer}</p>}
            </div>
        </div>
    )
}
