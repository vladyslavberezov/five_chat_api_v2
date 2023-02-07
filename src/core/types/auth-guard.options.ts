export interface IComposeAuthDecoratorOptions {
  roleGuard: {
    operationId: string;
    object?: string;
    objectId?: string;
  };
  checkPassword?: boolean;
}
