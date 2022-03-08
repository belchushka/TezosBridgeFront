import React from 'react';
import {getBindingIdentifiers} from "@babel/types";
import keys = getBindingIdentifiers.keys;

interface IStyle {
    [key:string]:string
}

interface Props {
    title:string,
    onClick:()=>void,
    style?:IStyle
}

const CustomButton: React.FC<Props> = (props) => {

    return (
        <>
            <button className="w-full py-5 text-center text-white rounded-md text-xl font-bold" onClick={props.onClick} style={{
                background: "linear-gradient(91.01deg, #A94AD6 13.42%, #00A0A6 104.71%)",
                ...props.style
            }}>
                {props.title}
            </button>
        </>
    )
};

export default CustomButton;