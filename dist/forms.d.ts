import { FC } from "react";
import type { SelectProps, RadioProps } from './forms.d';
export declare const FormTitle: ({ title, className, ...props }: {
    [x: string]: any;
    title?: string;
    className?: string;
}) => any;
export declare const Radio: ({ onChange, value, title, name, className, ...props }: RadioProps) => any;
export declare const Select: FC<SelectProps>;
export declare const Checkbox: ({ name, title, checked, onChange, ...props }: {
    [x: string]: any;
    name?: string;
    title?: string;
    checked?: boolean;
    onChange?: () => void;
}) => any;
export declare const Input: ({ append, className, title, ...props }: {
    [x: string]: any;
    append?: string;
    className?: string;
    title?: string;
}) => any;
export declare const Textarea: ({ className, title, ...props }: {
    [x: string]: any;
    className?: string;
    title?: string;
}) => any;
