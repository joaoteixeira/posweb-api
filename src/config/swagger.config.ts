import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export const swaggerConfig = async (app: INestApplication) => {
    const config = new DocumentBuilder()
    .setTitle('API Pós Web - VLH')
    .setDescription('API Blog as rotas para Post, Category, User')
    .setVersion('1.0')
    .addTag('posts', 'Endpoints para o recurso de posts')
    .addTag('categories', 'Endpoints para o recurso de categories')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc-api', app, document);
  
  return { document };
};
