import routes from "../routes";
import Stretching from "../models/Stretching";

export const home = (req, res) => {
    res.render("upload");
}

export const upload = async (req, res) => {
    const {
        body: {
            title, description, place, part, situation
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

export const findAll = async (req, res) => {
    try{
        const datas = await Stretching.find({});

        res.status(200).json({ datas });
    }catch(error){
        console.log(error);

        res.status(200).json({ datas: [] });
    }
}

export const find = (req, res) => {
    
    const {
        query
    } = req;

    try{
        const condition = {
            title: query['title'] || null,
            place: query['place'] || null,
            part: query['part'] || null,
            situation: query['situation'] || null
        }

        console.log(condition);
    }catch(error){
        console.log(error);
    }

    res.redirect(routes.home);
}