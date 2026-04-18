# highdash

A small utility library inspired by Lodash

## Why does this exist?

There are some high level goals for this repo;

* To show that you might not need to import Lodash to achieve your goals
* A method for me to learn how some of these functions actually work
* This isn't meant to be a complete replacement for _every_ Lodash function
* Each function is intentionally a smaller, easier-to-read subset rather than a full Lodash clone
* Lodash doesn't treat each function in isolation, this library does for easy copy & pasting
  * Lodash re-uses a lot of functions as helpers or uses it's own collection of helpers, obscuring what the function is actually doing
  * This should mean that each function in this library should be copy-pasteable
  * This is also only achieved if each function is dependency free (even at the cost of duplication of logic)
* To use TypeScript to describe the supported inputs clearly, without pretending each function handles every edge case Lodash does

## Project philosophy

This library is not trying to become a line-for-line Lodash replacement.

The bar for each function is:

* You should be able to read the whole implementation quickly and understand how it works
* The supported behavior should be obvious from the code, tests, and types
* Correctness bugs in the supported scope should be fixed
* Complexity should only be added when it pays for itself in readability and confidence

That means:

* Prefer a smaller, explicit feature set over broad Lodash-style compatibility
* Prefer honest types over very wide overloads that suggest unsupported behavior
* Prefer tests that document intended behavior over tests that only chase parity
* Avoid deep helper systems that make individual utilities harder to understand
* Be explicit about supported shapes when a utility is intentionally narrow, such as `merge` only supporting arrays and plain objects

## TypeScript style

Type parameter names should describe what they represent.

Good examples:

* `ArrayItem`
* `CollectionItem`
* `FunctionArguments`
* `ReturnedValue`

