# AGENTS.md

This repo values readability over completeness.

When editing utilities here:

* Keep each function small enough to understand in one read
* Fix correctness bugs inside the supported scope before adding new capability
* Do not add Lodash-level machinery unless the added complexity clearly improves the library
* Narrow types to the behavior the function actually supports
* Use descriptive type parameter names like `ArrayItem`, `CollectionItem`, `FunctionArguments`, and `ReturnedValue`
* Prefer tests that explain intended behavior over tests that only assert parity with another library

If a function would become hard to read in order to match Lodash more closely, prefer documenting the simpler supported behavior instead.
