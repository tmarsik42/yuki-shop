export interface Product {
	id: string;
	category: string;
	name: string;
	description: string;
	price: number;
	imgCount: number;
}

const skirts: Product[] = [
	{
		id: 'pastel-hearts',
		category: 'clothing',
		name: 'Pastel Hearts',
		description: '',
		price: 1200,
		imgCount: 2
	},
	{
		id: 'spring-welcome',
		category: 'clothing',
		name: 'Spring Welcome',
		description: '',
		price: 1200,
		imgCount: 4
	}
];

const original: Product[] = [
	{
		id: 'annas-rose-garden',
		category: 'clothing',
		name: "Anna's Rose Garden",
		description: '',
		price: 2300,
		imgCount: 3
	}
];

const accessories: Product[] = [
	/*
	{
		id: 'ac39e5d4-596e-4a75-ab00-1582374b606f',
		category: 'accessories',
		name: 'accessory 1',
		description: 'Lorem ipsum description of accessory 1...',
		price: 2000,
		url:
			'https://shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png'
	}
 	*/
];

const categories = new Map();
categories.set('skirts', skirts);
categories.set('original', original);
categories.set('accessories', accessories);

const clothingCategories = new Map();
clothingCategories.set('skirts', skirts);
clothingCategories.set('original', original);

export function getAll() {
	return categories;
}

export function getClothingCategories() {
	return clothingCategories;
}

export function getCategory(chosenCategory) {
	return findCategory(chosenCategory);

	function findCategory(c) {
		if (categories.has(c)) {
			return categories.get(c);
		} else {
			console.log('Category does not exist.');
		}
	}
}

export function getProduct(id) {
	let tmpArr = [];
	getAll().forEach((c) => tmpArr.push(c.filter((item) => item.id === id)));
	return tmpArr.filter((v) => v.length)?.flat()[0] ?? 'Zboží nenalezeno';
}