Avoid single-letter names such as `T`, `R`, or `P` when a descriptive name would make the function easier to read.

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
| (Array) _.findIndex | [/src/findIndex/findIndex.ts](src/findIndex/findIndex.ts) |
| (Array) _.findLastIndex | ❌ |
| (Array) _.first -> head | [/src/head/head.ts](src/head/head.ts) |
| (Array) _.flatten | [/src/flatten/flatten.ts](src/flatten/flatten.ts) |
| (Array) _.flattenDeep | [/src/flattenDeep/flattenDeep.ts](src/flattenDeep/flattenDeep.ts) |
| (Array) _.flattenDepth | [/src/flattenDepth/flattenDepth.ts](src/flattenDepth/flattenDepth.ts) |
| (Array) _.fromPairs | [/src/fromPairs/fromPairs.ts](src/fromPairs/fromPairs.ts) |
| (Array) _.head | [/src/head/head.ts](src/head/head.ts) |
| (Array) _.indexOf | [/src/indexOf/indexOf.ts](src/indexOf/indexOf.ts) |
| (Array) _.initial | ❌ |
| (Array) _.intersection | [/src/intersection/intersection.ts](src/intersection/intersection.ts) |
| (Array) _.intersectionBy | ❌ |
| (Array) _.intersectionWith | ❌ |
| (Array) _.join | ❌ |
| (Array) _.last | [/src/last/last.ts](src/last/last.ts) |
| (Array) _.lastIndexOf | ❌ |
| (Array) _.nth | [/src/nth/nth.ts](src/nth/nth.ts) |
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
| (Array) _.tail | [/src/tail/tail.ts](src/tail/tail.ts) |
| (Array) _.take | [/src/take/take.ts](src/take/take.ts) |
| (Array) _.takeRight | [/src/takeRight/takeRight.ts](src/takeRight/takeRight.ts) |
| (Array) _.takeRightWhile | ❌ |
| (Array) _.takeWhile | ❌ |
| (Array) _.union | [/src/union/union.ts](src/union/union.ts) |
| (Array) _.unionBy | ❌ |
| (Array) _.unionWith | ❌ |
| (Array) _.uniq | [/src/uniq/uniq.ts](src/uniq/uniq.ts) |
| (Array) _.uniqBy | ❌ |
| (Array) _.uniqWith | ❌ |
| (Array) _.unzip | ❌ |
| (Array) _.unzipWith | ❌ |
| (Array) _.without | [/src/without/without.ts](src/without/without.ts) |
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
| (Collection) _.every | [/src/every/every.ts](src/every/every.ts) |
| (Collection) _.filter | [/src/filter/filter.ts](src/filter/filter.ts) |
| (Collection) _.find | [/src/find/find.ts](src/find/find.ts) |
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
| (Collection) _.map | [/src/map/map.ts](src/map/map.ts) |
| (Collection) _.orderBy | ❌ |
| (Collection) _.partition | ❌ |
| (Collection) _.reduce | ❌ |
| (Collection) _.reduceRight | ❌ |
| (Collection) _.reject | ❌ |
| (Collection) _.sample | ❌ |
| (Collection) _.sampleSize | ❌ |
| (Collection) _.shuffle | ❌ |
| (Collection) _.size | [/src/size/size.ts](src/size/size.ts) |
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
| (Lang) _.castArray | [/src/castArray/castArray.ts](src/castArray/castArray.ts) |
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
| (Object) _.keys | [/src/keys/keys.ts](src/keys/keys.ts) |
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
| (Object) _.toPairs | [/src/toPairs/toPairs.ts](src/toPairs/toPairs.ts) |
| (Object) _.toPairsIn | ❌ |
| (Object) _.transform | ❌ |
| (Object) _.unset | ❌ |
| (Object) _.update | ❌ |
| (Object) _.updateWith | ❌ |
| (Object) _.values | [/src/values/values.ts](src/values/values.ts) |
| (Object) _.valuesIn | ❌ |
| (String) _.camelCase | [/src/camelCase/camelCase.ts](/src/camelCase/camelCase.ts) |
| (String) _.capitalize | [/src/capitalize/capitalize.ts](src/capitalize/capitalize.ts) |
| (String) _.deburr | [/src/deburr/deburr.ts](src/deburr/deburr.ts) |
| (String) _.endsWith | [/src/endsWith/endsWith.ts](src/endsWith/endsWith.ts) |
| (String) _.escape | [/src/escape/escape.ts](src/escape/escape.ts) |
| (String) _.escapeRegExp | [/src/escapeRegExp/escapeRegExp.ts](src/escapeRegExp/escapeRegExp.ts) |
| (String) _.kebabCase | [/src/kebabCase/kebabCase.ts](/src/kebabCase/kebabCase.ts) |
| (String) _.lowerCase | [/src/lowerCase/lowerCase.ts](src/lowerCase/lowerCase.ts) |
| (String) _.lowerFirst | [/src/lowerFirst/lowerFirst.ts](src/lowerFirst/lowerFirst.ts) |
| (String) _.pad | [/src/pad/pad.ts](src/pad/pad.ts) |
| (String) _.padEnd | [/src/padEnd/padEnd.ts](src/padEnd/padEnd.ts) |
| (String) _.padStart | [/src/padStart/padStart.ts](src/padStart/padStart.ts) |
| (String) _.parseInt | [/src/parseInt/parseInt.ts](src/parseInt/parseInt.ts) |
| (String) _.repeat | [/src/repeat/repeat.ts](src/repeat/repeat.ts) |
| (String) _.replace | [/src/replace/replace.ts](src/replace/replace.ts) |
| (String) _.snakeCase | [/src/snakeCase/snakeCase.ts](/src/snakeCase/snakeCase.ts) |
| (String) _.split | [/src/split/split.ts](src/split/split.ts) |
| (String) _.startCase | [/src/startCase/startCase.ts](/src/startCase/startCase.ts) |
| (String) _.startsWith | [/src/startsWith/startsWith.ts](src/startsWith/startsWith.ts) |
| (String) _.template | ❌ |
| (String) _.toLower | [/src/toLower/toLower.ts](src/toLower/toLower.ts) |
| (String) _.toUpper | [/src/toUpper/toUpper.ts](src/toUpper/toUpper.ts) |
| (String) _.trim | [/src/trim/trim.ts](src/trim/trim.ts) |
| (String) _.trimEnd | [/src/trimEnd/trimEnd.ts](src/trimEnd/trimEnd.ts) |
| (String) _.trimStart | [/src/trimStart/trimStart.ts](src/trimStart/trimStart.ts) |
| (String) _.truncate | [/src/truncate/truncate.ts](src/truncate/truncate.ts) |
| (String) _.unescape | [/src/unescape/unescape.ts](src/unescape/unescape.ts) |
| (String) _.upperCase | [/src/upperCase/upperCase.ts](src/upperCase/upperCase.ts) |
| (String) _.upperFirst | [/src/upperFirst/upperFirst.ts](/src/upperFirst/upperFirst.ts) |
| (String) _.words | [/src/words/words.ts](src/words/words.ts) |
| (Util) _.attempt | ❌ |
| (Util) _.bindAll | ❌ |
| (Util) _.cond | ❌ |
| (Util) _.conforms | ❌ |
| (Util) _.constant | [/src/constant/constant.ts](src/constant/constant.ts) |
| (Util) _.defaultTo | [/src/defaultTo/defaultTo.ts](src/defaultTo/defaultTo.ts) |
| (Util) _.flow | ❌ |
| (Util) _.flowRight | ❌ |
| (Util) _.identity | [/src/identity/identity.ts](src/identity/identity.ts) |
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
| (Util) _.range | [/src/range/range.ts](src/range/range.ts) |
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
