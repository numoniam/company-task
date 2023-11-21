const fs=require('fs')

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../Data/simple-data.json`))

//checkId middleware
exports.checkID=(req,res,next,value)=>{
    console.log(`tour id is :${value}`);
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'invalid id'
        })
    }
    next()

}
//check body middleware
exports.checkBody=(req,res,next)=>{
    if(!req.body.name || !req.body.price)
    {
        return res.status(400).json({
            status:"fail",
            message:"missing name or price"

        })
    }
    next()
}

exports.getAllTours = (req, res) => {

    console.log(req.requestTime);

    res.status(200).json({
        status: "success",
        requestAt:req.requestTime,
        result: tours.length,
        data: {
            tours: tours
        }
    })
}


exports.getTour = (req, res) => {
    console.log(req.params);

    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id)

    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'invalid id'
        })

    }
    res.status(200).json({
        status: "success",
        requestAt:req.requestTime,
        data: {
            tours: tour
        }
    })
}

exports.createTour = (req, res) => {
    const newId = tours[tours.length - 1].id + 1
    const newTour = Object.assign({ id: newId }, req.body)

    tours.push(newTour);

    fs.writeFile(`${__dirname}/Data/simple-data.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            requestAt:req.requestTime,
            data: {
                tours: newTour
            }

        })
    })
}

exports.updateTour = (req, res) => {

    

    // if (req.params.id * 1 > tours.length) {
    //     return res.status(404).json({
    //         status: 'fail',
    //         message: 'invalid id'
    //     })
    // }
    res.status(200).json({
        status: "success",
        requestAt:req.requestTime,
        data: {
            tour: '<updated tour here...>'
        }

    })
}

exports.deleteTour = (req, res) => {

    // if (req.params.id * 1 > tours.length) {
    //     return res.status(404).json({
    //         status: 'fail',
    //         message: 'invalid id'
    //     })
    // }
    res.status(204).json({
        status: "success",
        requestAt:req.requestTime,
        data: null
    })
}
