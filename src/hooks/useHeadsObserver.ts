import {useState,useRef,useEffect, useCallback} from 'react';

export default function useHeadsObserver(elementsSelector:string) {
  const observer = useRef<IntersectionObserver>()
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleObsever = (entries:any) => {
			entries.forEach((entry:any) => {
				if (entry.isIntersecting) {
					setActiveId(entry.target.id)
				}
			})
		}
    observer.current = new IntersectionObserver(handleObsever, {threshold: 1, rootMargin: '0px 0px -500px 0px'})
		const elements = document.querySelectorAll(elementsSelector)
  	elements.forEach((elem) => observer.current!.observe(elem))
  	return () => observer.current?.disconnect()
  }, [elementsSelector])

  return activeId
}