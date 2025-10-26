import { describe, expect, test } from "vitest"
import { countDone, type SimpleTask } from "../utils/collection"

const sample: SimpleTask[] = [
	{ id: "1", title: "A", done: false },
	{ id: "2", title: "B", done: true },
	{ id: "3", title: "C", done: false, priority: "medium" },
	{ id: "5", title: "AC", done: false, priority: "high" },
]

describe("utils/collection", () => {
	test("countDone returns correct counters", () => {
		const c = countDone(sample)
		expect(c).toEqual({ total: 4, done: 1, pending: 3 })
	})

	// test.todo("TODO 01: pluckTitles 구현")
	test.todo("TODO 02: highPriorityFirst 구현")

	// test.todo("TODO 03: groupByDone 구현")
})
