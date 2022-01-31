const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pro', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// // Membuat Schema
// const Contact = mongoose.model('Contact', {
//     nama: {
//         type: String,
//         required: true,
//     },
//     nohp: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//     }
// });

// // Menambah 1 data
// const contact1 = new Contact({
//     nama: 'Dev Diki',
//     nohp: '081212121212',
//     email: 'dev@gmail.com'
// });

// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact));
