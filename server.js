const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const testData = {
    title: 'CMS Prototype',
    pageContent: 'Chambray hell of hammock squid. Shaman cred PBR&B glossier marfa dreamcatcher. Typewriter banh pop-up,' +
      'hella humblebrag pok pok leggings try-hard art party stumptown dreamcatcher kombucha. Adaptogen ethical keytar,' +
      'williamsburg schlitz gentrify farm-to-table taxidermy yuccie gochujang pok pok snackwave intelligentsia. ',
    pageTitle: 'Lorem Hipsum - Coming from Express'
  };

app.get('/api', (req, res) => {
    res.send(testData)
})

app.get('*', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))