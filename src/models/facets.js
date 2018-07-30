// our example model is just an Array
const facets = [{
    id: "__id",
    name: "facet_name",
    label: 'facet_label',
    properties: {
        multiselect:false,
        colorswatch: true,
        collapsed:false,
    },
    data: [{
        id: 'field_id',
        label: 'field_label',
        value: 120
    }, {
        id: 'field_id_2',
        label: 'field_label_2',
        value: 100
    }]
}];
export default facets;