"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = exports.Input = exports.Checkbox = exports.Select = exports.Radio = exports.FormTitle = void 0;
const react_1 = require("react");
const FormTitle = (_a) => {
    var { title = '', className = '' } = _a, props = __rest(_a, ["title", "className"]);
    return (react_1.default.createElement("label", Object.assign({ className: `block text-xs text-gray-400 mb-2 ${className}` }, props), title.toUpperCase()));
};
exports.FormTitle = FormTitle;
const Radio = (_a) => {
    var { onChange, value = '', title = '', name = '', className = '' } = _a, props = __rest(_a, ["onChange", "value", "title", "name", "className"]);
    return (react_1.default.createElement("div", { className: `flex-row-center ${className}` },
        react_1.default.createElement("label", { className: "mr-1 text-xs cursor-pointer", htmlFor: `${name}_${title.toLowerCase()}` }, title),
        react_1.default.createElement("input", Object.assign({ id: `${name}_${title.toLowerCase()}`, value: value, onChange: onChange, type: 'radio', name: name }, props))));
};
exports.Radio = Radio;
const Select = ({ onChange, title, name, value, className, children }) => {
    if (!!title) {
        return (react_1.default.createElement("div", { className: 'flex flex-col ' + className },
            react_1.default.createElement("label", { className: "text-xs text-gray-400 mb-2" }, title.toUpperCase()),
            react_1.default.createElement("select", { name: name, className: 'bg-slate-100 appearance-none px-2 flex-1 cursor-pointer rounded-md text-slate-500 basis-[38px] text-[13px] h-[38px]', onChange: onChange, value: value }, children)));
    }
    else {
        return (react_1.default.createElement("select", { name: name, className: 'bg-slate-100 appearance-none px-2 flex-1 cursor-pointer rounded-md text-slate-500 text-[13px] h-[38px] ' + className, onChange: onChange, value: value }, children));
    }
};
exports.Select = Select;
const Checkbox = (_a) => {
    var { name = '', title = '', checked = false, onChange = () => { } } = _a, props = __rest(_a, ["name", "title", "checked", "onChange"]);
    return (react_1.default.createElement("div", { className: 'flex flex-row flex-1 items-center mb-2' },
        react_1.default.createElement("input", Object.assign({ className: 'cursor-pointer', onChange: onChange, checked: checked, name: name, id: name, type: 'checkbox' }, props)),
        react_1.default.createElement("label", { htmlFor: name, className: 'ml-2 text-[13px] cursor-pointer' }, title)));
};
exports.Checkbox = Checkbox;
const Input = (_a) => {
    var { append = '', className = '', title = '' } = _a, props = __rest(_a, ["append", "className", "title"]);
    if (!!title) {
        return (react_1.default.createElement("div", { className: 'flex flex-col ' + className },
            react_1.default.createElement("label", { className: "text-xs text-gray-400 mb-2" }, title.toUpperCase()),
            react_1.default.createElement("input", Object.assign({}, props, { className: 'px-2 disabled:bg-slate-400 bg-slate-100 grow-0 flex-1 rounded-md text-default-text text-[13px] basis-[38px] h-[38px] outline-none' }))));
    }
    else if (!!append) {
        return (react_1.default.createElement("div", { className: 'px-2 flex-row-center flex-1 bg-slate-100 outline-none rounded-md text-default-text text-[13px] basis-[38px] h-[38px]  ' + className },
            react_1.default.createElement("input", Object.assign({ className: "text-right pr-2 w-full h-full bg-transparent appearance-none outline-none" }, props)),
            react_1.default.createElement("span", { className: "border-left border-l pl-2 border-slate-400 opacity-60" }, append)));
    }
    else {
        return (react_1.default.createElement("input", Object.assign({}, props, { className: 'px-2 flex-1 disabled:bg-slate-400 bg-slate-100 outline-none rounded-md text-default-text text-[13px] basis-[38px] h-[38px]  ' + className })));
    }
};
exports.Input = Input;
const Textarea = (_a) => {
    var { className = '', title = '' } = _a, props = __rest(_a, ["className", "title"]);
    if (!!title) {
        return (react_1.default.createElement("div", { className: 'flex flex-col ' + className },
            react_1.default.createElement("label", { className: "text-xs font-bold text-slate-600 mb-2" }, title),
            react_1.default.createElement("textarea", Object.assign({}, props, { className: 'px-2 py-2 resize-none flex-1 rounded-md text-default-text h-full text-[13px] border border-slate-300' }))));
    }
    else {
        return (react_1.default.createElement("textarea", Object.assign({}, props, { className: 'px-2 py-2 resize-none flex-1 rounded-md text-default-text h-full text-[13px] border border-slate-300 ' + className })));
    }
};
exports.Textarea = Textarea;
