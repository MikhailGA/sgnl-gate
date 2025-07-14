import { ApiResponse, ApiOperation } from '@nestjs/swagger';

export function AdvancedApiOperation(customOperationName = '') {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const operationName =
      customOperationName.length > 0 ? customOperationName : propertyKey;
    ApiOperation({ summary: operationName })(target, propertyKey, descriptor);
    ApiResponse({
      status: 400,
      description: 'Bad Request',
    })(target, propertyKey, descriptor);
    ApiResponse({
      status: 500,
      description: 'Internal server error',
    })(target, propertyKey, descriptor);
  };
}
