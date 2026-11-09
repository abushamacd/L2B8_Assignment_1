# Type Narrowing in TypeScript. Example of typeof, instanceof, and in Operator

## Introduction

Type narrowing is a feature of typescript that helps developer to reduce a variable's type from a large type to a more specific type. It allows typescript to understand which particular block of code performed based on the variable type. This improves type safety and helps prevent runtime errors. TypeScript provides several narrowing techniques, including typeof, instanceof, and the in operator.

## 1. Using typeof

The typeof operator checks the type of a primitive value at runtime.

```bash
const print = (value: string | number): string | number => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};
```

## 2. Using instanceof

The instanceof operator checks whether an object belongs to a particular class or constructor.

```bash
class Dog {
  bark() {
    console.log("Woof");
  }
}

class Cat {
  meow() {
    console.log("Meow");
  }
}

const animalSound = (animal: Dog | Cat): void => {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
};
```

## 3. Using the in Operator

The in operator checks whether a property exists in an object.

```bash
type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

const getDetails = (person: Admin | User): void => {
  if ("permissions" in person) {
    console.log("You are admin");
  } else {
    console.log("You are user");
  }
};
```

## Conclusion

Type Narrowing makes typeScript code safer, cleaner, and easier to understand and maintain. The typeof operator is useful for primitive types, instanceof is useful for class instances, and the in operator is useful for checking object properties. Understanding these techniques helps developers write more reliable typeScript code.
