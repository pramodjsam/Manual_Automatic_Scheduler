const {StatusCodes} = require('http-status-codes')
const fs = require('fs');
const CustomApiError = require('../errors/customerror');
const path = require('path');

const dataPath = "db\data.json";

const getAllSchedule = async (req,res) => {

    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("File Not Found");;
      }
      res.status(StatusCodes.OK).send(JSON.parse(data));
      });
}

const createSchedule = async (req,res) => {
      const data = req.body;
      console.log(data);
      const MondayValue = [ data.MorningUpStairsMonday, data.MorningDownStairsMonday, data.MorningParkingLotMonday, data.LunchAMonday, data.LunchBMonday, data.LunchCMonday, data.LunchDMonday, data.AfternoonUpStairsMonday, data.AfternoonDownStairsMonday, data.AfternoonParkingLotMonday, ]
      const TuesdayValue = [ data.MorningUpStairsTuesday, data.MorningDownStairsTuesday, data.MorningParkingLotTuesday, data.LunchATuesday, data.LunchBTuesday, data.LunchCTuesday, data.LunchDTuesday, data.AfternoonUpStairsTuesday, data.AfternoonDownStairsTuesday, data.AfternoonParkingLotTuesday, ]
      const WednesdayValue = [ data.MorningUpStairsWednesday, data.MorningDownStairsWednesday, data.MorningParkingLotWednesday, data.LunchAWednesday, data.LunchBWednesday, data.LunchCWednesday, data.LunchDWednesday, data.AfternoonUpStairsWednesday, data.AfternoonDownStairsWednesday, data.AfternoonParkingLotWednesday, ]
      const ThursdayValue = [ data.MorningUpStairsThursday, data.MorningDownStairsThursday, data.MorningParkingLotThursday, data.LunchAThursday, data.LunchBThursday, data.LunchCThursday, data.LunchDThursday, data.AfternoonUpStairsThursday, data.AfternoonDownStairsThursday, data.AfternoonParkingLotThursday, ]
      const FridayValue = [ data.MorningUpStairsFriday, data.MorningDownStairsFriday, data.MorningParkingLotFriday, data.LunchAFriday, data.LunchBFriday, data.LunchCFriday, data.LunchDFriday, data.AfternoonUpStairsFriday, data.AfternoonDownStairsFriday, data.AfternoonParkingLotFriday, ]
      const X1MondayValue = MondayValue?.filter(item => item == 'X1')?.length > 0 ?  MondayValue?.filter(item => item == 'X1').length : 0 ;
      const X1TuesdayValue = TuesdayValue?.filter(item => item == 'X1')?.length > 0 ?  TuesdayValue?.filter(item => item == 'X1').length : 0 ;
      const X1WednesdayValue = WednesdayValue?.filter(item => item == 'X1')?.length > 0 ?  WednesdayValue?.filter(item => item == 'X1').length : 0 ;
      const X1ThursdayValue = ThursdayValue?.filter(item => item == 'X1')?.length > 0 ?  ThursdayValue?.filter(item => item == 'X1').length : 0 ;
      const X1FridayValue = FridayValue?.filter(item => item == 'X1')?.length > 0 ?  FridayValue?.filter(item => item == 'X1').length : 0 ;
      const X2MondayValue = MondayValue?.filter(item => item == 'X2')?.length > 0 ?  MondayValue?.filter(item => item == 'X2').length : 0 ;
      const X2TuesdayValue = TuesdayValue?.filter(item => item == 'X2')?.length > 0 ?  TuesdayValue?.filter(item => item == 'X2').length : 0 ;
      const X2WednesdayValue = WednesdayValue?.filter(item => item == 'X2')?.length > 0 ?  WednesdayValue?.filter(item => item == 'X2').length : 0 ;
      const X2ThursdayValue = ThursdayValue?.filter(item => item == 'X2')?.length > 0 ?  ThursdayValue?.filter(item => item == 'X2').length : 0 ;
      const X2FridayValue = FridayValue?.filter(item => item == 'X2')?.length > 0 ?  FridayValue?.filter(item => item == 'X2').length : 0 ;
      const X3MondayValue = MondayValue?.filter(item => item == 'X3')?.length > 0 ?  MondayValue?.filter(item => item == 'X3').length : 0 ;
      const X3TuesdayValue = TuesdayValue?.filter(item => item == 'X3')?.length > 0 ?  TuesdayValue?.filter(item => item == 'X3').length : 0 ;
      const X3WednesdayValue = WednesdayValue?.filter(item => item == 'X3')?.length > 0 ?  WednesdayValue?.filter(item => item == 'X3').length : 0 ;
      const X3ThursdayValue = ThursdayValue?.filter(item => item == 'X3')?.length > 0 ?  ThursdayValue?.filter(item => item == 'X3').length : 0 ;
      const X3FridayValue = FridayValue?.filter(item => item == 'X3')?.length > 0 ?  FridayValue?.filter(item => item == 'X3').length : 0 ;
      const X4MondayValue = MondayValue?.filter(item => item == 'X4')?.length > 0 ?  MondayValue?.filter(item => item == 'X4').length : 0 ;
      const X4TuesdayValue = TuesdayValue?.filter(item => item == 'X4')?.length > 0 ?  TuesdayValue?.filter(item => item == 'X4').length : 0 ;
      const X4WednesdayValue = WednesdayValue?.filter(item => item == 'X4')?.length > 0 ?  WednesdayValue?.filter(item => item == 'X4').length : 0 ;
      const X4ThursdayValue = ThursdayValue?.filter(item => item == 'X4')?.length > 0 ?  ThursdayValue?.filter(item => item == 'X4').length : 0 ;
      const X4FridayValue = FridayValue?.filter(item => item == 'X4')?.length > 0 ?  FridayValue?.filter(item => item == 'X4').length : 0 ;
      const X5MondayValue = MondayValue?.filter(item => item == 'X5')?.length > 0 ?  MondayValue?.filter(item => item == 'X5').length : 0 ;
      const X5TuesdayValue = TuesdayValue?.filter(item => item == 'X5')?.length > 0 ?  TuesdayValue?.filter(item => item == 'X5').length : 0 ;
      const X5WednesdayValue = WednesdayValue?.filter(item => item == 'X5')?.length > 0 ?  WednesdayValue?.filter(item => item == 'X5').length : 0 ;
      const X5ThursdayValue = ThursdayValue?.filter(item => item == 'X5')?.length > 0 ?  ThursdayValue?.filter(item => item == 'X5').length : 0 ;
      const X5FridayValue = FridayValue?.filter(item => item == 'X5')?.length > 0 ?  FridayValue?.filter(item => item == 'X5').length : 0 ;
      const X6MondayValue = MondayValue?.filter(item => item == 'X6')?.length > 0 ?  MondayValue?.filter(item => item == 'X6').length : 0 ;
      const X6TuesdayValue = TuesdayValue?.filter(item => item == 'X6')?.length > 0 ?  TuesdayValue?.filter(item => item == 'X6').length : 0 ;
      const X6WednesdayValue = WednesdayValue?.filter(item => item == 'X6')?.length > 0 ?  WednesdayValue?.filter(item => item == 'X6').length : 0 ;
      const X6ThursdayValue = ThursdayValue?.filter(item => item == 'X6')?.length > 0 ?  ThursdayValue?.filter(item => item == 'X6').length : 0 ;
      const X6FridayValue = FridayValue?.filter(item => item == 'X6')?.length > 0 ?  FridayValue?.filter(item => item == 'X6').length : 0 ;
      const X7MondayValue = MondayValue?.filter(item => item == 'X7')?.length > 0 ?  MondayValue?.filter(item => item == 'X7').length : 0 ;
      const X7TuesdayValue = TuesdayValue?.filter(item => item == 'X7')?.length > 0 ?  TuesdayValue?.filter(item => item == 'X7').length : 0 ;
      const X7WednesdayValue = WednesdayValue?.filter(item => item == 'X7')?.length > 0 ?  WednesdayValue?.filter(item => item == 'X7').length : 0 ;
      const X7ThursdayValue = ThursdayValue?.filter(item => item == 'X7')?.length > 0 ?  ThursdayValue?.filter(item => item == 'X7').length : 0 ;
      const X7FridayValue = FridayValue?.filter(item => item == 'X7')?.length > 0 ?  FridayValue?.filter(item => item == 'X7').length : 0 ;
      const X1TotalValue = X1MondayValue +X1TuesdayValue +X1WednesdayValue +X1ThursdayValue +X1FridayValue;
      const X2TotalValue = X2MondayValue +X2TuesdayValue +X2WednesdayValue +X2ThursdayValue +X2FridayValue;
      const X3TotalValue = X3MondayValue +X3TuesdayValue +X3WednesdayValue +X3ThursdayValue +X3FridayValue;
      const X4TotalValue = X4MondayValue +X4TuesdayValue +X4WednesdayValue +X4ThursdayValue +X4FridayValue;
      const X5TotalValue = X5MondayValue +X5TuesdayValue +X5WednesdayValue +X5ThursdayValue +X5FridayValue;
      const X6TotalValue = X6MondayValue +X6TuesdayValue +X6WednesdayValue +X6ThursdayValue +X6FridayValue;
      const X7TotalValue = X7MondayValue +X7TuesdayValue +X7WednesdayValue +X7ThursdayValue +X7FridayValue;
      
      const newData = {
        X1MondayValue,
        X1TuesdayValue,
        X1WednesdayValue,
        X1ThursdayValue,
        X1FridayValue,
        X1TotalValue,
        X2MondayValue,
        X2TuesdayValue,
        X2WednesdayValue,
        X2ThursdayValue,
        X2FridayValue,
        X2TotalValue,
        X3MondayValue,
        X3TuesdayValue,
        X3WednesdayValue,
        X3ThursdayValue,
        X3FridayValue,
        X3TotalValue,
        X4MondayValue,
        X4TuesdayValue,
        X4WednesdayValue,
        X4ThursdayValue,
        X4FridayValue,
        X4TotalValue,
        X5MondayValue,
        X5TuesdayValue,
        X5WednesdayValue,
        X5ThursdayValue,
        X5FridayValue,
        X5TotalValue,
        X6MondayValue,
        X6TuesdayValue,
        X6WednesdayValue,
        X6ThursdayValue,
        X6FridayValue,
        X6TotalValue,
        X7MondayValue,
        X7TuesdayValue,
        X7WednesdayValue,
        X7ThursdayValue,
        X7FridayValue,
        X7TotalValue,
      }
      
      
      fs.writeFile(dataPath, JSON.stringify(newData), 'utf8', (err) => {
        if (err) {
          throw res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("File not found");
        }
        res.status(StatusCodes.CREATED).json({success:true})
   
      }); 
} 


const deleteSchedule = async (req,res) => {
    const data = {};
    fs.writeFile(dataPath, JSON.stringify(data), 'utf8', (err) => {
      if (err) {
        throw err;
      }
      res.status(StatusCodes.OK).json({success:true})
 
    });  
    res.status(StatusCodes.OK).json({success: true})
    
}

module.exports = {
    getAllSchedule,
    createSchedule,
    deleteSchedule,
    
}