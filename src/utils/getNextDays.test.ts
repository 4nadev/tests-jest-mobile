import { getNextDays } from "./getNextDays"

it('should first', () => { 
    const days = getNextDays();
    expect(days.length).toBe(5);
 })