import React from 'react';
import UserSidebar from '../UserSidebar';

const Conversations = () => {
    return (
        <div className="p-10 bg-white mt-20 mb-20">
            <div className="max-w-full mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-2">
                    <div className="lg:w-8/12 lg:mx-auto text-end  mb-5">
                        <UserSidebar></UserSidebar>

                    </div>
                    <div className="lg:w-8/12 p-5 border rounded">
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
                        </div>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
                        </div>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-accent">That's never been done in the history of the Jedi. It's insulting!</div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-error">It's never happened before.</div>
                        </div>
                        <div className="flex mt-40">
                            <input type="text" className=" h-12 w-3/4 border rounded "/>
                            {/* <button className="btn ">Send</button> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Conversations;