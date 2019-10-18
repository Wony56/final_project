import routes from "../routes";
import Stretching from "../models/Stretching";

export const home = (req, res) => {
    res.render("upload");
}

export const upload = async (req, res) => {
    const {
        body: {
            title, description, place, part, situation, image
        },
        files
    } = req;

    const descriptions = description.split('&&');
    const situations = situation.split('&&');
    const imgPath = files.map(file => file.path);

    try{
        await Stretching.create({
            title, 
            'description': descriptions, 
            'tag.place': place, 
            'tag.part': part, 
            'tag.situation': situations, 
            imgPath
        })

        console.log("Data-input, Success!")
    }catch(error){
        console.log(error);
    }

    res.redirect(routes.home);
}