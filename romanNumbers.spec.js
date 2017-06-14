describe('romanNumbers-js-kata', function(){

  it('should have I when one passed', function() {
    var result = romanNumbers.convertToRoman(1);
    expect(result).toBe('I');
  });
  it('should have II when two passed', function() {
    var result = romanNumbers.convertToRoman(2);
    expect(result).toBe('II');
  });
  it('should have MCMLXXIX when 1979 passed', function() {
    var result = romanNumbers.convertToRoman(1979);
    expect(result).toBe('MCMLXXIX');
  });
  it('should have MMMMCCCLVII when 4357 passed', function() {
    var result = romanNumbers.convertToRoman(4357);
    expect(result).toBe('MMMMCCCLVII');
  });
});
