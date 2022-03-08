import React from 'react';
import Logo from "../../assets/icons/Logo.svg"
import Telegram from "../../assets/icons/Telegram.svg"
import Mail from "../../assets/icons/Mail.svg"
import Link from "next/link"

const styles = {
    gradientBg: {
        background: "linear-gradient(180deg, #A94AD6 0%, #00A0A6 100%)"
    }
}

const SideBar: React.FC = () => {
    return (
        <>
            <div className="w-52 h-screen bg-black pt-14 pb-14 pl-6 flex flex-col justify-between" style={styles.gradientBg}>
                <div>
                    <Logo/>
                    <nav className="mt-12">
                        <Link href={""}>
                            <h3 className="text-lg mt-4 text-white">Home</h3>
                        </Link>
                        <Link href={""}>
                            <h3 className="text-lg mt-4 text-white">Transaction</h3>
                        </Link>
                        <Link href={""}>
                            <h3 className="text-lg mt-4 text-white">Validation</h3>
                        </Link>
                        <Link href={""}>
                            <h3 className="text-lg mt-4 text-white">Profile</h3>
                        </Link>
                    </nav>
                </div>
                <div className="">
                    <div className="flex">
                        <Telegram/>
                        <div className="ml-2">
                            <Mail />
                        </div>
                    </div>
                    <p className="text-white text-sm mt-2">version 1.0.0</p>
                </div>

            </div>
        </>
    );
};

export default SideBar;