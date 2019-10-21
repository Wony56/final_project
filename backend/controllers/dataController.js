import routes from "../routes";
import Stretching from "../models/Stretching";

export const home = (req, res) => {
    res.render("upload");
}

export const upload = async (req, res) => {
    const {
        body: {
<<<<<<< HEAD
            title, description, repetition, place, part, situation
=======
            title, description, place, part, situation
>>>>>>> develop
        },
        files
    } = req;

    const descriptions = description.split('&&');
    const situations = situation.split('&&');
    const imgPath = files.map(file => file.path);

    try{
        await Stretching.create({
            title,
            repetition,
            'description': descriptions, 
            'tag.place': place, 
            'tag.part': part, 
            'tag.situation': situations, 
            imgPath
        })

        console.log("✔ Data-input, Success!")
    }catch(error){
        console.log(error);
    }

    res.redirect(routes.home);
}

export const findAll = async (req, res) => {
    try{
        const datas = await Stretching.find({});

<<<<<<< HEAD
        console.log(datas);

=======
>>>>>>> develop
        res.status(200).json({ datas });
    }catch(error){
        console.log(error);

        res.status(200).json({ datas: [] });
    }
}

<<<<<<< HEAD
export const find = async (req, res) => {
=======
export const find = (req, res) => {
>>>>>>> develop
    
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

        let datas = await Stretching.find({})

        if(condition.title){
            datas = datas.map(data => {
                if(data.title === condition.title.trim()){
                    return data;
                }
            })
        }

        if(condition.place){
            datas = datas.map(data => {
                if(data.tag.place.includes(condition.place.trim())){
                    return data;
                }
            })
        }

        if(condition.part){
            datas = datas.map(data => {
                if(data.tag.part.includes(condition.part.trim())){
                    return data;
                }
            })
        }

        if(condition.situation){
            datas = datas.map(data => {
                if(data.tag.situation.includes(condition.situation.trim())){
                    return data;
                }
            })
        }

        console.log(datas);
        res.status(200).json({ datas });
    }catch(error){
        console.log(error);
        res.status(200).json({ datas: [] });
    }
}