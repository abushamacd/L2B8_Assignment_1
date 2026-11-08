const multiplyValue = (value: number, multiplier: number = 2): number => {
  if (multiplier === 0) {
    return value * 0;
  }
  return value * multiplier;
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value === true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};

const formatCoordinate = (
  coordinateValue: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = coordinateValue;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = [];
  for (const array of arrays) {
    result.push(...array);
  }
  return result;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const result: Course[] = [];
  for (const course of courses) {
    if (course.isPublished === true && course.students >= minStudents) {
      result.push(course);
    }
  }

  return result;
};
