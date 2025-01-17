# highdash

A lightweight replacement for Lodash

## Why does this exist?

There are some high level goals for this repo;

* To show that you might not need to import Lodash to achieve your goals
* More feature complete than [You Don't Need Lodash/Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore), and with tests to verify/support
* A method for me to learn how some of these functions actually work
* This isn't meant to be a complete replacement for _every_ Lodash function
* Each function probably isn't designed to cater to every situation that Lodash does ("good enough" rather than "perfect")
* Lodash doesn't treat each function in isolation, this library does for easy copy & pasting
  * Lodash re-uses a lot of functions as helpers or uses it's own collection of helpers, obscuring what the function is actually doing
  * This should mean that each function in this library should be copy-pasteable
  * This is also only achieved if each function is dependency free (even at the cost of duplication of logic)
* To leverage TypeScript for protection against edge cases, rather than protecting for them in code

## Why no barrel imports?

While bundling the code for the browser, tree-shaking of libraries such as Lodash happens automatically. However, testing frameworks such as Jest don't do this tree-shaking by design. This means that Jest will load the entire library (such as Lodash) into memory for each test file, using a lot of memory and causing slower tests.

In practise, removing barrel imports halved the run time of tests at my company despite the codebase increasing in size by 40%.

## Function list

| Function | Version exists? |
| --- | --- |
| (Array) _.chunk | [/src/chunk/chunk.ts](/src/chunk/chunk.ts) |
| (Array) _.compact | [/src/compact/compact.ts](src/compact/compact.ts) |
| (Array) _.concat | [/src/concat/concat.ts](src/concat/concat.ts) |
| (Array) _.difference | [/src/difference/difference.ts](src/difference/difference.ts) |
| (Array) _.differenceBy | [/src/differenceBy/differenceBy.ts](src/differenceBy/differenceBy.ts) |
| (Array) _.differenceWith | [/src/differenceWith/differenceWith.ts](src/differenceWith/differenceWith.ts) |
| (Array) _.drop | [/src/drop/drop.ts](src/drop/drop.ts) |
| (Array) _.dropRight | [/src/dropRight/dropRight.ts](src/dropRight/dropRight.ts) |
| (Array) _.dropRightWhile | ❌ |
| (Array) _.dropWhile | ❌ |
| (Array) _.fill | ❌ |
| (Array) _.findIndex | ❌ |
| (Array) _.findLastIndex | ❌ |
| (Array) _.first -> head | ❌ |
| (Array) _.flatten | [/src/flatten/flatten.ts](src/flatten/flatten.ts) |
| (Array) _.flattenDeep | [/src/flattenDeep/flattenDeep.ts](src/flattenDeep/flattenDeep.ts) |
| (Array) _.flattenDepth | [/src/flattenDepth/flattenDepth.ts](src/flattenDepth/flattenDepth.ts) |
| (Array) _.fromPairs | ❌ |
| (Array) _.head | ❌ |
| (Array) _.indexOf | ❌ |
| (Array) _.initial | ❌ |
| (Array) _.intersection | ❌ |
| (Array) _.intersectionBy | ❌ |
| (Array) _.intersectionWith | ❌ |
| (Array) _.join | ❌ |
| (Array) _.last | ❌ |
| (Array) _.lastIndexOf | ❌ |
| (Array) _.nth | ❌ |
| (Array) _.pull | ❌ |
| (Array) _.pullAll | ❌ |
| (Array) _.pullAllBy | ❌ |
| (Array) _.pullAllWith | ❌ |
| (Array) _.pullAt | ❌ |
| (Array) _.remove | ❌ |
| (Array) _.reverse | ❌ |
| (Array) _.slice | ❌ |
| (Array) _.sortedIndex | ❌ |
| (Array) _.sortedIndexBy | ❌ |
| (Array) _.sortedIndexOf | ❌ |
| (Array) _.sortedLastIndex | ❌ |
| (Array) _.sortedLastIndexBy | ❌ |
| (Array) _.sortedLastIndexOf | ❌ |
| (Array) _.sortedUniq | ❌ |
| (Array) _.sortedUniqBy | ❌ |
| (Array) _.tail | ❌ |
| (Array) _.take | ❌ |
| (Array) _.takeRight | ❌ |
| (Array) _.takeRightWhile | ❌ |
| (Array) _.takeWhile | ❌ |
| (Array) _.union | ❌ |
| (Array) _.unionBy | ❌ |
| (Array) _.unionWith | ❌ |
| (Array) _.uniq | ❌ |
| (Array) _.uniqBy | ❌ |
| (Array) _.uniqWith | ❌ |
| (Array) _.unzip | ❌ |
| (Array) _.unzipWith | ❌ |
| (Array) _.without | ❌ |
| (Array) _.xor | ❌ |
| (Array) _.xorBy | ❌ |
| (Array) _.xorWith | ❌ |
| (Array) _.zip | ❌ |
| (Array) _.zipObject | ❌ |
| (Array) _.zipObjectDeep | ❌ |
| (Array) _.zipWith | ❌ |
| (Collection) _.countBy | ❌ |
| (Collection) _.each -> forEach | ❌ |
| (Collection) _.eachRight -> forEachRight | ❌ |
| (Collection) _.every | ❌ |
| (Collection) _.filter | ❌ |
| (Collection) _.find | ❌ |
| (Collection) _.findLast | ❌ |
| (Collection) _.flatMap | ❌ |
| (Collection) _.flatMapDeep | ❌ |
| (Collection) _.flatMapDepth | ❌ |
| (Collection) _.forEach | ❌ |
| (Collection) _.forEachRight | ❌ |
| (Collection) _.groupBy | [/src/groupBy/groupBy.ts](/src/groupBy/groupBy.ts) |
| (Collection) _.includes | [/src/includes/includes.ts](/src/includes/includes.ts) |
| (Collection) _.invokeMap | ❌ |
| (Collection) _.keyBy | ❌ |
| (Collection) _.map | ❌ |
| (Collection) _.orderBy | ❌ |
| (Collection) _.partition | ❌ |
| (Collection) _.reduce | ❌ |
| (Collection) _.reduceRight | ❌ |
| (Collection) _.reject | ❌ |
| (Collection) _.sample | ❌ |
| (Collection) _.sampleSize | ❌ |
| (Collection) _.shuffle | ❌ |
| (Collection) _.size | ❌ |
| (Collection) _.some | [/src/some/some.ts](/src/some/some.ts) |
| (Collection) _.sortBy | [/src/sortBy/sortBy.ts](/src/sortBy/sortBy.ts) |
| (Date) _.now | ❌ |
| (Function) _.after | ❌ |
| (Function) _.ary | ❌ |
| (Function) _.before | ❌ |
| (Function) _.bind | ❌ |
| (Function) _.bindKey | ❌ |
| (Function) _.curry | ❌ |
| (Function) _.curryRight | ❌ |
| (Function) _.debounce | ❌ |
| (Function) _.defer | ❌ |
| (Function) _.delay | ❌ |
| (Function) _.flip | ❌ |
| (Function) _.memoize | [/src/memoize/memoize.ts](/src/memoize/memoize.ts) |
| (Function) _.negate | ❌ |
| (Function) _.once | [/src/once/once.ts](/src/once/once.ts) |
| (Function) _.overArgs | ❌ |
| (Function) _.partial | ❌ |
| (Function) _.partialRight | ❌ |
| (Function) _.rearg | ❌ |
| (Function) _.rest | ❌ |
| (Function) _.spread | ❌ |
| (Function) _.throttle | [/src/throttle/throttle.ts](/src/throttle/throttle.ts) |
| (Function) _.unary | ❌ |
| (Function) _.wrap | ❌ |
| (Lang) _.castArray | ❌ |
| (Lang) _.clone | ❌ |
| (Lang) _.cloneDeep | [/src/cloneDeep/cloneDeep.ts](/src/cloneDeep/cloneDeep.ts) |
| (Lang) _.cloneDeepWith | ❌ |
| (Lang) _.cloneWith | ❌ |
| (Lang) _.conformsTo | ❌ |
| (Lang) _.eq | ❌ |
| (Lang) _.gt | ❌ |
| (Lang) _.gte | ❌ |
| (Lang) _.isArguments | ❌ |
| (Lang) _.isArray | ❌ |
| (Lang) _.isArrayBuffer | ❌ |
| (Lang) _.isArrayLike | ❌ |
| (Lang) _.isArrayLikeObject | ❌ |
| (Lang) _.isBoolean | ❌ |
| (Lang) _.isBuffer | ❌ |
| (Lang) _.isDate | ❌ |
| (Lang) _.isElement | ❌ |
| (Lang) _.isEmpty | [/src/isEmpty/isEmpty.ts](/src/isEmpty/isEmpty.ts) |
| (Lang) _.isEqual | [/src/isEqual/isEqual.ts](/src/isEqual/isEqual.ts) |
| (Lang) _.isEqualWith | ❌ |
| (Lang) _.isError | ❌ |
| (Lang) _.isFinite | ❌ |
| (Lang) _.isFunction | ❌ |
| (Lang) _.isInteger | ❌ |
| (Lang) _.isLength | ❌ |
| (Lang) _.isMap | ❌ |
| (Lang) _.isMatch | ❌ |
| (Lang) _.isMatchWith | ❌ |
| (Lang) _.isNaN | ❌ |
| (Lang) _.isNative | ❌ |
| (Lang) _.isNil | ❌ |
| (Lang) _.isNull | ❌ |
| (Lang) _.isNumber | ❌ |
| (Lang) _.isObject | ❌ |
| (Lang) _.isObjectLike | ❌ |
| (Lang) _.isPlainObject | ❌ |
| (Lang) _.isRegExp | ❌ |
| (Lang) _.isSafeInteger | ❌ |
| (Lang) _.isSet | ❌ |
| (Lang) _.isString | ❌ |
| (Lang) _.isSymbol | ❌ |
| (Lang) _.isTypedArray | ❌ |
| (Lang) _.isUndefined | ❌ |
| (Lang) _.isWeakMap | ❌ |
| (Lang) _.isWeakSet | ❌ |
| (Lang) _.lt | ❌ |
| (Lang) _.lte | ❌ |
| (Lang) _.toArray | ❌ |
| (Lang) _.toFinite | ❌ |
| (Lang) _.toInteger | ❌ |
| (Lang) _.toLength | ❌ |
| (Lang) _.toNumber | ❌ |
| (Lang) _.toPlainObject | ❌ |
| (Lang) _.toSafeInteger | ❌ |
| (Lang) _.toString | ❌ |
| (Math) _.add | ❌ |
| (Math) _.ceil | ❌ |
| (Math) _.divide | ❌ |
| (Math) _.floor | ❌ |
| (Math) _.max | ❌ |
| (Math) _.maxBy | ❌ |
| (Math) _.mean | ❌ |
| (Math) _.meanBy | ❌ |
| (Math) _.min | ❌ |
| (Math) _.minBy | ❌ |
| (Math) _.multiply | ❌ |
| (Math) _.round | ❌ |
| (Math) _.subtract | ❌ |
| (Math) _.sum | ❌ |
| (Math) _.sumBy | ❌ |
| (Number) _.clamp | ❌ |
| (Number) _.inRange | ❌ |
| (Number) _.random | ❌ |
| (Object) _.assign | ❌ |
| (Object) _.assignIn | ❌ |
| (Object) _.assignInWith | ❌ |
| (Object) _.assignWith | ❌ |
| (Object) _.at | ❌ |
| (Object) _.create | ❌ |
| (Object) _.defaults | ❌ |
| (Object) _.defaultsDeep | ❌ |
| (Object) _.entries -> toPairs | ❌ |
| (Object) _.entriesIn -> toPairsIn | ❌ |
| (Object) _.extend -> assignIn | ❌ |
| (Object) _.extendWith -> assignInWith | ❌ |
| (Object) _.findKey | ❌ |
| (Object) _.findLastKey | ❌ |
| (Object) _.forIn | ❌ |
| (Object) _.forInRight | ❌ |
| (Object) _.forOwn | ❌ |
| (Object) _.forOwnRight | ❌ |
| (Object) _.functions | ❌ |
| (Object) _.functionsIn | ❌ |
| (Object) _.get | ❌ |
| (Object) _.has | [/src/has/has.ts](/src/has/has.ts) |
| (Object) _.hasIn | ❌ |
| (Object) _.invert | ❌ |
| (Object) _.invertBy | ❌ |
| (Object) _.invoke | ❌ |
| (Object) _.keys | ❌ |
| (Object) _.keysIn | ❌ |
| (Object) _.mapKeys | ❌ |
| (Object) _.mapValues | ❌ |
| (Object) _.merge | [/src/merge/merge.ts](/src/merge/merge.ts) |
| (Object) _.mergeWith | ❌ |
| (Object) _.omit | ❌ |
| (Object) _.omitBy | ❌ |
| (Object) _.pick | [/src/pick/pick.ts](/src/pick/pick.ts) |
| (Object) _.pickBy | ❌ |
| (Object) _.result | ❌ |
| (Object) _.set | ❌ |
| (Object) _.setWith | ❌ |
| (Object) _.toPairs | ❌ |
| (Object) _.toPairsIn | ❌ |
| (Object) _.transform | ❌ |
| (Object) _.unset | ❌ |
| (Object) _.update | ❌ |
| (Object) _.updateWith | ❌ |
| (Object) _.values | ❌ |
| (Object) _.valuesIn | ❌ |
| (String) _.camelCase | [/src/camelCase/camelCase.ts](/src/camelCase/camelCase.ts) |
| (String) _.capitalize | ❌ |
| (String) _.deburr | ❌ |
| (String) _.endsWith | ❌ |
| (String) _.escape | ❌ |
| (String) _.escapeRegExp | ❌ |
| (String) _.kebabCase | [/src/kebabCase/kebabCase.ts](/src/kebabCase/kebabCase.ts) |
| (String) _.lowerCase | ❌ |
| (String) _.lowerFirst | ❌ |
| (String) _.pad | ❌ |
| (String) _.padEnd | ❌ |
| (String) _.padStart | ❌ |
| (String) _.parseInt | ❌ |
| (String) _.repeat | ❌ |
| (String) _.replace | ❌ |
| (String) _.snakeCase | [/src/snakeCase/snakeCase.ts](/src/snakeCase/snakeCase.ts) |
| (String) _.split | ❌ |
| (String) _.startCase | [/src/startCase/startCase.ts](/src/startCase/startCase.ts) |
| (String) _.startsWith | ❌ |
| (String) _.template | ❌ |
| (String) _.toLower | ❌ |
| (String) _.toUpper | ❌ |
| (String) _.trim | ❌ |
| (String) _.trimEnd | ❌ |
| (String) _.trimStart | ❌ |
| (String) _.truncate | ❌ |
| (String) _.unescape | ❌ |
| (String) _.upperCase | ❌ |
| (String) _.upperFirst | [/src/upperFirst/upperFirst.ts](/src/upperFirst/upperFirst.ts) |
| (String) _.words | ❌ |
| (Util) _.attempt | ❌ |
| (Util) _.bindAll | ❌ |
| (Util) _.cond | ❌ |
| (Util) _.conforms | ❌ |
| (Util) _.constant | ❌ |
| (Util) _.defaultTo | ❌ |
| (Util) _.flow | ❌ |
| (Util) _.flowRight | ❌ |
| (Util) _.identity | ❌ |
| (Util) _.iteratee | ❌ |
| (Util) _.matches | ❌ |
| (Util) _.matchesProperty | ❌ |
| (Util) _.method | ❌ |
| (Util) _.methodOf | ❌ |
| (Util) _.mixin | ❌ |
| (Util) _.noConflict | ❌ |
| (Util) _.noop | [/src/noop/noop.ts](/src/noop/noop.ts) |
| (Util) _.nthArg | ❌ |
| (Util) _.over | ❌ |
| (Util) _.overEvery | ❌ |
| (Util) _.overSome | ❌ |
| (Util) _.property | ❌ |
| (Util) _.propertyOf | ❌ |
| (Util) _.range | ❌ |
| (Util) _.rangeRight | ❌ |
| (Util) _.runInContext | ❌ |
| (Util) _.stubArray | ❌ |
| (Util) _.stubFalse | ❌ |
| (Util) _.stubObject | ❌ |
| (Util) _.stubString | ❌ |
| (Util) _.stubTrue | ❌ |
| (Util) _.times | ❌ |
| (Util) _.toPath | ❌ |
| (Util) _.uniqueId | ❌ |
