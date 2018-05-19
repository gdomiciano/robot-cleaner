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
            this.updatePath('y', +1, Object.values(step)[0]);
            break;
          case 'E':
            this.updatePath('x', +1, Object.values(step)[0]);
            break;
          case 'S':
            this.updatePath('y', -1, Object.values(step)[0]);
            break;
          default:
            this.updatePath('x', -1, Object.values(step)[0]);
            break;
        };
      });
    },
    updatePath: function (direction, stepPosition, totalSteps) {
      console.log("called update", direction, stepPosition)
      const currentPath = this.path;
      const lastPosition = currentPath[currentPath.length-1];
      let newPosition = {};

      for( let i; i < totalSteps){
        if (direction === 'x'){
          newPosition = {...newPosition,
            x:lastPosition.x + stepPosition,
            y:lastPosition.y,
          }
        } else {
          newPosition = {...newPosition,
            x:lastPosition.x,
            y:lastPosition.y + stepPosition,
          }
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
