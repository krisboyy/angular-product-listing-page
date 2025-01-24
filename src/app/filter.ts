// filter.ts
export interface Filter {
    battery: {
      '5000': boolean;
      '5200': boolean;
    };
    price: {
      'lt10000': boolean;
      '10-15': boolean;
      'gt15000': boolean;
    };
  }