process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the new line
  if (cmd === "pwd"){
    const pwd = module.require('./pwd.js');
    pwd();
  } else if (cmd === "ls") {
    const ls = module.require('./ls.js');
    ls();
  } else if (cmd.split(' ')[0] === "cat") {
    const cat = module.require('./cat.js');
    cat(cmd.split(' ')[1]);
  } else if (cmd.split(' ')[0] === "curl") {
    const curl = module.require('./curl.js');
    curl(cmd.split(' ')[1]);
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }

});
