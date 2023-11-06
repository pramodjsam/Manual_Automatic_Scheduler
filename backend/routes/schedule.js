const  express = require('express')
const router = express.Router();

const {
    getAllSchedule,
    createSchedule,
    deleteSchedule,

} = require('../controller/schedule')
    

router.route('/').get(getAllSchedule).post(createSchedule).delete(deleteSchedule);
module.exports = router