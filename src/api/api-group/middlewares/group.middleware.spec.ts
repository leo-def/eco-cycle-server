import { GroupMiddleware } from './group.middleware';

describe('GroupMiddleware', () => {
  it('should be defined', () => {
    expect(new GroupMiddleware(null)).toBeDefined();
  });
});
