export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /* eslint-disable-variable-change */
    const task = true;
    /* eslint-disable-variable-change */
    const task2 = false;
  }

  return [task, task2];
}
