const { expect } = require('chai');
const getColor = require('../getColor');

describe('Colors', function() {
    describe('Greater than comparisons (LH)', function() {
        it('Should return green', function() {
            const color = getColor('lh', 91, true);
            expect(color).to.equal('green');
        });
    
        it('Should return orange', function() {
            const color = getColor('lh', 89, true);
            expect(color).to.equal('orange');
        });
        it('Should return red', function() {
            const color = getColor('lh', 10, true);
            expect(color).to.equal('red');
        });
    });

    describe('Less than comparisons (CLS)', function() {
        it('Should return green', function() {
            const color = getColor('cls', 0.1);
            expect(color).to.equal('green');
        });
    
        it('Should return orange', function() {
            const color = getColor('cls', 0.2);
            expect(color).to.equal('orange');
        });
        it('Should return red', function() {
            const color = getColor('cls', 0.3);
            expect(color).to.equal('red');
        });
    });
});