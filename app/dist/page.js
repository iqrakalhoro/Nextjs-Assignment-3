"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header_1 = require("./components/Header");
var Footer_1 = require("./components/Footer/Footer");
var image_1 = require("next/image");
var image_jpg_1 = require("./about/image.jpg");
var link_1 = require("next/link");
var page_1 = require("./about/page");
function HomePage() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement("div", { className: "min-h-screen w-full flex flex-col" },
            react_1["default"].createElement("div", { className: "flex-grow flex  bg-[#262525]" },
                react_1["default"].createElement("div", { className: "left-container h-screen flex items-center w-1/2 pl-12 justify-center" },
                    react_1["default"].createElement("div", { className: "ml-8" },
                        react_1["default"].createElement("p", { className: "intro text-2xl text-white" },
                            "Hi I'm ",
                            react_1["default"].createElement("span", { className: "text-[#5db9ee]" }, "Iqra Kalhoro")),
                        react_1["default"].createElement("h1", { className: "text-5xl text-[#5db9ee]" }, "Frontend Developer"),
                        react_1["default"].createElement("p", { className: "detail text-[1.1rem] text-white max-w-[38rem] my-[1.1rem] mb-12 leading-[1.8rem]" }, "I am a part time Graphic Designer. I am enrolled in the GIAIC course to learn more in information technology and AI to enhance my skills, as I am more interested in this field and aspire to be a part-time freelancer or provide my services to any brand or company privately."),
                        react_1["default"].createElement("div", { className: "btn-container flex space-x-20 justify-center" },
                            react_1["default"].createElement("button", { className: "border border-blue-400 text-black bg-blue-400 px-6 py-3 rounded-lg transition duration-500 hover:bg-transparent hover:text-blue-400" },
                                react_1["default"].createElement(link_1["default"], { href: "/services" }, "Services")),
                            react_1["default"].createElement("button", { className: "border border-blue-400 text-blue-400 px-6 py-3 rounded-lg transition duration-500 hover:bg-blue-400 hover:text-black" },
                                react_1["default"].createElement(link_1["default"], { href: "/contact" }, "Contact me"))))),
                react_1["default"].createElement("div", { className: "right-container h-screen flex items-center justify-center w-[50%] " },
                    react_1["default"].createElement("div", { className: 'shadow-box flex justify-center items-center w-[60%] border-2 border-blue-500  h-[60%] rounded-[50%]' },
                        react_1["default"].createElement(image_1["default"], { src: image_jpg_1["default"], alt: '', className: 'w-[370px] h-[370px] rounded-[50%]' })))),
            react_1["default"].createElement(page_1["default"], null),
            react_1["default"].createElement(Skills, null),
            react_1["default"].createElement(Footer_1["default"], null))));
}
exports["default"] = HomePage;
// bg-gradient-to-bl from-[#3877ff] to-[#262525]
