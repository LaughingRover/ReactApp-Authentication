import { useEffect, useState } from 'react'

let valFunc = () => (key, value) => {
	const returnValue = localStorage.getItem(key)

	if (returnValue === null) {
		localStorage.setItem(key, value)
	} else {
		return returnValue
	}
}

valFunc('name', 'Prince')

const useLocalStorage = (key, value) => {
	const [val, setVal] = useState(() => valFunc(key, value))

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(val))
	}, [key, val])

	return [val, setVal]
}

export default useLocalStorage