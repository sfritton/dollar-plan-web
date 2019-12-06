type LooseObject = Record<string, any>;

type AnyFunction<R = any> = (...args: any[]) => R;

type AtMinimum<T> = T & LooseObject;
