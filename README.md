# Typescript blog

### 1. What are some differences between interfaces and types in TypeScript?

   #### a) Interfaces:

   Interfaces are generally used in the case of objects. They can also be used with arrays, but the array has to be placed inside an object, and the code becomes longer as a result.

   To extend interfaces, the extends keyword must be used.

   Example:

```
    interface User {
        name: string;
    }

    interface User2 extends User {
        role: string
    }

    interface UserRoll {
        [index: number]: number
    }

    const roll: UserRoll = [1, 2, 3]
```
     
#### b) Types:

Types are used for objects, arrays, or functions. 

No keyword is needed to extend Types.

Example:

```
    type User = {
        name: string;
    }

    type User2 = User & {
        role: string
    }

    type UserRoll = number[]

    const roll: UserRoll = [1, 2, 3]
```

### 2. Explain the difference between any, unknown, and never types in TypeScript.

#### a) any
If we come across a situation where we don't need to check the type, or type checking is not required, then we use the any type.

Example:
```
let data: any = 5;
data = "hello"; // No error
```

#### b) unknown
If I ever need to write a function where I don't know the type right now but will know it at runtime, then we use the unknown type.

Example: 
```
const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };
```

#### c) never 
If we ever realize that a function will never return any type, then it will be of the never type.

Example:
```
const throwError = (msg: string): never => {
    throw new Error(msg);
  };
```


### 3. Provide an example of using union and intersection types in TypeScript.

In conditional types, we use the ``` | ``` symbol to represent 'or', which is called a Union type.
Similarly, we use the ``` & ``` symbol to represent 'and', which is called an Intersection type.

#### Union type

```
function printId(id: number | string) {
  console.log(id);
}
```

#### Intersection type

```
type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Alex",
  employeeId: 101
};
```
