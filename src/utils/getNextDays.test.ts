import { getNextDays } from "./getNextDays"

test('should first', () => { 
    const days = getNextDays();
    expect(days.length).toBe(5);
 })