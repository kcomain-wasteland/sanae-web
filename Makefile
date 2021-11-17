PORT=4001
DEV_EXPOSE_HOST="--host"

dev:
	npm run dev -- -p ${PORT} ${DEV_EXPOSE_HOST}

preview:
	npm run preview -- -p ${PORT} ${DEV_EXPOSE_HOST}

%: 
	npm run $@ 
