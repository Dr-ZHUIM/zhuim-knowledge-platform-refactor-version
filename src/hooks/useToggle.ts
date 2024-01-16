import {useState,useCallback} from "react";

export default function useToggle(initialValue = false):[boolean, (target?:boolean) => void] {
	const [value, setValue] = useState(initialValue);
	const toggle = useCallback((target?:boolean) => setValue(v => target !== undefined ? target : !v), []);
	return [value, toggle]
}