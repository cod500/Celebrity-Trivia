import React, { useState, useEffect } from 'react';
import '../../styles/index.css';
import data from '../data/data.js'
import { FiTv } from "react-icons/fi";
import Question from '../questions/Question.js';


export default function Faq() {


    const [faqs, setfaqs] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await data();

            setfaqs(response.data.results);
        }

        getData()
            .catch(console.error)

    }, []);

    console.log(faqs)


    return (
        <section className="faq-section">
            <div className="container faq">
                <div className="title --center-all">
                    <FiTv size={30} color="red" />
                    <h2 className="--mb2">Celebrity Trivia</h2>
                    <p>Everchanging list of Celebrity trivia. Click the plus icon to see the answer.</p>
                    {faqs.map((faq, i) => {
                        return <Question key={i} question={faq.question} answer={faq.correct_answer} />
                    })}

                </div>
            </div>
        </section>
    )
}