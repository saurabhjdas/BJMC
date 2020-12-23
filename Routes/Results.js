// http://localhost:8000/Results
const results =  (request, response) => {
    collection5.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
}; 

module.exports = {results};

//{"_id":"5fdb28abe541ba1b40467814","seat_number":"12376","prn":"2317112376","name":"ANUSE PRAJKTA BHANUDAS ","result":"PASS ","department":"OBSTETRICS & GYNAECOLOGY","result_year_id":"5fdb1550c769ee2b0feb16a1"}