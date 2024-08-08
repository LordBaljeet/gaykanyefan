import type { Ref } from "vue"

export type Provider = {
    icon: string,
    label: string
}

export type FormField = {
    label: string,
    type: "number" | "text" | "password" | "email" | "url" | "textarea" | "time" | "date" | "search" | "tel" | "file" | "datetime-local" | undefined,
    model: Ref<any | string | number | FileList | null | undefined>,
    rules: ((value: any) => boolean | string | Promise<boolean | string>)[],
    prependIcon?: string,
    password: boolean,
}