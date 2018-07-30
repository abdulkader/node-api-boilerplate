import resource from 'resource-router-middleware'
import elasticsearch from 'elasticsearch'

const path = require('path');

require('dotenv').config({
    path: path.join(__dirname, "../../.env")
});

const esClient = elasticsearch.Client({
    host: process.env.ES_HOST,
    log: process.env.ES_TRACE,
})
// catalog index name
const catalogIndex = 'magento2_product_1'

exports.esClient = esClient
exports.catalogIndex = catalogIndex

export default () => resource({
	/** Property name to store preloaded entity on `request`. */
    id: 'search',
    
    /** GET / - List all entities */
    index({ params }, res) {
        console.log(params)
        res.json({ 1:'2' });
    },
})