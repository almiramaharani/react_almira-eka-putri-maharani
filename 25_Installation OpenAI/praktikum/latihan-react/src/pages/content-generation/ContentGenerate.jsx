import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getResponse } from '../../store/responseAISlice';

import { Spin } from "antd";
import ChatBubble from '../../components/bubble-chat/ChatBubble';
import "bootstrap/dist/css/bootstrap.min.css";
import './ContentGenerate.css';


export default function ContentGenerate() {
    const isLoading = useSelector((state) => state.response.isLoading);
    const response = useSelector((state) => state.response.data);
    const dispatch = useDispatch();

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { content: 'Halo, deskripsi produk apa yang anda cari?', isUser: false},
    ]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessages((prevMessages) => [
            ...prevMessages,
            {content: input, isUser: true},
        ]);
        
        dispatch(getResponse(input))
        .then((response) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                {content: response.payload, isUser: false},
            ]);
        });
        setInput('');
    }


    return (
        <>
            <div className="mainContainer">
                <h2 style={{textAlign: 'center'}}>Product's Description Generate</h2>
                <div className="chatContainer">
                    <div className='chatMessage'>
                        {messages.map((message, index) => (
                            <ChatBubble key={index} content={message.content} isUser={message.isUser}/>
                            ))}
                    </div>
                    <Spin spinning={isLoading} size="large" tip="Loading..." style={{marginTop: "5px"}}></Spin>
                    
                </div>
                <div className='inputContainer'>
                    <form>
                        <div className='inputWrapper'>
                            <textarea 
                                name="input"
                                className='form-control' 
                                placeholder="Masukkan nama atau jenis produk"
                                onChange={(e) => setInput(e.target.value)}
                                ></textarea>
                                <button className="sendButton" onClick={handleSubmit}>
                                    <i class="fa-sharp fa-solid fa-paper-plane-top fa-lg"></i>
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}