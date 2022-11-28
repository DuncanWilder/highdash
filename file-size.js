const util = require('util');
const chalk = require('chalk');
const exec = util.promisify(require('child_process').exec);
const {readdirSync} = require('fs');

function getDirectories(source) {
	return readdirSync(source, {withFileTypes: true})
		.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name);
}

function humanFileSize(bytes, si = false, dp = 1) {
	const thresh = si ? 1000 : 1024;

	if (Math.abs(bytes) < thresh) {
		return bytes + ' B';
	}

	const units = si
		? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
		: ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
	let u = -1;
	const r = 10 ** dp;

	do {
		bytes /= thresh;
		++u;
	} while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

	return bytes.toFixed(dp) + ' ' + units[u];
}

/**
 * Sizes from the Import Cost VSCode extension
 */
const lodashSizesGzipped = {
	camelCase: 2900,
	chunk: 1600,
	cloneDeep: 5300,
	compact: 437,
	concat: 1100,
	find: 6700,
	flatten: 1000,
	flattenDeep: 1000,
	flattenDepth: 1400,
	groupBy: 6600,
	has: 3000,
	includes: 2500,
	isEmpty: 2300,
	isEqual: 4900,
	kebabCase: 2500,
	merge: 4900,
	noop: 383,
	pick: 4000,
	round: 1400,
	snakeCase: 2500,
	some: 6500,
	sortBy: 7400,
	startCase: 2800,
	throttle: 1500,
	upperFirst: 1400,
};

async function main() {
	const directories = getDirectories('./dist');
	let totalSize = 0;
	let amountSaved = 0;
	for (const directory of directories) {
		// eslint-disable-next-line no-await-in-loop
		const gzipSizeInBytes = parseInt(await (await exec(`gzip -c ./dist/${directory}/${directory}.js | wc -c`)).stdout.trim());
		totalSize += gzipSizeInBytes;
		const paddedFileName = `${directory} `.padEnd(25, '-');
		const fileSize = chalk.yellow(humanFileSize(gzipSizeInBytes));
		const compactedSize = lodashSizesGzipped[directory] ? lodashSizesGzipped[directory] - gzipSizeInBytes : 0;
		const compactedSizePrintOut = compactedSize ? chalk.green`(-${humanFileSize(compactedSize)})` : '';
		amountSaved += compactedSize;
		console.log(
			paddedFileName,
			fileSize,
			compactedSizePrintOut,
		);
	}

	console.log('-'.padEnd(25, '-'));
	console.log('Size '.padEnd(25, '-'), chalk.green(humanFileSize(totalSize)));
	console.log('Size saved versus Lodash '.padEnd(25, '-'), chalk.green(humanFileSize(amountSaved)));
}

main();
