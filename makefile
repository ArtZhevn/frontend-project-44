install:
	npm ci
publish:
	npm publish --dry-run
lint: 
	npx eslint .
brain-calc:
	./bin/brain-calc.js
brain-gcd:
	./bin/brain-gcd.js