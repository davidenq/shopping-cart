build:
	docker build --compress --force-rm --rm --tag shopping-cart .

run:
	docker run -d -t -i -p 3000:3000 -e PORT=3000 -e NODE_ENV=development --name shopping-cart shopping-cart

stop:
	docker stop shopping-cart

rm:
	docker rm shopping-cart

rmi:
	docker rmi shopping-cart

# run with docker-compose
run-dc:
	docker-compose up -d --build

stop-dc:
	docker-compose down