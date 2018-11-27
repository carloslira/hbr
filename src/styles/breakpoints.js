const keys = ['xs', 'sm', 'md', 'lg', 'xl'];
const values = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 };

const up = (key, withMedia = true) => {
	let media = '@media';
	let result = `(min-width: ${values[key]}px)`;

	if (withMedia) {
		result = `${media} ${result}`;
	}

	return result;
};

const down = (key, withMedia = true) => {
	const endIndex = keys.indexOf(key) + 1;
	const upperbound = values[keys[endIndex]];

	if (endIndex === keys.length) {
		return up('xs', withMedia);
	}

	let media = '@media';
	let result = `(max-width: ${upperbound - 0.05}px)`;

	if (withMedia) {
		result = `${media} ${result}`;
	}

	return result;
};

const between = (start, end, withMedia = true) => {
	const endIndex = keys.indexOf(end) + 1;

	if (endIndex === keys.length) {
		return up(start, withMedia);
	}

	let media = '@media';
	let result = `(min-width: ${values[start] - 0.05}px and max-width: ${values[keys[endIndex]] - 0.05}px)`;

	if (withMedia) {
		result = `${media} ${result}`;
	}

	return result;
};

const only = (key, withMedia = true) => {
	return between(key, key, withMedia);
};

const width = key => {
	return values[key];
};

const breakpoints = {
	up,
	down,
	keys,
	only,
	width,
	values,
	between
};

export default breakpoints;
