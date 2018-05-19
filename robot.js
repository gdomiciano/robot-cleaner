// {
  robot = {
    commands: '2',
    start: { x:10, y:22 },
    steps: [{E:2}, {N:1}],
    path: [],
    clean: function() {
      this.path.push(this.start);
      this.steps.forEach(step => {
        switch(Object.keys(step)[0]) {
          case 'N':
            this.updatePath('y', +1);
            break;
          case 'E':
            this.updatePath('x', +1);
            break;
          case 'S':
            this.updatePath('y', -1);
            break;
          default:
            this.updatePath('x', -1);
            break;
        };
      });
    },
    updatePath: function (direction, step) {
      console.log("called update", direction, step)
      const currentPath = this.path;
      const lastPosition = currentPath[currentPath.length-1];
      let newPosition = {};
      if (direction === 'x'){
        newPosition = {
          x:lastPosition.x + step,
          y:lastPosition.y,
        }
      } else {
        newPosition = {
          x:lastPosition.x,
          y:lastPosition.y + step,
        }
      }
      // console.log(newPosition);
      return currentPath.push(newPosition);
    },
    unique: () => {
      console.log(this.path.length);
    }
  }

  robot.clean()


// }
