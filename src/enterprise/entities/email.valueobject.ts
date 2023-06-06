export class Email {
  private _value: string;

  constructor(value: string) {
    if (!value.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)) {
      throw new Error("Invalid e-mail");
    }
    this._value = value;
  }

  get value(): string {
    return this._value;
  }
}
