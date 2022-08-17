describe('Unit tests from Bootcamp', function () {
    it('Greet function', function () {
        assert.equal('Hello, Caleb', greet('Caleb'));

        assert.deepEqual([2, 2], [2, 2]);
    });

    it('isWeekDay function', function () {

        assert.equal(false, isWeekday('Saturday'));
        assert.equal(false, isWeekday('Sunday'));

    });

    it('fromWhere function', function () {

        assert.equal('Bellville', fromWhere('CY'));
        assert.equal('Paarl', fromWhere('CJ'));

    });
    it('totalPhoneBill function', function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });


});