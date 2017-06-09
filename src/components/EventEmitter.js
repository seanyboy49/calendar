class EventEmitter {
  constructor() {
    this.events = {};
  }

  // register event
  on(eventName, callback) {
    if (this.events[eventName]) { // if the eventName already exists
      this.events[eventName].push(callback); // add it to the existing array
    } else {
      this.events[eventName] = [callback]; // otherwise, create an array with the new event
    }
  }

  // trigger the event, invoking every method tied to that event
  trigger(eventName, ...rest) { // collects all the arguments
    if(this.events[eventName] {
      this.events[eventName].forEach( cb=> {
        cb.apply(null,rest); // everything in the array will be applied as arguments to the cb
      });
    })
  }
}
