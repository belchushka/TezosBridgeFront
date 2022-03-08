import React, {useCallback, useEffect, useRef, useState} from 'react';

interface SelectOption {
    title:string,
    id:number
}

interface IStyle {
    [key:string]:string
}


interface Props {
    title:string,
    placeholder?:string,
    options: Array<SelectOption>,
    onClick?:(selectId: number)=>void,
    icon?: React.ReactChild | React.ReactNode | string,
    style?:IStyle,
}

const CustomInput:React.FC<Props> = (props) => {
    const [itemsVisible, setItemsVisible] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState<SelectOption>(props.options[0])
    const selectRef = useRef(null)
    const optionsRef = useRef(null)
    const hideItems = useCallback(()=>{
        setItemsVisible(false)
    },[])
    const showItems = useCallback(()=>{
        setItemsVisible(true)
    },[])
    const selectOption = useCallback((value:SelectOption)=>{
        setSelectedValue(value)
        hideItems()
    },[hideItems])
    useEffect(()=>{
        const callback = (ev: MouseEvent)=>{
            if ((selectRef.current && !selectRef.current.contains(ev.target)) && (optionsRef.current && !optionsRef.current.contains(ev.target)) ){
                hideItems()
            }
        }
        window.addEventListener("click", callback)

        return ()=>{window.removeEventListener("click", callback)}
    },[selectRef, optionsRef])
    return (
        <div style={props.style}>
            <h5 className="text-white font-600 text-xl mb-4">{props.title}</h5>
            <div className="relative">
                <div className="w-full outline-0 border-0 px-4 py-4 rounded-sm appearance-none" style={{
                    background: "rgba(255, 255, 255, 0.3)",
                }} onClick={showItems} ref={selectRef}>
                    <h4 className="text-white text-lg">{selectedValue.title}</h4>
                </div>
                {itemsVisible &&
                    <div className="absolute w-full" ref={optionsRef} style={{
                        top:"60px",
                        left:0,
                        background: "white",
                        zIndex:1000
                    }}>
                        {props.options.map(el=>{
                            return <option className="cursor-pointer w-full outline-0 border-0 px-4 py-4 text-md rounded-sm appearance-none" key={el.id} onClick={()=>{
                                selectOption(el)
                            }
                            } value="id">{el.title}</option>
                        })}
                    </div>
                }
            </div>



        </div>
    );
};

export default CustomInput;