const spinner = (() => {
  const chars = ['|', '/', '-', '\\', '|'];
  for (let i = 0; i < chars.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${chars[i]}`);
      if (i === chars.length - 1) {
        process.stdout.write(`\n`);
      }
    }, 150 * i);
  }
});

spinner()