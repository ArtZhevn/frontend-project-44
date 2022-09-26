install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-calc:
	node game/game-brain-calc.js
brain-even:
	node game/game-brain-even.js
publish:
	npm publish --dry-run
lint: 
	npx eslint .
