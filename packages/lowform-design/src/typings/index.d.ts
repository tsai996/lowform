type Recordable<T = any> = Record<string, T>
type Nullable<T> = T | null
type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>
