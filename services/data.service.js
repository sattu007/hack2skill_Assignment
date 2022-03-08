const dataModel = require("../models/data.model");

module.exports.joinData = async function () {
    try {
        const combineData = await dataModel.UserPersonal.aggregate([
            {
                $lookup: {
                    from: "userteams",
                    localField: "email",
                    foreignField: "email",
                    as: "user_info",
                },
            },
            {
                $unwind: "$user_info",
            },
            {
                $project: { "_id": 0,
                            "team_name": "$user_info.team_name",
                            "full_name": "$full_name",
                            "email": "$email",
                            "number": "$number",
                            "city": "$city",
                            "url": "$url"
                           }
            }
        ]);
        return combineData;
    }
    catch (exception) {
        console.log(exception);
    }
};