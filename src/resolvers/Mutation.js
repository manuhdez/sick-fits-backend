const Mutations = {
  createDog(parent, args, context, info) {
    // create a dog!
    global.dogs = global.dogs || [];
    const newDog = { name: args.name };
    global.dogs.push(newDog);
    console.log(args);
  }
};

module.exports = Mutations;
