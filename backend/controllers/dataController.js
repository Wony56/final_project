import routes from "../routes";
import Stretching from "../models/Stretching";

export const home = (req, res) => {
    res.render("upload");
}

export const postUpload = async (req, res) => {
    const {
        body: {
            title, repetition, check, point, place, part, situation, hashtag, description
        },
        files
    } = req;

    try{
        const processList = files.map((file, index) => {
            return {
                imgPath: file.filename,
                description: description[index].split("&&")
            }
        });

        await Stretching.create({
            title,
            repetition,
            check,
            point,
            processList,
            place: place.split("&&"),
            part: part.split("&&"),
            situation: situation.split("&&"),
            hashtag: hashtag.split("&&"),
        })

        console.log("✔ Data-input, Success!");
    }catch(error){
        console.log(error);
    }

    res.redirect(routes.home);
}

export const postUploadMany = (req, res) => {
    const {
        body: {
            data
        }
    } = req;

    const stretchings = JSON.parse(data);
    console.log(stretchings);

    try{
        stretchings.forEach(async stretching => {
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
        res.status(201).json({ message: "Success!" });
    }catch(error){
        console.log(error);

        res.status(400).json({ message: "Fail!" });
    }
}

export const getAllStretchings = async (req, res) => {
    try{
        const datas = await Stretching.find({}).sort({views: "desc"}).limit(15);

        console.log(datas);

        res.status(200).json({ datas });
    }catch(error){
        console.log(error);

        res.status(200).json({ datas: [] });
    }
}

export const getStretchings = async (req, res) => {
    
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

        let datas = await Stretching.find({});

        if(condition.title){
            datas = datas.filter(data => data.title === condition.title.trim());
        }

        if(condition.place){
            datas = datas.filter(data => data.place.includes(condition.place.trim()));
        }

        if(condition.part){
            datas = datas.filter(data => data.part.includes(condition.part.trim()));
        }

        if(condition.situation){
            const regex = new RegExp(condition.situation.trim());
            datas = datas.filter(data => data.situation.filter(item => regex.test(item)).length > 0);
        }

        console.log(datas);
        res.status(200).json({ datas });
    }catch(error){
        console.log(error);
        res.status(200).json({ datas: [] });
    }
}

export const getView = async (req, res) => {
    const {
        params: {id}
    } = req;

    try{
        const stretching = await Stretching.findOne({_id: id});

        await Stretching.findOneAndUpdate({_id: id}, { views: stretching.views + 1});

        console.log("✔ Views up!");
        res.status(200).json({message: "Success!"});
    }catch(error){
        console.log(error);
        res.status(404).json({message: "Fail!"});
    }
}