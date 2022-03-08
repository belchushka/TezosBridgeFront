import React, {useCallback, useEffect, useRef, useState} from 'react';

interface SelectOption {
    title: string,
    id: number
}

interface IStyle {
    [key: string]: string
}


interface Props {
    title: string,
    placeholder?: string,
    style?: IStyle,
}

const CustomInput: React.FC<Props> = (props) => {

    return (
        <div style={props.style}>
            <h5 className="text-white font-600 text-xl mb-4">{props.title}</h5>
            <div className="relative">
                <input type={"number"} className="w-full outline-0 border-0 px-4 py-4 rounded-sm text-lg text-white"
                       style={{
                           background: "rgba(255, 255, 255, 0.3)",
                       }} placeholder={props.placeholder}/>
                <style jsx>{
                    `
                      input::-webkit-outer-spin-button,
                      input::-webkit-inner-spin-button {
                        /* display: none; <- Crashes Chrome on hover */
                        -webkit-appearance: none;
                        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
                      }
                    `
                }</style>
            </div>


        </div>
    );
};

export default CustomInput;