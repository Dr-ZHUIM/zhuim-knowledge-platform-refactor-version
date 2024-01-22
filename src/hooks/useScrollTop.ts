import { useCallback, useEffect, useState } from 'react';

export default function useScrollTop(){
	const [scrollTop, setScrollTop] = useState(0);
	const onScroll = useCallback(() => {
		setScrollTop(window.scrollY)
	},[]);
	useEffect(() => {
		window.addEventListener("scrollend", onScroll);
		return () => {
			window.removeEventListener("scrollend", onScroll);
		};
	},[onScroll])
	return scrollTop
}
