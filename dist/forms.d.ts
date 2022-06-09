import { FC } from "react";
import type { SelectProps, RadioProps } from './forms.d';
export declare const FormTitle: ({ title, className, ...props }: {
    [x: string]: any;
    title?: string | undefined;
    className?: string | undefined;
}) => JSX.Element;
export declare const Radio: ({ onChange, value, title, name, className, ...props }: RadioProps) => JSX.Element;
export declare const Select: FC<SelectProps>;
export declare const Checkbox: ({ name, title, checked, onChange, ...props }: {
    [x: string]: any;
    name?: string | undefined;
    title?: string | undefined;
    checked?: boolean | undefined;
    onChange?: (() => void) | undefined;
}) => JSX.Element;
export declare const Input: ({ append, className, title, ...props }: {
    [x: string]: any;
    append?: string | undefined;
    className?: string | undefined;
    title?: string | undefined;
}) => JSX.Element;
export declare const Textarea: ({ className, title, ...props }: {
    [x: string]: any;
    className?: string | undefined;
    title?: string | undefined;
}) => JSX.Element;
