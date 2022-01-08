import { SharedUtils } from '@shared/utils/shared-utils';

describe('SharedUtils', () => {
  it('pascalToKebabCase should return a kebab-case string', () => {
    expect(SharedUtils.camelToKebabCase('ProductRange')).toBe('product-range');
    expect(SharedUtils.camelToKebabCase('product-range')).toBe('product-range');
    expect(SharedUtils.camelToKebabCase('Home')).toBe('home');
  });
});
