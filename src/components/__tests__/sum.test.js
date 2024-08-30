import { sum } from "../sum"

test('should give sum', () => {
  const result=sum();
  expect(result).toBe(7);
})
