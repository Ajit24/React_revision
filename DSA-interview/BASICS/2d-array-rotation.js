//    Rotates the given array 90 degrees clockwise.

  function rotate90(a) {
	const w = a.length;
	const h = a[0].length;
	let b = new Array(h);
	for (let y=0; y<h; y++) {
		b[y] = new Array(w);
		for (let x=0; x<w; x++) {
			b[y][x] = a[w-1-x][y];
		}
	}
	return b;
}

// Rotates the given 2d array 180 degrees clockwise.

function rotate180(a) {
	const w = a[0].length;
	const h = a.length;
	let b = new Array(h);
	for (let y=0; y<h; y++) {
		let n = h-1-y;
		b[n] = new Array(w);
		for (let x=0; x<w; x++) {
			b[n][w-1-x] = a[y][x];
		}
	}
	return b;
}
