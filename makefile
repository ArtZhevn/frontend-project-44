install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-calc:
	node game/game-brain-calc.js
brain-even:
	node game/game-brain-even.js
brain-gcd:
	node game/game-brain-gcd.js
brain-progression:
	node game/game-brain-progression.js
publish:
	npm publish --dry-run
lint: 
	npx eslint .
