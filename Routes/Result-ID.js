const res_id = (request, response) => {
    collection5.find({"seat_number":request.params.seat_number}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
};

module.exports = {res_id};