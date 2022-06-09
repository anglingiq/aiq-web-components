"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = exports.Input = exports.Checkbox = exports.Select = exports.Radio = exports.FormTitle = void 0;
var react_1 = __importDefault(require("react"));
var FormTitle = function (_a) {
    var _b = _a.title, title = _b === void 0 ? '' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, props = __rest(_a, ["title", "className"]);
    return (react_1.default.createElement("label", __assign({ className: "block text-xs text-gray-400 mb-2 ".concat(className) }, props), title.toUpperCase()));
};
exports.FormTitle = FormTitle;
var Radio = function (_a) {
    var onChange = _a.onChange, _b = _a.value, value = _b === void 0 ? '' : _b, _c = _a.title, title = _c === void 0 ? '' : _c, _d = _a.name, name = _d === void 0 ? '' : _d, _e = _a.className, className = _e === void 0 ? '' : _e, props = __rest(_a, ["onChange", "value", "title", "name", "className"]);
    return (react_1.default.createElement("div", { className: "flex-row-center ".concat(className) },
        react_1.default.createElement("label", { className: "mr-1 text-xs cursor-pointer", htmlFor: "".concat(name, "_").concat(title.toLowerCase()) }, title),
        react_1.default.createElement("input", __assign({ id: "".concat(name, "_").concat(title.toLowerCase()), value: value, onChange: onChange, type: 'radio', name: name }, props))));
};
exports.Radio = Radio;
var Select = function (_a) {
    var onChange = _a.onChange, title = _a.title, name = _a.name, value = _a.value, className = _a.className, children = _a.children;
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
var Checkbox = function (_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, _c = _a.title, title = _c === void 0 ? '' : _c, _d = _a.checked, checked = _d === void 0 ? false : _d, _e = _a.onChange, onChange = _e === void 0 ? function () { } : _e, props = __rest(_a, ["name", "title", "checked", "onChange"]);
    return (react_1.default.createElement("div", { className: 'flex flex-row flex-1 items-center mb-2' },
        react_1.default.createElement("input", __assign({ className: 'cursor-pointer', onChange: onChange, checked: checked, name: name, id: name, type: 'checkbox' }, props)),
        react_1.default.createElement("label", { htmlFor: name, className: 'ml-2 text-[13px] cursor-pointer' }, title)));
};
exports.Checkbox = Checkbox;
var Input = function (_a) {
    var _b = _a.append, append = _b === void 0 ? '' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.title, title = _d === void 0 ? '' : _d, props = __rest(_a, ["append", "className", "title"]);
    if (!!title) {
        return (react_1.default.createElement("div", { className: 'flex flex-col ' + className },
            react_1.default.createElement("label", { className: "text-xs text-gray-400 mb-2" }, title.toUpperCase()),
            react_1.default.createElement("input", __assign({}, props, { className: 'px-2 disabled:bg-slate-400 bg-slate-100 grow-0 flex-1 rounded-md text-default-text text-[13px] basis-[38px] h-[38px] outline-none' }))));
    }
    else if (!!append) {
        return (react_1.default.createElement("div", { className: 'px-2 flex-row-center flex-1 bg-slate-100 outline-none rounded-md text-default-text text-[13px] basis-[38px] h-[38px]  ' + className },
            react_1.default.createElement("input", __assign({ className: "text-right pr-2 w-full h-full bg-transparent appearance-none outline-none" }, props)),
            react_1.default.createElement("span", { className: "border-left border-l pl-2 border-slate-400 opacity-60" }, append)));
    }
    else {
        return (react_1.default.createElement("input", __assign({}, props, { className: 'px-2 flex-1 disabled:bg-slate-400 bg-slate-100 outline-none rounded-md text-default-text text-[13px] basis-[38px] h-[38px]  ' + className })));
    }
};
exports.Input = Input;
var Textarea = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.title, title = _c === void 0 ? '' : _c, props = __rest(_a, ["className", "title"]);
    if (!!title) {
        return (react_1.default.createElement("div", { className: 'flex flex-col ' + className },
            react_1.default.createElement("label", { className: "text-xs font-bold text-slate-600 mb-2" }, title),
            react_1.default.createElement("textarea", __assign({}, props, { className: 'px-2 py-2 resize-none flex-1 rounded-md text-default-text h-full text-[13px] border border-slate-300' }))));
    }
    else {
        return (react_1.default.createElement("textarea", __assign({}, props, { className: 'px-2 py-2 resize-none flex-1 rounded-md text-default-text h-full text-[13px] border border-slate-300 ' + className })));
    }
};
exports.Textarea = Textarea;
