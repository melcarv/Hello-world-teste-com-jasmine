describe('Hello world Test', function() {
    it('should says hello', function() {
        expect(helloWorld()).toEqual('Hello world!');
    });

    it('should contains hello', function() {
        expect(helloWorld()).toContain('Hello');
    });
});