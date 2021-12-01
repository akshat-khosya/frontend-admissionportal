import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
function Instruction(props){
    
    function instructionClick(){
        props.GoTo(2);
    }
    return (
        <>
            <div className="con-instruction">
                <h1>Instruction</h1>
                <div className="instruction-points">
                    <ol className="instruction-ol">
                        <li className="instruction-li">
                            Create you account by registering yourself at localhost:3000/register
                        </li>
                        <li className="instruction-li">
                            Then verify your account by the link sent to your respective email id.
                        </li>
                        <li className="instruction-li">
                            When a user is verified the we can login at localhost:4000/
                        </li>
                        <li className="instruction-li">
                            After a user login his/her cerdiential will be autologin for 7 days.
                        </li>
                        <li className="instruction-li">
                            Welecome to Dashboard you can navigate to the folloing links.
                        </li>
                        <li className="instruction-li">
                        JSX stands for JavaScript XML. It is a JavaScript syntax extension. Its an XML or HTML like syntax used by ReactJS. This syntax is processed into JavaScript calls of React Framework. It extends the ES6 so that HTML like text can co-exist with JavaScript react code. It is not necessary to use JSX, but it is recommended to use in ReactJS.
                        </li>
                        <li className="instruction-li">
                        ReactJS is all about components. ReactJS application is made up of multiple components, and each component has its own logic and controls. These components can be reusable which help you to maintain the code when working on larger scale projects.
                        </li>
                        <li className="instruction-li">
                        ReactJS is designed in such a manner that follows unidirectional data flow or one-way data binding. The benefits of one-way data binding give you better control throughout the application. If the data flow is in another direction, then it requires additional features. It is because components are supposed to be immutable and the data within them cannot be changed. Flux is a pattern that helps to keep your data unidirectional. This makes the application more flexible that leads to increase efficiency.
                        </li>
                        <li className="instruction-li">
                        A virtual DOM object is a representation of the original DOM object. It works like a one-way data binding. Whenever any modifications happen in the web application, the entire UI is re-rendered in virtual DOM representation. Then it checks the difference between the previous DOM representation and new DOM. Once it has done, the real DOM will update only the things that have actually changed. This makes the application faster, and there is no wastage of memory.
                        </li>
                    </ol>
                    <div className="instruction-btn">
                        <Button onClick={instructionClick} size="lg">Continue</Button>
                    </div>
                </div>
            </div>
            
        </>
    );
}
export default Instruction;

