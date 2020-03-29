import jest from 'jest';
import packageA from '.';

test('packageA', () => {
    expect(packageA()).toEqual('packageA');
});
