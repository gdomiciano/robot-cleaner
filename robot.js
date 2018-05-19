// {

  Array.prototype.getUniqueObjs = function() {
    const arr = this;
    // const uniqValuesArr = arr.filter((item, index) => {
    //   console.log(item.x, arr.indexOf(Object.values(item)), Object.values(item))
    //   return arr.indexOf(item.x) > -1;
    // })
    console.log(Object.values(this));
    const uniqValuesArr = Object.values(this).map(item => {
      console.log(item);
      new Set([...arr].filter(x => !item.includes(x)))
    });

    console.log('final:', uniqValuesArr);
  }
  robot = {
    commands: '2',
    start: '10 22',
    steps: [{E:2}, {N:1}, {S:2}],
    path: [],
    clean: function() {
      this.path.push(this.start);
      this.steps.forEach(step => {
        switch(Object.keys(step)[0]) {
          case 'N':
            this.updatePath('y', -1, Object.values(step)[0]);
            break;
          case 'E':
            this.updatePath('x', +1, Object.values(step)[0]);
            break;
          case 'S':
            this.updatePath('y', +1, Object.values(step)[0]);
            break;
          default:
            this.updatePath('x', -1, Object.values(step)[0]);
            break;
        };
      });
    },

    updatePath: function (direction, stepPosition, totalSteps) {
      const currentPath = this.path;
      let lastPosition = currentPath[currentPath.length-1].split(' ').forEach(pos => parseInt(pos,10));
      console.log('lp', lastPosition);
      for(let i = 0; i < totalSteps; i++){
        let newPosition = {}
        if (direction === 'x'){
          newPosition = [lastPosition[0] + stepPosition, lastPosition[1]];
          console.log('lpX', lastPosition);
          this.addPosition(newPosition);
        } else {
          newPosition = [lastPosition[0], lastPosition[1] + stepPosition];
          console.log('lpY', lastPosition);
          this.addPosition(newPosition);
        }
        // lastPosition = newPosition
      }
    },

    addPosition(newPosition) {
      // console.log(newPosition);
      this.path.push(newPosition);
    },

    countUnique: function() {
      const unique = this.path.getUniqueObjs()
      console.log(`Cleaned: ${unique.length}`);
    }
  }

  robot.clean()
  robot.countUnique()

// }
