export class StringHelper {
  static camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`).substring(1);
}