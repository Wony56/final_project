import routes from "../routes";
import Stretching from "../models/Stretching";

export const home = (req, res) => {
    res.render("upload");
}

export const upload = async (req, res) => {
    const {
        body: {
            url, highlight, location, target, occupation, situation
        }
    } = req;

    const situations = situation.split(',');

    console.log(req.body);

    try{
        await Stretching.create({
            url: url, highlightUrl: highlight, location: location, target: target, occupation: occupation, situations: situations
        })

        console.log("Data-input, Success!")
    }catch(error){
        console.log(error);
    }

    res.redirect(routes.home);
}