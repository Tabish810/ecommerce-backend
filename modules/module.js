var express = require('express');
var router = express.Router();
var all_records   = require('./api/application/AllRecords');
var fashionImages   = require('./api/application/fashionImages');
var mobileImages = require('./api/application/mobileImages');
var healthImages = require('./api/application/healthImages');
var laptopImages = require('./api/application/laptopImages');

        // All Items Collection
router.post('/AllRecords',all_records.saveData);

// Fashion Images
router.post('/insertFashionImages',fashionImages.saveData);
router.get('/getFashionImages',fashionImages.getData);

// Health Images
router.post('/insertHealthImages',healthImages.saveData);
router.get('/getHealthImages',healthImages.getData);

// mobile Images
router.post('/insertMobileImages',mobileImages.saveData);
router.get('/getMobileImages',mobileImages.getData);

// Laptop Images
router.post('/insertLaptopImages',laptopImages.saveData);
router.get('/getLaptopImages',laptopImages.getData);


module.exports = router;