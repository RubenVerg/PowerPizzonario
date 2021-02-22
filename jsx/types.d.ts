declare global {
	interface Window {
		jsx: {
			createElement(...args: any[]): any
		}
	}
}

export { }
