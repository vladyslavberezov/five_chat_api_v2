/* eslint-disable @typescript-eslint/no-explicit-any */
import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsValidPassword(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isValidPassword',
      target: object.constructor,
      propertyName: propertyName,
      options: { ...validationOptions, message: 'Password is too weak.' },
      validator: {
        validate(value: any) {
          const hasNumber = /\d/g;
          // const hasSymbols = /[!@#$%^&*?_~]/g;
          const hasCapitalAlpha = /[A-Z]/g;
          const hasAlpha = /[a-z]/g;
          return value.length >= 10
            && value.match(hasCapitalAlpha)?.length >= 2
            && value.match(hasAlpha)?.length >= 2
            && value.match(hasNumber)?.length >= 1;
            // && value.match(hasSymbols)?.length >= 2;
        },
      },
    });
  };
}