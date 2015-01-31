// Take "serial class list" and convert to a Javascript array
write('Enter filename to parse: ');
var file = readline();
var input = read(file);
input = input.trim();
var names = input.split("\n");
//print(names);
var output = '[';
names.forEach(function(entry){ 
  output += ('\'' + entry + '\',');
  });
output = output.slice(0, - 1);
output += ']';
print(output);
