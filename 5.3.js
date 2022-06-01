let test = function nestedArrayAndObject() {

    const info = {
        title: 'Once Upon a Time', 
        protagonist: {
            name: 'Emma Swan', 
            enemies: [
                {name: 'Regina Mills', title: 'Evil Queen'},
                {name: 'Cora Mills', title: 'Queen of Hearts'},
                {name: 'Zelena', title: 'The Wicked Witch'},
                {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
            ],
        }
    }
    let {title: serie , protagonist: {name: Hero, enemies: [{name: Enemies, title: title}]} } = info
        return `${Enemies} (${title}) is an enemy to ${Hero} in "${serie}`
    }
    
    console.log(test());