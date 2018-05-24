let cars = [
  { id: 1, make: "Saturn", model: "Ion" },
  { id: 2, make: "Tesla", model: "Model S" }
];
let id = 3;

module.exports = {
  goGetTheCars: (req, res) => {
    res.status(200).send(cars);
  },

  addCar: (req, res) => {
    // console.log(JSON.stringify(req.body));
    cars.push({
      id: id,
      make: req.body.make,
      model: req.body.model
    });
    id++;
    res.status(200).send(cars);
  },

  deleteCar: (req, res) => {
    let id = cars.findIndex(e => {
    return e.id == req.params.id;
    });
    cars.splice(id, 1);
    res.status(200).send(cars);
  },
  
  updateCar:(req,res)=> {
    //   console.log(req.body);
      
    //   let id = cars.findIndex(e => {
    //       return e.id == req.params.id;
    //     });
    //     req.body.id.push(cars)

    for(i=0;i<cars.length;i++){
        console.log(req.body);
        
        if(cars[i].id == req.params.id){    
            cars[i].make = req.body.text.make
            cars[i].model = req.body.text.model
        };
    }
    
    res.status(200).send(cars);    
  }
};