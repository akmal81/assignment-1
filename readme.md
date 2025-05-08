## What are some differences between interfaces and types in TypeScript?

## differences 1
Interface define the strucure of an object and type can describe object, uninon and others

```ts
interface User {
  id: number;
  name: string;
}

type User = {
  id: number;
  name: string;
};
```

## differences 2
Interface can extend other interface but not extend type on the other hand type can extend both interface and type.

```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: string;
}

type User2 = {
  id: number;
  name: string;
};

type Admin = User2 & {
  role: string;
};

```

## differences 3
Interface not supported unions or intersections etc type on the other hand type support unions intersections etc.

```ts
type Status = "success" | "error" | "pending";
```

## differences 4

Interface does not support Tuples and priemitives but type suppost them.



interfaces are best for object  types are best for more complex type.







-----------------------------------------------------------------
-----------------------------------------------------------------


## What is the use of enums in TypeScript? Provide an example of a numeric and string enum.


Enums is a type script features. it is not javascript extension.  
enums allow to define set of named constants or unchangeable variables. 

## Use of enums

###### ✅Ues when working wilth a fixed set of related value like user role, week, etc. 
###### ✅Make code more readable, maintainable type-safe 
###### ✅Improves Readability 
###### ✅Better debugging with string
###### ✅Cleaner function arguments


## Declaration of enums

```ts
enum EnumsName {     
    value1,
    value2,
    value3
}
```
> Use capitalize name for best practice.

There are two types of enums: **string** and **numeric**

---

## ✅ Numeric Enums 

**numeric enums is default state of enums. by default enums will initialize first value to 0 and increase 1 to next value**

```ts
enum WebSiteRole {
    admin,     // 0
    modaretor, // 1
    accounts,  // 2
    hr,        // 3
    user,      // 4
}
```

---

## ✅ Numeric Enums Initializer

**we can initialize the value of first enum and it will increase automatically.**

```ts
enum WebSiteRole {
    admin = 1,     
    modaretor,
    accounts,  
    hr,       
    user,     
}

console.log(WebSiteRole.hr) // Output: 4
```

---

## ✅ Full Initialization

**we can initialize unique number for each value. in the case the it will not increase automaticaly.**

```ts
enum WebSiteRole {
    admin = 101,     
    modaretor = 102,
    accounts = 103,  
    hr = 104,       
    user = 105,     
}
```

---

## ✅ String Enums

**Enums can be string. this is more common than numeric enums, each value must be initialize with a string literal or with another string enums. string enums do not have auto-incrementing behavior and hold meaningful values. it will help while debugging.**

```ts
enum Role {
    admin = "admin",
    user = "user",
    guest = "guest",
}
```

---

## ✅ Heterogeneous Enums (Mix)

**This is not recommended but it is possible to create mix enums.**

```ts
enum MixEnums {
    No = 0,
    Yes = "Yes"
}
```

---

## ✅ Using Enums in Function

```ts
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Sunday) {
        return "WeekEnd";
    }
    else if (day === Day.Saturday) {
        return "WeekEnd";
    }
    else {
        return "WeekDay";
    }
}

const Sun = getDayType(Day.Sunday);    // Output: 'Weekend'
const Mon = getDayType(Day.Monday);    // Output: 'WeekDay'
const Sat = getDayType(Day.Saturday);  // Output: 'Weekend'
```
