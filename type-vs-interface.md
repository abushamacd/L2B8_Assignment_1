# Differences between type aliases and interface in TypeScript, and When to Use Them

### Introduction

Type aliases and interface are the way to define variable or function perameter data structure. Both are helps to developer describe the data shape, improve the readability and reliablity also catch the error on development time not in interpretation process. They work same for the defination but their have some differnces

### Diffencences between type aliases and interface

Interface is generally use for define the data structure of an object

For Example:

```
interface User {
    name: string;
    age: number;
}
```

Interface is allow to inheritance using the extends keyword which is not to allow in type

```
interface Student extends User {
    marks : number;
}
```

Type alliases represent the primitives types, intersections, unions to literal types and other types

```
type Role = "Admin" | "Student" | "Teacher";

type User = {
    name: string;
    age: number;
    role: Role
};

type Student = User & {
    marks : number;
};
```

### When Should You Choose One Over the Other?

Use interface for defining object's data structure. It is particularly useful when you need inheritance or declaration merging.

Use type when working with union types, intersections, tuples, primitive aliases

### Conclusion

Type aliases and interface are essential and powerful features in typescript. Neither is universally better than the other. Use interface for object-oriented structures and type for more flexible type definition. Understanding their differences helps to developer write cleaner, more predictable code.
