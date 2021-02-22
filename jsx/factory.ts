type Tags = string;
type AllTagAttrs = { [tag: string]: any };
type TagAttrs<Tag extends Tags> = AllTagAttrs[Tag];
type TagHTMLs<Tag extends Tags> = HTMLElement;

window.jsx = (function (document: Document) {
	function listener(elem: HTMLElement, name: string, listener: EventListenerOrEventListenerObject) {
		elem.addEventListener(name, listener);
		return elem;
	}

	function addChild(elem: HTMLElement, child: any) {
		if (child == null) return elem;
		else if (Array.isArray(child)) {
			for (let child_ of Array.from(child)) {
				addChild(elem, child_);
			}
		} else if (typeof child == 'string') {
			elem.appendChild(document.createTextNode(child));
		} else if (child instanceof Node) {
			elem.appendChild(child);
		} else if (typeof child == 'boolean') {
			// { condition && <element /> } === if (condition) <element /> else fa
		} else {
			elem.appendChild(document.createTextNode(String(child)));
		}
		return elem;
	}

	return {
		createElement<Tag extends Tags>(tagName: Tag, attributes: TagAttrs<Tag> | null, ...children: any[]): TagHTMLs<Tag> {
			const elem = document.createElement(tagName) as TagHTMLs<Tag>;

			if (!attributes) attributes = {};

			for (let key in attributes) {
				const value = attributes[key];

				if (key === 'className') { // React's JSX doesn't support JS keywords as tags, so support for these is for compatibility
					elem.setAttribute('class', value);
				} else if (key.startsWith('html-')) { // same, eg <label html-for='id' />
					elem.setAttribute(key.slice(5), value);
				} else if (key.startsWith('on-')) { // <button on-click={ev => void 0} />
					listener(elem, key.slice(3), value);
				} else if (key.startsWith('@')) { // Vue-style @click === on-click
					listener(elem, key.slice(1), value);
				} else if (typeof value == 'boolean') { // <button disabled /> === <button disabled='disabled' />
					elem.setAttribute(key, key);
				} else {
					elem.setAttribute(key, value);
				}
			}

			for (let child of children) addChild(elem, child);

			return elem;
		}
	}
})(document);
