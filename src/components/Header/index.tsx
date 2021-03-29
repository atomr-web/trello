import React from "react";
import logo from "Assets/img/logo.svg";
import boards from "Assets/img/boards.svg";
import Divider from "../../uiComponents/Divider";

export const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <div className="header__left">
                    <img src={logo} alt="" />
                    <Divider />
                    <a href="#">
                        <img src={boards} alt="" />
                        Boards
                    </a>
                    <form action="#">
                        <input type="text" />
                        <button type="submit" />
                    </form>
                </div>
            </div>
        </header>
    );
};
