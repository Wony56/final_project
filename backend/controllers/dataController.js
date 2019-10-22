import routes from "../routes";
import Stretching from "../models/Stretching";

export const home = (req, res) => {
    res.render("upload");
}

export const upload = async (req, res) => {
    const {
        body
    } = req;

    try{
        await Stretching.create({

        })

        console.log("✔ Data-input, Success!");
    }catch(error){
        console.log(error);
    }

    res.redirect(routes.home);
}

export const uploadMany = (req, res) => {
    const {
        body: {
            data
        }
    } = req;

    try{
        data.forEach(async stretching => {
            await Stretching.create({
                title: stretching.title,
                repetition: stretching.repetition,
                processList: stretching.processList,
                check: stretching.check,
                point: stretching.point,
                place: stretching.place,
                part: stretching.part,
                situation: stretching.situation,
                hashtag: stretching.hashtag
            });
        });

        console.log("✔ Data-input, Success!");
        res.status(201);
    }catch(error){
        console.log(error);

        res.status(400);
    }
}

export const findAll = async (req, res) => {
    try{
        const datas = await Stretching.find({});

        console.log(datas);

        res.status(200).json({ datas });
    }catch(error){
        console.log(error);

        res.status(200).json({ datas: [] });
    }
}

export const find = async (req, res) => {
    
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