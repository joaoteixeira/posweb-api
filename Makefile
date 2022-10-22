start: up 
	make app-start	
	
up: 
	docker-compose up -d

down:
	docker-compose down

db:
	docker-compose exec db bash

app-start:
	npm run start:dev

migration:
	npm run migration

rollback:
	npm run migration:rollback