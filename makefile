install:
	npm ci
brain-games:
	node bin/brainGames.js
brain-calc:
	node bin/brainCalc.js
brain-even:
	node bin/brainEven.js
brain-gcd:
	node bin/brainGCD.js
brain-progression:
	node bin/brainProgression.js
brain-prime:
	node bin/brainPrime.js
publish:
	npm publish --dry-run
lint: 
	npx eslint .
