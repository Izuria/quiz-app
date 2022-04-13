"use strict";
exports.id = 134;
exports.ids = [134];
exports.modules = {

/***/ 9134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Container)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__(9894);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
;// CONCATENATED MODULE: ./components/DarkMode.js



const DarkMode = ()=>{
    const { colorMode , toggleColorMode  } = (0,react_.useColorMode)();
    const iconColor = {
        light: "black",
        dark: "white"
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
        icon: colorMode === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx(icons_.SunIcon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(icons_.MoonIcon, {}),
        onClick: toggleColorMode,
        color: iconColor[colorMode]
    });
};
/* harmony default export */ const components_DarkMode = (DarkMode);

;// CONCATENATED MODULE: ./components/Container.js






const Container = ({ children  })=>{
    const { colorMode  } = (0,react_.useColorMode)();
    const bgColor = {
        light: "white",
        dark: "#171717"
    };
    const navHoverBg = {
        light: "gray.500",
        dark: "gray.300"
    };
    const fontColor = {
        light: "black",
        dark: "white"
    };
    const StickNav = styled_default()(react_.Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(100%) blur(20px);
        transition: height .5s, line-height .5s;
    `;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StickNav, {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: "1200px",
                minWidth: "356px",
                width: "100%",
                bg: bgColor[colorMode],
                as: "nav",
                px: [
                    2,
                    6,
                    6
                ],
                py: 2,
                mt: 8,
                mb: [
                    0,
                    0,
                    8
                ],
                mx: "auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "https://github.com/Izuria/",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                as: "a",
                                variant: "ghost",
                                p: [
                                    1,
                                    2,
                                    4
                                ],
                                _hover: {
                                    backgroundColor: navHoverBg[colorMode]
                                },
                                children: "GitHub"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_DarkMode, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                as: "main",
                justifyContent: "center",
                flexDirection: "column",
                bg: bgColor[colorMode],
                color: fontColor[colorMode],
                px: [
                    0,
                    4,
                    4
                ],
                mt: [
                    4,
                    8,
                    8
                ],
                children: children
            })
        ]
    });
};
/* harmony default export */ const components_Container = (Container);


/***/ })

};
;