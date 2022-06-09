import React, { FC } from "react";

import type { SelectProps, RadioProps} from './forms.d';

export const FormTitle = ({ title = '', className = '', ...props }) => (
    <label className={`block text-xs text-gray-400 mb-2 ${className}`} {...props}>{title.toUpperCase()}</label>
);


export const Radio = ({ onChange, value = '', title = '', name = '', className = '', ...props }: RadioProps) => (
    <div className={`flex-row-center ${className}`}>
        <label className="mr-1 text-xs cursor-pointer" htmlFor={`${name}_${title.toLowerCase()}`}>{title}</label>
        <input id={`${name}_${title.toLowerCase()}`} value={value} onChange={onChange} type='radio' name={name} {...props}/>
    </div>
);

export const Select: FC<SelectProps> = ({ onChange, title, name, value, className, children }: SelectProps) => {

    if (!!title) {
        return (
            <div className={'flex flex-col ' + className}>
                <label className="text-xs text-gray-400 mb-2">{title.toUpperCase()}</label>
                <select name={name} className='bg-slate-100 appearance-none px-2 flex-1 cursor-pointer rounded-md text-slate-500 basis-[38px] text-[13px] h-[38px]' onChange={onChange} value={value}>
                    {children}
                </select>
            </div>
        )
    } else {
        return (
            <select name={name} className={'bg-slate-100 appearance-none px-2 flex-1 cursor-pointer rounded-md text-slate-500 text-[13px] h-[38px] ' + className} onChange={onChange} value={value}>
                {children}
            </select>
        );
    }
};

export const Checkbox = ({ name = '', title = '', checked = false, onChange = () => { }, ...props }) => {
    return (
        <div className='flex flex-row flex-1 items-center mb-2'>
            <input className='cursor-pointer' onChange={onChange} checked={checked} name={name} id={name} type='checkbox' {...props} />
            <label htmlFor={name} className='ml-2 text-[13px] cursor-pointer'>{title}</label>
        </div>
    )
};

export const Input = ({ append = '', className = '', title = '', ...props }) => {
    if (!!title) {
        return (
            <div className={'flex flex-col ' + className}>
                <label className="text-xs text-gray-400 mb-2">{title.toUpperCase()}</label>
                <input {...props} className={'px-2 disabled:bg-slate-400 bg-slate-100 grow-0 flex-1 rounded-md text-default-text text-[13px] basis-[38px] h-[38px] outline-none'} />
            </div>
        )
    } else if (!!append) {
        return (
            <div className={'px-2 flex-row-center flex-1 bg-slate-100 outline-none rounded-md text-default-text text-[13px] basis-[38px] h-[38px]  ' + className}>
                <input className="text-right pr-2 w-full h-full bg-transparent appearance-none outline-none" {...props}/>
                <span className="border-left border-l pl-2 border-slate-400 opacity-60">{append}</span>
            </div>
        )
    } else {
        return (
            <input {...props} className={'px-2 flex-1 disabled:bg-slate-400 bg-slate-100 outline-none rounded-md text-default-text text-[13px] basis-[38px] h-[38px]  ' + className} />
        )
    }
};

export const Textarea = ({ className = '', title = '', ...props }) => {
    if (!!title) {
        return (
            <div className={'flex flex-col ' + className}>
                <label className="text-xs font-bold text-slate-600 mb-2">{title}</label>
                <textarea {...props} className={'px-2 py-2 resize-none flex-1 rounded-md text-default-text h-full text-[13px] border border-slate-300'} />
            </div>
        )
    } else {
        return (
            <textarea {...props} className={'px-2 py-2 resize-none flex-1 rounded-md text-default-text h-full text-[13px] border border-slate-300 ' + className} />
        );
    }
}