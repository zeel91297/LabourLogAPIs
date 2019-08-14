var db = require('../dbconnection');

var clients = {

    getClientInvoiceById: function (data, callback) {
        console.log('in query');
        console.log(data);
        var url = data;
        var str = url.split("&");
        var myId = str[0];
        var from = str[1];
        var to = str[2];
        // var JSONObj = { 'client_id ': str[0], 'work_date1': str[1], 'work_date2': str[2]}
        // console.log(db.query("select wf.workforce_name, workforce_work_detai.work_date,wf.workforce_rate, wf.workforce_bill_rate, workforce_work_detai.work_hours, (workforce_work_detai.work_hours*wf.workforce_bill_rate)  from  clients as cli join clients_workforces as cli_workfor on(cli.client_id=cli_workfor.client_id) join workforces_working_details as workforce_work_detai on(cli_workfor.client_workforce_id=workforce_work_detai.client_workforce_id) join  workforces as wf on (cli_workfor.workforce_id=wf.workforce_id) WHERE cli.client_id=1 && workforce_work_detai.work_date BETWEEN '2019-07-01' AND '2019-07-30'", callback));
        return db.query("select cli.client_name, wf.workforce_name as 'WorkForce_Name', workforce_work_detai.work_date as 'Date',wf.workforce_rate as 'WorkForce_Rate', wf.workforce_bill_rate as 'WorkForce_Bill_Rate', workforce_work_detai.work_hours as 'Working_Hours', (workforce_work_detai.work_hours*wf.workforce_bill_rate) as 'Total' from  clients as cli join clients_workforces as cli_workfor on(cli.client_id=cli_workfor.client_id) join workforces_working_details as workforce_work_detai on(cli_workfor.client_workforce_id=workforce_work_detai.client_workforce_id) join  workforces as wf on (cli_workfor.workforce_id=wf.workforce_id) WHERE cli.client_id=? && workforce_work_detai.work_date BETWEEN ? AND ?", [myId, from, to], callback);
        // return db.query('select * from clients ', callback);
    },
};

module.exports = clients;