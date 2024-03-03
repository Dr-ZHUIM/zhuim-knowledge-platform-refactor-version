function deepclone<T>(data:T):T{
	if (data === null) return data;
	if (typeof data === "object") {
		if (data instanceof Date) return new Date(data) as T;
		if (data instanceof RegExp) return new RegExp(data) as T;
		let clone:any;
		if (data instanceof Set){
			clone = new Set();
			Array.from(data.values()).forEach((value:any)=>{
				clone.add(deepclone(value));
			})
			return clone as T
		}
		if (data instanceof Map) {
			clone = new Map();
			Array.from(data.entries()).forEach(([key, value]) => {
				clone.set(deepclone(key), deepclone(value));
			})
			return clone as T
		}
		clone = Array.isArray(data) ? [] : {};
		for (let key in data) {
			clone[key] = deepclone(data[key]);
		}
		return clone;
	}
	return data;
}

let source1 = {
	a: 123,
	b: "hello",
	c: [1, 2, 3],
	d: {
		a: 123,
		b: "hello",
		c: [1, 2, 3],
	},
};
let source2 = [1,"string",true,[1,2,3,{a:1,b:{a:1}}],{a:2,c:{a:3}}];
let source3 = "test";
let source4 = 1;
let source5 = true;
let source6: null = null;
let source7 = new Map().set("a",123).set("b",{a:1}).set("c",[1,2,3,[1]]);
let source8 = new Set().add(123).add("333").add({a:1,b:2,c:{a:1,b:2}}).add([1,2,[1,2,[3]]]);

let target1 = deepclone(source1);
let target2 = deepclone(source2);
let target3 = deepclone(source3);
let target4 = deepclone(source4);
let target5 = deepclone(source5);
let target6 = deepclone(source6);
let target7 = deepclone(source7);
let target8 = deepclone(source8);

describe("object clone", () => {
	it("expect two same values", () => {
		expect(target1).toEqual(source1);
	});
	it("expect different memory locations",() => {
		expect(target1).not.toBe(source1);
	})
})

describe("array clone", () => {
	it("expect two same values", () => {
		expect(target2).toEqual(source2);
	});
	it("expect different memory locations",() => {
		expect(target2).not.toBe(source2);
	})
})

describe("basic data forms clone", () => {
	it("string", () => {
		expect(target3).toEqual(source3);
	})
	it("number", () => {
		expect(target4).toEqual(source4);
	})
	it("boolean", () => {
		expect(target5).toEqual(source5);
	})
	it("null", () => {
		expect(target6).toEqual(source6);
	})
})

describe("Map clone", () => {
	it("expect two same values", () => {
		expect(target7).toEqual(source7);
	});
	it("expect different memory locations",() => {
		expect(target7).not.toBe(source7);
	})
})

describe("Set clone", () => {
	it("expect two same values", () => {
		expect(target8).toEqual(source8);
	});
	it("expect different memory locations",() => {
		expect(target8).not.toBe(source8);
	})
})