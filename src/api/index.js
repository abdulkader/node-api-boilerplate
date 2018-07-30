import { name, description, version, author, license } from '../../package.json'
import { Router } from 'express'
import { esClient, catalogIndex } from './search'
// import facets from './facets'

export default ({ config }) => {
    let api = Router();

    console.log(config)
    	
    api.use('/search', (req, res) => {
        // console.log(req.query, req.params, req.body)
        const response = esClient.search({
            index: catalogIndex,
            body: {
                sort: [{
                        "_id": "desc"
                    },
                    {
                        "position_category_2023": {
                            "order": "desc"
                        }
                    }
                ],
                query: {
                    bool: {
                        must: [{
                            match: {
                                category_ids: "2023"
                            }
                        }]
                    }
                }
            }
        }).then(results => {
            res.json(results)
        })
    })

    // mount the facets resource
    // api.use('/facets', facets({
    //     config,
    //     db
    // }))

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
        res.json({ name, description, version, author, license });
	});

	return api;
}
