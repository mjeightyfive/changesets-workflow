import jest from 'jest';
import packageB from '.';

test('packageB', () => {
    expect(packageB()).toEqual('packageB');
});
