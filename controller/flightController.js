
const { Flights }= require("../model/Flight");
const {v4: uuid} = require("uuid");




//get all flights
exports.getFlights = async (req, res) => {
    try{
        const flights = Flights;
        res.status(200).json({
            message: "All flights",
            flights: flights
        });
    }catch(err){
    res.status(500).json({message: err});
    }
}
//get single flight

exports.getFlight = async (req, res)=>{
    try{
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id)
        res.status(200).json({
            message: "flight found",
            flight,
        });
    }catch(error){}
};


//add/book flight
exports.createFlight = async(req, res)=>{
    try{
        const { title, time, price, date } = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            price,
            date,
        }
        Flights.push(newFlight);

        res.status(201).json({
            message: "Flight created",
            newFlight,
        });

    }catch (err) {
        res.status(500).json({message: err.message})
    }
}

//update flight

//delete flight