const httpStatus = require("http-status-codes");

const dataService = require("../services/data.service");
const constantsUtil = require("../utils/constants.util");

module.exports.joinData = async (req, res) => {
    try{
        const data = await dataService.joinData();
        if(data){
            return res.status(httpStatus.OK).json({
                responseCode: constantsUtil.SUCCESS_CODE,
                responseMessage: constantsUtil.SUCCESS_MSG,
                data: data
            });
        }
        else {
            return res.status(httpStatus.OK).json({
                responseCode: constantsUtil.ERROR_CODE_DATA_NOT_FOUND,
                responseMessage: constantsUtil.ERROR_MSG_DATA_NOT_FOUND,
                data: null,
            });
        }  
    }
    catch (exception) {
        console.log(exception);
    }
};
