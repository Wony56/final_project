import routes from "../routes";
import Stretching from "../models/Stretching";

export const home = (req, res) => {
    res.render("upload");
}

export const upload = async (req, res) => {
    const {
        body: {
            title, description, place, part, situation, image
        }
    } = req;

    const descriptions = description.split('&&');
    const situations = situation.split('&&');

    console.log(req.body);

    try{
        await Stretching.create({
            title, 
            'description': descriptions, 
            'tag.place': place, 
            'tag.part': part, 
            'tag.situation': situations, 
            image
        })
        
        console.log("Data-input, Success!")
    }catch(error){
        console.log(error);
    }

    res.redirect(routes.home);
}