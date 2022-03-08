import React, {ReactElement} from 'react';
import ContentLayout from "../../layouts/ContentLayout";
import FormBg from "../../public/FormBg.png"
import CustomButton from "../../components/Buttons/CustomButton";
import CustomSelect from "../../components/Selects/CustomSelect";
import CustomInput from "../../components/Inputs/CustomInput";

const options = [
    {
        id: 1,
        title: "Ethereum"
    },
    {
        id: 2,
        title: "Avalanche"
    }
]

const Index = () => {
    return (
        <ContentLayout>
            <div className="w-full flex justify-center min-h-screen items-center">
                <div className="w-9/12 rounded-2xl pt-10 pb-10 pl-12 pr-12" style={{
                    background: "url('/FormBg.png') center/cover no-repeat",
                }}>
                    <div className="">
                        <div className="flex justify-between" style={{
                            marginTop: "-20px"
                        }}>
                            <section className="" style={{
                                width: "48%"
                            }}>
                                <CustomSelect style={{
                                    marginTop: "20px"
                                }} title={"Network from"} options={options}/>

                                <CustomSelect style={{
                                    marginTop: "20px"
                                }} title={"Coin from"} options={options}/>
                            </section>
                            <section className="" style={{
                                width: "46%"
                            }}>
                                <CustomSelect style={{
                                    marginTop: "20px"
                                }} title={"Network to"} options={options}/>
                                <CustomSelect style={{
                                    marginTop: "20px"
                                }} title={"Coin to"} options={options}/>
                            </section>
                        </div>
                        <CustomInput style={{
                            marginTop: "20px"
                        }} title={"Amount"} placeholder={"0.00000"}/>
                        <CustomButton style={{
                            marginTop: "40px"
                        }} title={"Transfer"} onClick={() => {
                        }}/>
                    </div>

                </div>
            </div>
        </ContentLayout>

    );
};

export default Index