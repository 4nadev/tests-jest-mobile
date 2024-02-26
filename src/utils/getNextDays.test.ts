import { getNextDays } from './getNextDays';

describe('getNextDays', () => {
	it('should 2', () => {
		const days = getNextDays();
		expect(days.length).toBe(5);
	});

});
