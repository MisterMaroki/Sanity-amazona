import client from '@sanity/client';
export default client({
	projectId: config.projectId,
	dataset: config.dataset,
	useCdn: true,
});
