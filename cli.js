const fs = require('fs');
const fastcsv = require('fast-csv');
const { format } = require('@fast-csv/format');
const { rotate } = require('./rotate');
let args = process.argv.slice(2);

const stream = format({headers:['id','json','is_valid'], quoteHeaders:false, quoteColumns:[false,true,false]});
stream.pipe(process.stdout);

fastcsv.parseFile(args[0],{ headers: true })
    .on('error', error => console.error(error))
    .on('data', row => {
      let arr = JSON.parse(row.json);
      let newarr = [];
      rotate(arr,newarr);
      stream.write([row.id,JSON.stringify(newarr),true]);
    });
