const checkAir = function (samples, threshold) {
  // Code here!

  let dirty = 0;
  let clean = 0;

  samples.forEach(s => {
    if (s === 'clean') clean++;
    else dirty++;
  });

  let dirtyPercent = (dirty / samples.length);
  let cleanPercent = (clean / samples.length);

  if (dirtyPercent > threshold)
    return "Polluted";
  else
    return "Clean";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
