export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /* eslint-disable-variable-change */
    const task = true;
    const task2 = false;
    /* eslint-disable-variable-change */
  }

  return [task, task2];
}
