describe('getDivBg', function() {
    //This is a test
    var d = document.querySelector('.box');

    it('Should be teal', function() {
        expect(d.style.backgroundColor).toBe('teal');
    });
});
