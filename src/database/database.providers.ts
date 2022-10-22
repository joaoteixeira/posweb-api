import typeormConfig from "./typeorm.config"; 

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return typeormConfig.initialize();
    },
  },
];