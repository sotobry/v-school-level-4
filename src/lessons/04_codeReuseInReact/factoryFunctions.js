const barker = state => ({
  bark: () => console.log(`Woof, I am ${state.name}`)
});
const driver = state => ({
  drive: () => state.position = state.position + state.speed
});

// barker({ name: 'karo' }).bark();

const murderRobotDog = name => {
  let state = {
    name,
    speed: 100,
    position: 0
  };

  // return Object.assign(
  //   {},
  //   barker(state),
  //   driver(state),
  //   // killer(state)
  // );
  return { ...barker(state), ...driver(state) };

};

const sniffles = murderRobotDog('sniffles');
const karo = murderRobotDog('karo');
sniffles.bark();
karo.bark();