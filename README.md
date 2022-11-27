# highdash

A lightweight replacement library for Lodash

## Why?

This library isn't meant to be a complete replacement for every Lodash function. It also isn't designed to cater to every situation that every function caters for.

It is designed to be a lightweight replacement for it for most cases, ignoring edge cases where it makes sense to do so.

It is also designed to be easily copy-and-pasteable. This is so you can either see how the algorithm works under the hood, or copy it for yourself without needing to install another NPM dependency.

## Why no barrel imports?

In my day-to-day job, I noticed that our tests were slow. While bundling the code for the browser tree-shook out libraries such as Lodash and our internal component library, Jest didn't do this tree-shaking. This meant that Jest was loading our entire component library (and other libraries such as Lodash) into memory for each test file, using gigabytes of memory and causing slow test.

Removing barrel imports halved the run time of our tests, despite the codebase increasing by 40% during the period of barrel-removal.

## Function list

| Function | Version exists? |
| --- | --- |
| (Array) _.chunk | import chunk from '@duncanogle/highdash/array/chunk'; |
| (Array) _.compact | import compact from '@duncanogle/highdash/array/compact'; |
| (Array) _.concat | import concat from '@duncanogle/highdash/array/concat'; |
| (Array) _.difference | ❌ |
| (Array) _.differenceBy | ❌ |
| (Array) _.differenceWith | ❌ |
| (Array) _.drop | ❌ |
| (Array) _.dropRight | ❌ |
| (Array) _.dropRightWhile | ❌ |
| (Array) _.dropWhile | ❌ |
| (Array) _.fill | ❌ |
| (Array) _.findIndex | ❌ |
| (Array) _.findLastIndex | ❌ |
| (Array) _.first -> head | ❌ |
| (Array) _.flatten | ❌ |
| (Array) _.flattenDeep | ❌ |
| (Array) _.flattenDepth | ❌ |
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
| (Collection) _.find | import find from '@duncanogle/highdash/collection/find'; |
| (Collection) _.findLast | ❌ |
| (Collection) _.flatMap | ❌ |
| (Collection) _.flatMapDeep | ❌ |
| (Collection) _.flatMapDepth | ❌ |
| (Collection) _.forEach | ❌ |
| (Collection) _.forEachRight | ❌ |
| (Collection) _.groupBy | ❌ |
| (Collection) _.includes | ❌ |
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
| (Collection) _.some | ❌ |
| (Collection) _.sortBy | ❌ |
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
| (Function) _.memoize | ❌ |
| (Function) _.negate | ❌ |
| (Function) _.once | ❌ |
| (Function) _.overArgs | ❌ |
| (Function) _.partial | ❌ |
| (Function) _.partialRight | ❌ |
| (Function) _.rearg | ❌ |
| (Function) _.rest | ❌ |
| (Function) _.spread | ❌ |
| (Function) _.throttle | ❌ |
| (Function) _.unary | ❌ |
| (Function) _.wrap | ❌ |
| (Lang) _.castArray | ❌ |
| (Lang) _.clone | ❌ |
| (Lang) _.cloneDeep | ❌ |
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
| (Lang) _.isEmpty | ❌ |
| (Lang) _.isEqual | ❌ |
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
| (Object) _.has | ❌ |
| (Object) _.hasIn | ❌ |
| (Object) _.invert | ❌ |
| (Object) _.invertBy | ❌ |
| (Object) _.invoke | ❌ |
| (Object) _.keys | ❌ |
| (Object) _.keysIn | ❌ |
| (Object) _.mapKeys | ❌ |
| (Object) _.mapValues | ❌ |
| (Object) _.merge | ❌ |
| (Object) _.mergeWith | ❌ |
| (Object) _.omit | ❌ |
| (Object) _.omitBy | ❌ |
| (Object) _.pick | ❌ |
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
| (String) _.camelCase | ❌ |
| (String) _.capitalize | ❌ |
| (String) _.deburr | ❌ |
| (String) _.endsWith | ❌ |
| (String) _.escape | ❌ |
| (String) _.escapeRegExp | ❌ |
| (String) _.kebabCase | ❌ |
| (String) _.lowerCase | ❌ |
| (String) _.lowerFirst | ❌ |
| (String) _.pad | ❌ |
| (String) _.padEnd | ❌ |
| (String) _.padStart | ❌ |
| (String) _.parseInt | ❌ |
| (String) _.repeat | ❌ |
| (String) _.replace | ❌ |
| (String) _.snakeCase | ❌ |
| (String) _.split | ❌ |
| (String) _.startCase | ❌ |
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
| (String) _.upperFirst | import upperFirst from '@duncanogle/highdash/string/upperFirst'; |
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
| (Util) _.noop | import noop from '@duncanogle/highdash/string/noop'; |
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
