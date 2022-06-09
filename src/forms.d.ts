import {  ChangeEventHandler, ReactNode } from "react";

export type SelectProps = {
    onChange: ChangeEventHandler<HTMLSelectElement>,
    title?: string,
    value: string,
    name?: string,
    className?: string,
    children: ReactNode
}

export type RadioProps = {
    onChange: ChangeEventHandler,
    value: string | number,
    title: string,
    name: string,
    className?: string,
    checked: boolean
}