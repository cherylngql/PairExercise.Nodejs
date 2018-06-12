process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the new line
  if (cmd === "pwd"){
    const pwd = module.require('./pwd.js');
    pwd();
  } else if (cmd === "ls") {
    const ls = module.require('./ls.js');
    ls();
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }

});
