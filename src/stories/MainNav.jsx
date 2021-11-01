import React from "react";
import { Menu } from "antd";
import PropTypes from "prop-types";
import 'antd/dist/antd.css';

export const MainNav = ({ color, selectedKey }) => {
    return (
        <Menu defaultSelectedKeys={selectedKey} style={{ color }}>
            <Menu.Item onClick={_ => console.log("clicked: Home")} key={"home"}>Home</Menu.Item>
            <Menu.Item onClick={_ => console.log("clicked: Product")} key={"product"}>Product</Menu.Item>
            <Menu.Item onClick={_ => console.log("clicked: Category")} key={"category"}>Category</Menu.Item>
        </Menu>
    );
};

MainNav.propTypes = {
    color: PropTypes.string,
    selectedKey: PropTypes.oneOf(["product", "category"])
};

MainNav.defaultProps = {
    color: undefined,
    selectedKey: "home"
};
