import resource from 'resource-router-middleware';

export default ({ config, db }) => resource({
	/** Property name to store preloaded entity on `request`. */
	id: 'search',
});
