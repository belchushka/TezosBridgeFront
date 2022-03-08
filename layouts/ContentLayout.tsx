import React, {PropsWithChildren} from 'react';
import SideBar from "../components/SideBar/SideBar";

const ContentLayout:React.FC = (props: PropsWithChildren<any>) => {
    const {children} = props
    return (
        <div className="w-full flex justify-between">
            <SideBar/>
            <div className="flex-auto min-h-screen" style={{background:"#1E2228"}}>
                {children}
            </div>
        </div>
    );
};

export default ContentLayout;